import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const reportDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query({
      query: (search: any) => ({
        url: `/chronology-events/uploaded-documents/list`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["REPORTS_DOCUMENTS"],
    }),
    postReportDocuments: builder.mutation({
      query: (list: any) => ({
        url: "/chronology-events/uploaded-documents",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["REPORTS_DOCUMENTS"],
    }),
    singleReportDocument: builder.query({
      query: (id: any) => `/chronology-events/uploaded-documents/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["REPORTS_DOCUMENTS"],
    }),
    deleteDocumentList: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REPORTS_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostReportDocumentsMutation,
  useLazySingleReportDocumentQuery,
  useDeleteDocumentListMutation,
} = reportDocumentsApi;
