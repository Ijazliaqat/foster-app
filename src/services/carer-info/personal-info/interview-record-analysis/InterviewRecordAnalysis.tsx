import { baseAPI, TAGS } from "@root/services/baseApi";

export const interviewRecordAnalysisApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInterviewRecordAnalysis: builder.query<null, void>({
      query: (params: any) => "carer-Info/personal-info/interview-record",
      providesTags: ["LINKS", "EDIT_LINKS"],
    }),
    editInterviewRecordAnalysis: builder.mutation({
      query: (formData: any) => ({
        url: `carer-Info/personal-info/interview-record`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["EDIT_LINKS"],
    }),
    postInterviewRecordAnalysis: builder.mutation({
      query: (formData: any) => ({
        url: "carer-Info/personal-info/interview-record",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["LINKS"],
    }),
  }),
});

export const {
  useGetInterviewRecordAnalysisQuery,
  useEditInterviewRecordAnalysisMutation,
  usePostInterviewRecordAnalysisMutation,
} = interviewRecordAnalysisApi;
