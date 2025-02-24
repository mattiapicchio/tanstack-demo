export type Repos = GithubRepo[];

export type GithubRepo = {
  name: string;
  id: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
};
