import { baseAPI } from "@root/services/baseApi";

const HospitalInfoListDocument = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    createHospitalInfoListDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/hospital-info-list/documents/${payload.hospitalInfoFormId}`,
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["hospital-info-list-document"],
    }),
    deleteHospitalInfoListDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/hospital-info-list/documents/${payload.id}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["hospital-info-list-document"],
    }),
    updateHospitalInfoListDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/hospital-info-list/documents/${payload.id}`,
        method: "Put",
        body: payload.body,
      }),
      invalidatesTags: ["hospital-info-list-document"],
    }),
    getHospitalInfoListDocumentBYID: builder.query({
      query: (payload: any) => ({
        url: `/hospital-info-list/documents/${payload.id}`,
        method: "Get",
        params: payload.params,
      }),
      providesTags: ["hospital-info-list-document"],
    }),
    getHospitalInfoListDocument: builder.query({
      query: (payload: any) => ({
        url: `/hospital-info-list/all-documents/hospital-info-documents/${payload?.params?.hospitalInfoFormId}`,
        method: "Get",
        params: payload.params,
      }),
      providesTags: ["hospital-info-list-document"],
    }),
  }),
});

export const {
  useCreateHospitalInfoListDocumentMutation,
  useDeleteHospitalInfoListDocumentMutation,
  useUpdateHospitalInfoListDocumentMutation,
  useGetHospitalInfoListDocumentQuery,
  useLazyGetHospitalInfoListDocumentBYIDQuery,
} = HospitalInfoListDocument;
