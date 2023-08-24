import { baseAPI, TAGS } from "@root/services/baseApi";

export const statutoryMedicalListInfoDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStatutoryMedicalListInfoDocumentData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/docs/all/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
      providesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    deleteStatutoryMedicalListInfoDocumentDataById: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/docs/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    postStatutoryMedicalListInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/docs/${apiDataParameter?.pathParams?.id}`,
        method: "POST",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
    patchStatutoryMedicalListInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/gp-info/docs/${apiDataParameter?.pathParams?.id}/${apiDataParameter?.pathParams?.docId}`,
        method: "POST",
        body: apiDataParameter?.body,
        params: apiDataParameter?.params,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_TYPE_INFO_DOCUMENTS"],
    }),
  }),
});

export const {
  useDeleteStatutoryMedicalListInfoDocumentDataByIdMutation,
  useGetStatutoryMedicalListInfoDocumentDataQuery,
  usePostStatutoryMedicalListInfoDocumentDataMutation,
  usePatchStatutoryMedicalListInfoDocumentDataMutation,
} = statutoryMedicalListInfoDocumentApi;
