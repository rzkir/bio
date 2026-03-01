import { computed, ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";

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

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;

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
  to: string,
): Promise<GithubContributionsResponse> {
  if (!GITHUB_TOKEN) {
    throw new Error("GitHub token tidak dikonfigurasi (VITE_GITHUB_TOKEN).");
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        query ($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              totalCommitContributions
              commitContributionsByRepository(maxRepositories: 100) {
                contributions {
                  totalCount
                }
                repository {
                  nameWithOwner
                  url
                }
              }
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        login: username,
        from: `${from}T00:00:00Z`,
        to: `${to}T23:59:59Z`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const json: any = await response.json();

  if (json.errors && json.errors.length > 0) {
    throw new Error(json.errors[0].message || "GitHub API error");
  }

  const collection = json.data?.user?.contributionsCollection ?? {
    totalCommitContributions: 0,
    commitContributionsByRepository: [],
    contributionCalendar: { weeks: [] },
  };

  const repos: RepoContribution[] = (
    collection.commitContributionsByRepository ?? []
  ).map((item: any) => ({
    nameWithOwner: item.repository.nameWithOwner,
    url: item.repository.url,
    totalCount: item.contributions.totalCount,
  }));

  const calendar: DayContribution[] = [];
  const weeks = collection.contributionCalendar?.weeks ?? [];

  for (const week of weeks) {
    for (const day of week.contributionDays ?? []) {
      calendar.push({
        date: day.date,
        count: day.contributionCount,
      });
    }
  }

  return {
    totalCommitContributions: collection.totalCommitContributions ?? 0,
    repos,
    calendar,
  };
}

export function useStateGithub(username = "rzkir") {
  const selectedYear = ref<"last" | number>("last");
  const showAllRepos = ref(false);

  const queryKey = computed(
    () => ["github-contributions", username, selectedYear.value] as const,
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
    () => query.data.value?.totalCommitContributions ?? 0,
  );
  const repos = computed(() => query.data.value?.repos ?? []);
  const calendarValues = computed(
    () => query.data.value?.calendar ?? [],
  );

  const yearLabel = computed(() =>
    selectedYear.value === "last"
      ? "Last 365 days"
      : `Year ${selectedYear.value}`,
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
      query.error.value ? (query.error.value as Error).message : null,
    ),
    totalContributions,
    repos,
    calendarValues,
    yearLabel,
    refetch: query.refetch,
  };
}
