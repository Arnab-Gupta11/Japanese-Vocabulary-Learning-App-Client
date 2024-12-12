import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useLessons = () => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      const res = await get(`/lessons`);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useLessons;
