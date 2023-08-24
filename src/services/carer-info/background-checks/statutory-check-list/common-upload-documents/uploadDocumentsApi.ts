import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
export const statutoryUploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    statutoryUploadDocumentList: builder.query({
      query: (payload: any) => ({
        url: "assessment-stage-one/statutory-checks-list/uploaded-documents/List",
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["STATUTORY_LIST_UPLOAD_DOCUMENTS"],
    }),
    postStatutoryUploadDocuments: builder.mutation({
      query: (list: any) => ({
        url: "assessment-stage-one/statutory-checks-list/uploaded-documents",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["STATUTORY_LIST_UPLOAD_DOCUMENTS"],
    }),
    singleStatutoryUploadDocuments: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/uploaded-documents/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["STATUTORY_LIST_UPLOAD_DOCUMENTS"],
    }),
    deleteStatutoryUploadDocuments: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["STATUTORY_LIST_UPLOAD_DOCUMENTS"],
    }),
  }),
});
export const {
  useStatutoryUploadDocumentListQuery,
  usePostStatutoryUploadDocumentsMutation,
  useLazySingleStatutoryUploadDocumentsQuery,
  useDeleteStatutoryUploadDocumentsMutation,
} = statutoryUploadDocumentsApi;
