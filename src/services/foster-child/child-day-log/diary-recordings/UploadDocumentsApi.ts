import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
export const diaryRecordingUploadDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    diaryUploadDocumentList: builder.query({
      query: (search: any) => ({
        url: `child-day-log/list-diaryRecordingDocuments/${search?.params.diaryRecordingId}`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["DIARY_RECORDING_DOCUMENTS"],
    }),
    postDiaryUploadDocuments: builder.mutation({
      query: (payload: any) => ({
        url: `child-day-log/diaryRecordingDocuments/${payload.params.diaryRecordingId}`,
        method: "POST",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["DIARY_RECORDING_DOCUMENTS"],
    }),
    singleDiaryUploadDocuments: builder.query({
      query: (id: any) => `child-day-log/diaryRecordingDocuments/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["DIARY_RECORDING_DOCUMENTS"],
    }),
    deleteDiaryUploadDocuments: builder.mutation({
      query: (id: any) => ({
        url: `child-day-log/diaryRecordingDocument/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DIARY_RECORDING_DOCUMENTS"],
    }),
  }),
});
export const {
  useDiaryUploadDocumentListQuery,
  usePostDiaryUploadDocumentsMutation,
  useLazySingleDiaryUploadDocumentsQuery,
  useDeleteDiaryUploadDocumentsMutation,
} = diaryRecordingUploadDocumentsApi;
