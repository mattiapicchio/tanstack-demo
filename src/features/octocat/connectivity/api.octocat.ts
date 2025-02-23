import { fetchRequest } from "@/connectivity/fetchRequest";
import {
  GetOctocatReposResponse,
  GetOctocatUserResponse,
} from "./types.octocat";

export function getOctocatUser() {
  return fetchRequest<GetOctocatUserResponse>("octocat");
}

export function getOctocatRepos() {
  return fetchRequest<GetOctocatReposResponse>("octocat/repos");
}
