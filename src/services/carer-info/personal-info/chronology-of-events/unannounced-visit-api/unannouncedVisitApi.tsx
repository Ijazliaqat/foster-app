import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const unAnnouncedVisitApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    unAnnouncedVisitList: builder.query<null, object>({
      query: (search: any) => ({
        url: "/chronology-events/unannounced-home-visit/list",
        method: "GET",
        params: search,
      }),
      providesTags: ["UNANNOUNCED_VISIT_LIST"],
    }),
    postUnAnnouncedVisitList: builder.mutation({
      query: (list: any) => ({
        url: "/chronology-events/unannounced-home-visit",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["UNANNOUNCED_VISIT_LIST"],
    }),
    singleUnAnnouncedVisitList: builder.query({
      query: (id: any) => `/chronology-events/unannounced-home-visit/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["UNANNOUNCED_VISIT_LIST"],
    }),
    patchUnAnnouncedVisitList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `/chronology-events/unannounced-home-visit/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["UNANNOUNCED_VISIT_LIST"],
    }),
    deleteUnAnnouncedVisitList: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/unannounced-home-visit/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UNANNOUNCED_VISIT_LIST"],
    }),
  }),
});
export const {
  useUnAnnouncedVisitListQuery,
  useLazySingleUnAnnouncedVisitListQuery,
  usePostUnAnnouncedVisitListMutation,
  usePatchUnAnnouncedVisitListMutation,
  useDeleteUnAnnouncedVisitListMutation,
} = unAnnouncedVisitApi;
