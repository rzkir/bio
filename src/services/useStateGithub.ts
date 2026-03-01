import { computed, ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

// Di dev pakai proxy Vite (/api → rizkiramadhan.web.id) untuk hindari CORS
const API_BASE =
  import.meta.env.DEV
    ? "/api/github-contributions"
    : "https://rizkiramadhan.web.id/api/github-contributions";

export type RepoContribution = {
  nameWithOwner: string;
  url: string;
  totalCount: number;
};

export type GithubContributionsResponse = {
  totalCommitContributions: number;
  repos: RepoContribution[];
};

export const CURRENT_YEAR = new Date().getFullYear();
export const MAX_DOTS = 52;
export const INITIAL_REPOS = 10;

export const YEAR_OPTIONS: { value: "last" | number; label: string }[] = [
  { value: "last", label: "Last year" },
  ...Array.from({ length: 2 }, (_, i) => ({
    value: (CURRENT_YEAR - i) as number,
    label: String(CURRENT_YEAR - i),
  })),
];

function getDateRange(year: "last" | number): { from: string; to: string } {
  const to = new Date();
  if (year === "last") {
    const from = new Date(to);
    from.setDate(from.getDate() - 365);
    return {
      from: from.toISOString().slice(0, 10),
      to: to.toISOString().slice(0, 10),
    };
  }
  return {
    from: `${year}-01-01`,
    to: `${year}-12-31`,
  };
}

async function fetchGithubContributions(
  username: string,
  from: string,
  to: string
): Promise<GithubContributionsResponse> {
  const url = new URL(API_BASE);
  url.searchParams.set("username", username);
  url.searchParams.set("from", from);
  url.searchParams.set("to", to);

  const res = await fetch(url.toString());
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export function useStateGithub(username = "rzkir") {
  const selectedYear = ref<"last" | number>("last");
  const showAllRepos = ref(false);

  const queryKey = computed(() =>
    ["github-contributions", username, selectedYear.value] as const
  );

  const query = useQuery({
    queryKey,
    queryFn: () => {
      const { from, to } = getDateRange(selectedYear.value);
      return fetchGithubContributions(username, from, to);
    },
  });

  watch(selectedYear, () => {
    showAllRepos.value = false;
  });

  const totalContributions = computed(
    () => query.data.value?.totalCommitContributions ?? 0
  );
  const repos = computed(() => query.data.value?.repos ?? []);

  const yearLabel = computed(() =>
    selectedYear.value === "last"
      ? "Last 365 days"
      : `Year ${selectedYear.value}`
  );

  return {
    selectedYear,
    setSelectedYear: (v: "last" | number) => {
      selectedYear.value = v;
    },
    showAllRepos,
    setShowAllRepos: (v: boolean) => {
      showAllRepos.value = v;
    },
    data: computed(() => query.data.value),
    loading: computed(() => query.isPending.value),
    error: computed(() =>
      query.error.value ? (query.error.value as Error).message : null
    ),
    totalContributions,
    repos,
    yearLabel,
    refetch: query.refetch,
  };
}
