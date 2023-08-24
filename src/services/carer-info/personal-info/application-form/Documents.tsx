import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationFormDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDocumentDetail: builder.query({
      query: ({ id }: any) =>
        `/application-form/application-form/document/${id}`,
    }),
    getDocuments: builder.query({
      query: ({ params, id }: any) => ({
        url: `/application-form/application-form/documents/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["APPLICATIONFORM_DOCUMENTS"],
    }),
    postDocumentDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/application-form/document/${id}`,
        method: "Post",
        body: formData,
      }),
      invalidatesTags: ["APPLICATIONFORM_DOCUMENTS"],
    }),
    updateDocumentDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/application-form/document/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["APPLICATIONFORM_DOCUMENTS"],
    }),
    deleteDocument: builder.mutation({
      query: ({ id }: any) => ({
        url: `/application-form/application-form/documents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["APPLICATIONFORM_DOCUMENTS"],
    }),
  }),
});

export const {
  useGetDocumentDetailQuery,
  useGetDocumentsQuery,
  usePostDocumentDetailMutation,
  useUpdateDocumentDetailMutation,
  useDeleteDocumentMutation,
} = applicationFormDocumentApi;
