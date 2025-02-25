import { fetchRequest } from "@/connectivity/fetchRequest";
import { User } from "./types.user";

export function getOctocatUser() {
  return fetchRequest<User>("users/octocat");
}
