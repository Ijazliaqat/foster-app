import { baseAPI } from "@root/services/baseApi";

export const FamilyPersonDocumentsAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({

    // Get API of Family Person Upload Document
    getFamilyPersonUploadDocument: builder.query<null, object>({
      query: ({ childFamilyOrgInfoId, params }: any) => ({
        url: `/foster-child/child-family-org-info/document/list/${childFamilyOrgInfoId}`,
        method: "GET",
        params,
      }),
      providesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),

    // Post API of Family Person Upload Document
    postFamilyPersonUploadDocument: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/add-child-family-org-info/document/${apiDataParameter.childFamilyOrgInfoId}`,
        method: "POST",
        param: apiDataParameter.childFamilyOrgInfoId,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),

    // Delete API of Family Person Upload Document
    deleteFamilyPersonUploadDocument: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-family-org-info/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAMILY_PERSON_UPLOAD_DOCUMENT"],
    }),
    
  }),
});

export const {
  useGetFamilyPersonUploadDocumentQuery,
  usePostFamilyPersonUploadDocumentMutation,
  useDeleteFamilyPersonUploadDocumentMutation,
} = FamilyPersonDocumentsAPI;
