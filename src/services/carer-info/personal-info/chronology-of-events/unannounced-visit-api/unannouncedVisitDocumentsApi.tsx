import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const unannouncedVisitDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query({
      query: (search: any) => ({
        url: `/chronology-events/uploaded-documents/list`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["UNANNOUNCED_UPLOAD_DOCUMENTS"],
    }),
    postUnannouncedDocuments: builder.mutation({
      query: (list: any) => ({
        url: "/chronology-events/uploaded-documents",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["UNANNOUNCED_UPLOAD_DOCUMENTS"],
    }),
    singleUnannouncedDocument: builder.query({
      query: (id: any) => `/chronology-events/uploaded-documents/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["UNANNOUNCED_UPLOAD_DOCUMENTS"],
    }),
    deleteDocumentList: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/uploaded-document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UNANNOUNCED_UPLOAD_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostUnannouncedDocumentsMutation,
  useLazySingleUnannouncedDocumentQuery,
  useDeleteDocumentListMutation,
} = unannouncedVisitDocumentsApi;
