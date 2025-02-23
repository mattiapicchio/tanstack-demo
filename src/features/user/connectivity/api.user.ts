import { fetchRequest } from "@/connectivity/fetchRequest";
import { Repos, User } from "./types.user";

export function getOctocatUser() {
  return fetchRequest<User>("octocat");
}

export function getOctocatRepos() {
  return fetchRequest<Repos>("octocat/repos");
}
