// import { useQuery } from "@tanstack/react-query";
// import { get } from "../services/ApiEndpoint";

// const useVocabularies = () => {
//   const {
//     refetch,
//     data: result = [],
//     isLoading,
//     isPending,
//   } = useQuery({
//     queryKey: ["vocabulary"],
//     queryFn: async () => {
//       const res = await get(`/vocabularies`);
//       return res?.data?.data;
//     },
//   });

//   return [result, refetch, isLoading, isPending];
// };

// export default useVocabularies;
import { useQuery } from "@tanstack/react-query";
import { get } from "../services/ApiEndpoint";

const useVocabularies = (lessonNo) => {
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["vocabulary", lessonNo], // Add lessonNo to queryKey for caching
    queryFn: async () => {
      const url = lessonNo ? `/vocabularies?lessonNo=${lessonNo}` : `/vocabularies`;
      const res = await get(url);
      return res?.data?.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useVocabularies;
