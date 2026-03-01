/// <reference types="vite/client" />

declare module "github-calendar" {
  function GitHubCalendar(
    container: string | HTMLElement,
    username: string,
    options?: {
      summary_text?: string;
      proxy?: (username: string) => Promise<Response | string>;
      global_stats?: boolean;
      responsive?: boolean;
      tooltips?: boolean;
      cache?: number;
    }
  ): Promise<unknown>;
  export = GitHubCalendar;
}
