import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useSingleVocabulary = (id) => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["singleVocabulary", id],
    queryFn: async () => {
      const res = await get(`/vocabularies/${id}`);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useSingleVocabulary;
