import { baseAPI } from "@root/services/baseApi";
const DocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getImmunisationDocumentsList: builder.query({
      query: ({ id, params }: any) => ({
        url: `/foster-child/list-immunisationDocuments/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["IMMUNISATION_LIST"],
    }),
    getImmunisationDocumentDetail: builder.query({
      query: ({ id }: any) => `/foster-child/immunisationDocuments/${id}`,
      providesTags: ["IMMUNISATION_DETAIL"],
    }),
    updateImmunisationDocument: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/foster-child/child-immunisation-info/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["IMMUNISATION_LIST"],
    }),
    postImmunisationDocument: builder.mutation({
      query: ({ formData }: any) => ({
        url: `/foster-child/immunisationDocuments`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["IMMUNISATION_LIST"],
    }),
    deleteImmunisationDocument: builder.mutation({
      query: ({ id }: any) => ({
        url: `/foster-child/immunisationDocument/delete${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["IMMUNISATION_LIST"],
    }),
  }),
});

export const {
  useGetImmunisationDocumentsListQuery,
  useGetImmunisationDocumentDetailQuery,
  useUpdateImmunisationDocumentMutation,
  usePostImmunisationDocumentMutation,
  useDeleteImmunisationDocumentMutation,
} = DocumentsApi;
