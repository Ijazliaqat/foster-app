import { baseAPI } from "@root/services/baseApi";

export const gpDetailsInfoDocumentApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getGpDetailsInfoDocumentData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/docs/all/${apiDataParameter?.pathParams?.gpInfoId}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
      providesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    deleteGpDetailsInfoDocumentDataById: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/docs/${apiDataParameter.pathParams.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    postGpDetailsInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/docs/${apiDataParameter?.pathParams?.gpInfoId}`,
        method: "POST",
        body: apiDataParameter?.body,
        // params: apiDataParameter?.params,
      }),
      invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
    patchGpDetailsInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/docs/${apiDataParameter?.pathParams?.gpInfoId}/${apiDataParameter?.pathParams?.docId}`,
        method: "POST",
        body: apiDataParameter?.body,
        params: apiDataParameter?.params,
      }),
      invalidatesTags: ["GP_DETAILS_INFO_DOCUMENTS"],
    }),
  }),
});

export const {
  useDeleteGpDetailsInfoDocumentDataByIdMutation,
  useGetGpDetailsInfoDocumentDataQuery,
  useLazyGetGpDetailsInfoDocumentDataQuery,
  usePostGpDetailsInfoDocumentDataMutation,
  usePatchGpDetailsInfoDocumentDataMutation,
} = gpDetailsInfoDocumentApi;
