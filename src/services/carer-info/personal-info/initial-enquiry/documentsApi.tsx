import { baseAPI, TAGS } from "@root/services/baseApi";

export const documentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDocumentsTableData: builder.query({
      query: (params: any) => "initial-enquiry/documents",
    }),
    uploadDocuments: builder.mutation({
      query: (formData: any) => ({
        url: "/initial-inquiry/upload-document",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const { useGetDocumentsTableDataQuery, useUploadDocumentsMutation } =
  documentsApi;
