import { baseAPI } from "@root/services/baseApi";

const medicalAppointments = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    medicalAppointmentsList: Builder.query({
      query: ({ search, params, fosterChildId }: any) => ({
        url: `/foster-child/list-medical-appointments/${fosterChildId}`,
        method: "GET",
        params: {
          ...params,
          search,
        },
      }),
      providesTags: ["medicalappointments"],
    }),
    medicalAppointmentsById: Builder.query({
      query: (payload: any) => ({
        url: `/foster-child/get-medical-appointment/${payload.params.medicalAppointmentId}`,
        method: "Get",
        params: payload.params,
      }),
    }),
    createmedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/add-medical-appointment/${payload?.params?.fosterChildId}`,
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    updatemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/update-medical-appointment/${payload?.params.medicalAppointmentId}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    deletemedicalAppointments: Builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/delete-medical-appointment/${payload?.params?.medicalAppointmentId}`,
        method: "Delete",
      }),
      invalidatesTags: ["medicalappointments"],
    }),
    //documents
    //get
    getMedicalInfoDocs: Builder.query({
      query: ({ id, params }: any) => ({
        url: `/foster-child/medical-appointment/document/list/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["MEDICAL_APPOINTMENTS_DOCS"],
    }),
    //post
    postmedicalAppointmentsDocs: Builder.mutation({
      query: ({ id, body }: any) => ({
        url: `/foster-child/add-medical-appointment/document/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["MEDICAL_APPOINTMENTS_DOCS"],
    }),
    //edit
    editmedicalAppointmentsDocs: Builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/medical-appointment/document/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["MEDICAL_APPOINTMENTS_DOCS"],
    }),
    //delete
    deletemedicalAppointmentsDocs: Builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/medical-appointment/document/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["MEDICAL_APPOINTMENTS_DOCS"],
    }),
  }),
});
export const {
  useLazyMedicalAppointmentsListQuery,
  useLazyMedicalAppointmentsByIdQuery,
  useCreatemedicalAppointmentsMutation,
  useDeletemedicalAppointmentsMutation,
  useMedicalAppointmentsByIdQuery,
  useUpdatemedicalAppointmentsMutation,
  useMedicalAppointmentsListQuery,
  //Docs
  useDeletemedicalAppointmentsDocsMutation,
  useEditmedicalAppointmentsDocsMutation,
  useGetMedicalInfoDocsQuery,
  usePostmedicalAppointmentsDocsMutation,
} = medicalAppointments;
