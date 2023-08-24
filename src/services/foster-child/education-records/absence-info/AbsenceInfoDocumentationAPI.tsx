import { baseAPI } from "@root/services/baseApi";

export const AbsenceInfoUploadDocumentsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Get API of Abence Info Document
    getAbsenceInfoDocument: builder.query({
      query: ({ childAbsenceInfoId, params }: any) => ({
        url: `/foster-child/child-absence-info/document/list/${childAbsenceInfoId}`,
        params,
        method: "GET",
      }),
      providesTags: ["ABSENCE_INFO_UPLOAD_DOCUMENTS"],
    }),

    // Get API of Abence Info Document By Id
    getAbsenceInfoDocumentById: builder.query<null, object>({
      query: ({ childAbsenceInfoDocId }: any) => ({
        url: `/foster-child/child-absence-info/document/${childAbsenceInfoDocId}`,
        method: "GET",
      }),
      providesTags: ["ABSENCE_INFO_UPLOAD_DOCUMENTS"],
    }),

    // Post API of Abence Info Document
    postAbsenceInfoUploadDocument: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/add-child-absence-info/document/${apiDataParameter.childAbsenceInfoId}`,
        method: "POST",
        param: apiDataParameter.childAbsenceInfoId,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["ABSENCE_INFO_UPLOAD_DOCUMENTS"],
    }),

    // Delete API of Abence Info Document
    deleteAbsenceInfoUploadDocument: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-absence-info/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ABSENCE_INFO_UPLOAD_DOCUMENTS"],
    }),
  }),
});

export const {
  useGetAbsenceInfoDocumentQuery,
  useGetAbsenceInfoDocumentByIdQuery,
  usePostAbsenceInfoUploadDocumentMutation,
  useDeleteAbsenceInfoUploadDocumentMutation,
} = AbsenceInfoUploadDocumentsAPI;
