import { baseAPI } from "@root/services/baseApi";
const TAG = "SATS_EXAM_GRADE_LIST";
export const satsExamGradeListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addSatsExamGradeListData: builder.mutation({
      query: (payload: any) => ({
        url: `/education-records/sats-exam-grade-details`,
        method: "POST",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),
    getSatsExamGradeListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/education-records/sats-exam-grade-details/list`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
    }),
    delSatsExamGradeListData: builder.mutation({
      query: (payload: any) => ({
        url: `/education-records/sats-exam-grade-details/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),

    getSatsExamGradeInfoById: builder.query({
      query: (payload: any) => ({
        url: `/education-records/sats-exam-grade-details/${payload?.id}`,
        method: "GET",
        params: payload,
      }),
      providesTags: [TAG],
    }),

    updateSatsExamGradeInfoByid: builder.mutation({
      query: (payload: any) => ({
        url: `/education-records/sats-exam-grade-details/${payload.id}`,
        method: "PATCH",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),

    getSatsExamGradeDocsListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `/education-records/uploaded-documents/List`,
        method: "GET",
        params: apiDataParameter.params,
      }),
      providesTags: [TAG],
    }),

    addSatsExamGradeDocsListData: builder.mutation({
      query: ({ formData, id }: any) => ({
        url: `/education-records/uploaded-documents`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: [TAG],
    }),

    delSatsExamGradeDocsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/education-records/uploaded-document/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: [TAG],
    }),

    updateSatsExamGradeDocsListData: builder.mutation({
      query: (payload: any) => ({
        url: `/therapy-info/document/${payload.id}`,
        method: "PATCH",
        body: payload.jsonData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useAddSatsExamGradeListDataMutation,
  useGetSatsExamGradeListDataQuery,
  useDelSatsExamGradeListDataMutation,

  useLazyGetSatsExamGradeInfoByIdQuery,
  useUpdateSatsExamGradeInfoByidMutation,
  useGetSatsExamGradeDocsListDataQuery,
  useAddSatsExamGradeDocsListDataMutation,
  useDelSatsExamGradeDocsListDataMutation,
  useUpdateSatsExamGradeDocsListDataMutation,
} = satsExamGradeListApi;
