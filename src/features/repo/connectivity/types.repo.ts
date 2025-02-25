export type Repos = GithubRepo[];

export type GithubRepo = {
  name: string;
  id: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
};

export type GetDemoIssuesRequest = {
  page: number;
  pageSize: number;
};

export type Issues = GithubIssue[];

export type GithubIssue = {
  id: string;
  url: string;
  html_url: string;
  number: number;
  title: string;
};
