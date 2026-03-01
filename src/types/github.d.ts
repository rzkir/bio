type RepoContribution = {
  nameWithOwner: string;
  url: string;
  totalCount: number;
};

type DayContribution = {
  date: string;
  count: number;
};

type GithubContributionsResponse = {
  totalCommitContributions: number;
  repos: RepoContribution[];
  calendar: DayContribution[];
};
type RepoContribution = {
  nameWithOwner: string;
  url: string;
  totalCount: number;
};

type GithubContributionsResponse = {
  totalCommitContributions: number;
  repos: RepoContribution[];
};

type RepoContribution = {
  nameWithOwner: string;
  url: string;
  totalCount: number;
};
