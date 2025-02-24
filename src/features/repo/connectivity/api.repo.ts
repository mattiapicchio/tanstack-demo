import { fetchRequest } from "@/connectivity/fetchRequest";
import { Repos } from "./types.repo";

export function getOctocatRepos() {
  return fetchRequest<Repos>("octocat/repos");
}
