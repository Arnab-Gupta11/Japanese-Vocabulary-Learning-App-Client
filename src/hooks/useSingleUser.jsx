import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useSingleUser = (id) => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["singleUser", id],
    queryFn: async () => {
      const res = await get(`/lessons/${id}`);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useSingleUser;
