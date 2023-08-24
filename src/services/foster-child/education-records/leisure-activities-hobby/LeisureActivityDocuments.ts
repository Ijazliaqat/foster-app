import { baseAPI } from "@root/services/baseApi";
const LeisureActivityDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLeisureActivityDocumentsList: builder.query({
      query: ({ id, params }: any) => ({
        url: `/education-records/leisure-activity/document/list/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["LEISURE_ACTIVITY_DOCUMENTS_LIST"],
    }),
    getLeisureActivityDocumentDetail: builder.query({
      query: ({ id }: any) =>
        `/education-records/leisure-activity/document/${id}`,
      //   invalidatesTags: ["LEISURE_ACTIVITY_DOCUMENTS_LIST"],
    }),
    updateLeisureActivityDocument: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/leisure-activity/document/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_DOCUMENTS_LIST"],
    }),
    postLeisureActivityDocument: builder.mutation({
      query: ({ formData, id }: any) => ({
        url: `/education-records/leisure-activity/document/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_DOCUMENTS_LIST"],
    }),
    deleteLeisureActivityDocument: builder.mutation({
      query: (id: any) => ({
        url: `/education-records/leisure-activity/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_DOCUMENTS_LIST"],
    }),
  }),
});

export const {
  useGetLeisureActivityDocumentsListQuery,
  useGetLeisureActivityDocumentDetailQuery,
  useUpdateLeisureActivityDocumentMutation,
  usePostLeisureActivityDocumentMutation,
  useDeleteLeisureActivityDocumentMutation,
} = LeisureActivityDocumentsApi;
