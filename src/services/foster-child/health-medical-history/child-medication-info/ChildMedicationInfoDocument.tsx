import { baseAPI } from "@root/services/baseApi";

const ChildMedicationInfoDocument = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createChildMedicationInfoDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-child-medication-info/document/${payload.params.childMedicationInfoId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["child-medication-info-document"],
    }),
    deleteChildMedicationInfoDocument: builder.mutation({
      query: (payload) => ({
        url: `/foster-child/child-medication-info/document/${payload?.params.childMedicationInfoDocId}`,
        method: "DELETE",
        params: payload.params,
      }),
      invalidatesTags: ["child-medication-info-document"],
    }),
    // updateChildMedicationInfoDocument: builder.mutation({
    //   query: (payload: any) => ({
    //     url: `/hospital-info-list/documents/${payload.id}`,
    //     method: "Put",
    //     body: payload.body,
    //   }),
    //   invalidatesTags: ["child-medication-info-document"],
    // }),
    getChildMedicationInfoDocumentBYID: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/child-medication-info/document/${payload.childMedicationInfoDocId}`,
        method: "Get",
        params: payload.childMedicationInfoDocId,
      }),
      providesTags: ["child-medication-info-document"],
    }),
    getChildMedicationInfoDocument: builder.query({
      query: ({ ChildMedicationInfoId, params }: any) => ({
        url: `/foster-child/child-medication-info/document/list/${ChildMedicationInfoId}`,
        method: "Get",
        params: params,
      }),
      providesTags: ["child-medication-info-document"],
    }),
  }),
});

export const {
  useCreateChildMedicationInfoDocumentMutation,
  useDeleteChildMedicationInfoDocumentMutation,
  useGetChildMedicationInfoDocumentBYIDQuery,
  useGetChildMedicationInfoDocumentQuery,
  useLazyGetChildMedicationInfoDocumentBYIDQuery,
  useLazyGetChildMedicationInfoDocumentQuery,
} = ChildMedicationInfoDocument;
