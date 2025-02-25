import { fetchRequest } from "@/connectivity/fetchRequest";
import { GetDemoIssuesRequest, Issues, Repos } from "./types.repo";

export function getOctocatRepos() {
  return fetchRequest<Repos>("users/octocat/repos");
}

export function getDemoIssues({ page, pageSize }: GetDemoIssuesRequest) {
  const url = `repos/octocat/Spoon-Knife/issues?page=${page}&per_page=${pageSize}`;
  return fetchRequest<Issues>(url);
}
