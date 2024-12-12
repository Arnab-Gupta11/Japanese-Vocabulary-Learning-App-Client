import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const usePaginatedVocabularies = (lessonId, page = 1, limit = 1) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["paginatedVocabularies", lessonId, page],
    queryFn: async () => {
      const response = await get(`/vocabularies/paginate/${lessonId}?page=${page}&limit=${limit}`);
      return response?.data;
    },
    keepPreviousData: true, // Retain previous data while fetching new data
  });

  return {
    vocabularies: data?.data || [],
    totalPages: data?.totalPages || 0,
    currentPage: data?.currentPage || 1,
    isLoading,
    refetch,
  };
};

export default usePaginatedVocabularies;
