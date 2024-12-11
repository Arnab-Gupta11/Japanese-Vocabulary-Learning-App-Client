import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useUsers = () => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await get(`/users`);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useUsers;
