import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_REPORTS";

export const assessmentStageOneApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildIncidentsList: builder.query({
      query: (queryArg) => ({
        url: `/child-reports/child-incident/list/${queryArg.fosterChildId}`,
        method: "GET",
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          search: queryArg.search,
        },
      }),
      providesTags: [TAG],
    }),
    getRegularAssessmentAttendees: builder.query({
      query: ({ params }: any) => ({
        url: `/assessment-stage-one/regular-assessment-attendees`,
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    getSingleRegularAssessmentDetail: builder.query({
      query: ({ id }: any) => ({
        url: `/assessment-stage-one/regular-assessment-meeting/${id}`,
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    patchRegularAssessmentDetail: builder.mutation({
      query: (data: any) => {
        const { id, regularAssessmentForm } = data;
        for (var pair of regularAssessmentForm.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }

        return {
          url: `/assessment-stage-one/regular-assessment-meeting/${id}`,

          method: "PATCH",

          body: regularAssessmentForm,
        };
      },

      invalidatesTags: [TAG],
    }),

    postRegularAssessmentDetail: builder.mutation({
      query: (body) => ({
        url: `/assessment-stage-one/regular-assessment-meeting`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    postStageOneApprovalDetail: builder.mutation({
      query: (body) => ({
        url: `/assessment-stage-one/stage_1_approval`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getStageOneStatus: builder.query({
      query: (id: string) => `/assessment-stage-one/${id}/status`,
    }),
    patchStageOneStatus: builder.mutation({
      query: ({ userId, body }: any) => ({
        url: `assessment-stage-one/${userId}/status?stageOne=${body?.point}&status=${body?.status}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetChildIncidentsListQuery,
  useGetSingleRegularAssessmentDetailQuery,
  useLazyGetSingleRegularAssessmentDetailQuery,
  usePatchRegularAssessmentDetailMutation,
  usePostRegularAssessmentDetailMutation,
  useGetRegularAssessmentAttendeesQuery,
  usePostStageOneApprovalDetailMutation,
  useGetStageOneStatusQuery,
  usePatchStageOneStatusMutation,
} = assessmentStageOneApi;
