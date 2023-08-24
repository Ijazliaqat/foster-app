import { baseAPI } from "@root/services/baseApi";

export const allegationInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllAllegationListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "events-and-notification/allegation/List",
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
      providesTags: ["ALLEGATION_INFO"],
    }),
    getSingleAllegationInfoData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/allegation/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
    }),
    postAllegationInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "events-and-notification/allegation",
        method: "POST",
        params: apiDataParameter.queryParams,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["ALLEGATION_INFO"],
    }),
    patchAllegationInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/allegation/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter?.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["ALLEGATION_INFO"],
    }),
    deleteAllegationInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `events-and-notification/allegation/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
        params: apiDataParameter?.queryParams,
      }),
      invalidatesTags: ["ALLEGATION_INFO"],
    }),
  }),
});

export const {
  useGetAllAllegationListDataQuery,
  useLazyGetAllAllegationListDataQuery,
  useLazyGetSingleAllegationInfoDataQuery,
  useGetSingleAllegationInfoDataQuery,
  usePatchAllegationInfoDataMutation,
  usePostAllegationInfoDataMutation,
  useDeleteAllegationInfoDataMutation,
} = allegationInfoApi;
