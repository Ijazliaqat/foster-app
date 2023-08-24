import { baseAPI } from "@root/services/baseApi";
export const sanctionDetailsDocumentApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSanctionDetailsDocumentData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/sanction-details/document/list/${apiDataParameter?.pathParams?.sanctionDetailsId}`,
        method: "GET",
        params: apiDataParameter?.params,
      }),
      providesTags: ["SANCTION_DETAILS_DOCUMENTS"],
    }),
    deleteSanctionDocumentDataById: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/sanction-details/delete-document/${apiDataParameter.pathParams.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SANCTION_DETAILS_DOCUMENTS"],
    }), 
    postSanctionDetailsDocumentData: builder.mutation({
      query: ({body, pathParams}: any) => {
        return {
          url: `/foster-child/add-sanction-details/document/${pathParams?.sanctionDetailsId}`,
          method: "POST",
          body: body,
          // params: apiDataParameter?.params,
        };
      },
      invalidatesTags: ["SANCTION_DETAILS_DOCUMENTS"],
    }),
  }),
});
export const {
  useDeleteSanctionDocumentDataByIdMutation,
  useGetSanctionDetailsDocumentDataQuery,
  usePostSanctionDetailsDocumentDataMutation,
} = sanctionDetailsDocumentApi;
