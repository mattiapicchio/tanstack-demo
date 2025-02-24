import { QUERY_KEY } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getOctocatUser } from "./api.user";

export const useQueryOctocatUser = () =>
  useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getOctocatUser,
  });
