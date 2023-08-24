import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
export const uploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadDocumentList: builder.query<null, object>({
      query: (search: any) => ({
        url: `chronology-events/list-complaintDocuments/${search?.params.complaintId}`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["COMPLAINT_DOCUMENTS"],
    }),
    postComplaintDocuments: builder.mutation({
      query: (list: any) => ({
        url: "chronology-events/complaintDocuments",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["COMPLAINT_DOCUMENTS"],
    }),
    singleComplaintDocument: builder.query({
      query: (id: any) => `chronology-events/complaintDocuments/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["COMPLAINT_DOCUMENTS"],
    }),
    deleteComplaintDocumentList: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/complaintDocument/delete${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COMPLAINT_DOCUMENTS"],
    }),
  }),
});
export const {
  useUploadDocumentListQuery,
  usePostComplaintDocumentsMutation,
  useDeleteComplaintDocumentListMutation,
  useLazySingleComplaintDocumentQuery,
} = uploadDocumentsApi;
