import { QUERY_KEY } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getOctocatRepos } from "./api.repo";

export const useQueryOctocatRepos = () =>
  useQuery({
    queryKey: [QUERY_KEY.REPOS],
    queryFn: getOctocatRepos,
  });
