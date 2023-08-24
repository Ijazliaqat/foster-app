import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const annualReviewApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    annualReviewList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `carer-Info/list-annual-review/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    postAnnualReviewList: builder.mutation({
      query: (payload: any) => ({
        url: `carer-Info/add-annual-review`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    singleAnnualReviewList: builder.query({
      query: (id: any) => `carer-Info/get-annual-review/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    patchAnnualReviewList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
    deleteAnnualReviewList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/allegation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FOSTER_CARER_ANNUAL_LIST"],
    }),
  }),
});
export const {
  useAnnualReviewListQuery,
  useLazySingleAnnualReviewListQuery,
  usePostAnnualReviewListMutation,
  usePatchAnnualReviewListMutation,
  useDeleteAnnualReviewListMutation,
} = annualReviewApi;
