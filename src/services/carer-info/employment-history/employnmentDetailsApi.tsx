import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import { baseAPI } from "../../baseApi";

export const userAPI: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExperience: builder.query<null, void>({
      query: () => "employment-history",
      providesTags: ["Experience"],
    }),
    experience: builder.mutation({
      query: (notes: any) => ({
        url: "employment-history",
        method: "POST",
        body: notes,
      }),
      invalidatesTags: ["Experience"],
    }),
    editExperience: builder.mutation({
      query: ({ id, payload }) => ({
        url: `employment-history/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Experience"],
    }),
    singleExperience: builder.query({
      query: (id: any) => `employment-history/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["Experience", 'SingleExperience'],
    }),
    deleteExperience: builder.mutation({
      query: (experienceId: any) => ({
        url: `/employment-history/experience/${experienceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience", 'SingleExperience'],
    }),
  }),
});

export const {
  useGetExperienceQuery,
  useExperienceMutation,
  useLazyGetSingleExperienceQuery,
  useEditExperienceMutation,
  useDeleteExperienceMutation,
} = userAPI;
