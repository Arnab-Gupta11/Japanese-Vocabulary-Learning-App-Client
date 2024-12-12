import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useSingleLesson = (id) => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["singleLesson", id],
    queryFn: async () => {
      const res = await get(`/lessons/${id}`);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useSingleLesson;
