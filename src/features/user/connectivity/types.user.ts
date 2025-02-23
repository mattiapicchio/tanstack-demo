// minimum interface principle
export interface User {
  id: string;
  name: string;
  html_url: string;
  repos_url: string;
  avatar_url: string;
  company: string;
  public_repos: number;
  followers: number;
}

export type Repos = GithubRepo[];

type GithubRepo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
};
