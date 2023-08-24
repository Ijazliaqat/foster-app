import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const riskAssessmentApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsRiskAssessmentList: build.query<
      GetChildChronologyOfEventsRiskAssessmentListApiResponse,
      GetChildChronologyOfEventsRiskAssessmentListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/risk-assessment/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsRiskAssessment: build.mutation({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/risk-assessment`,
        method: "POST",
        body: queryArg,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsRiskAssessmentById: build.mutation({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/risk-assessment/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addRiskAssessmentRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsRiskAssessmentById: build.query<
      GetChildChronologyOfEventsRiskAssessmentByIdApiResponse,
      GetChildChronologyOfEventsRiskAssessmentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/risk-assessment/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsRiskAssessmentById: build.mutation<
      DeleteChildChronologyOfEventsRiskAssessmentByIdApiResponse,
      DeleteChildChronologyOfEventsRiskAssessmentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/risk-assessment/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsRiskAssessmentListApiResponse =
  /** status 201  */ AddRiskAssessmentResponseDto;
export type GetChildChronologyOfEventsRiskAssessmentListApiArg = {
  limit: number | null;
  offset: number | null;
};

export type PatchChildChronologyOfEventsRiskAssessmentByIdApiResponse =
  /** status 201  */ AddRiskAssessmentResponseDto;

export type GetChildChronologyOfEventsRiskAssessmentByIdApiResponse =
  /** status 201  */ AddRiskAssessmentResponseDto;
export type GetChildChronologyOfEventsRiskAssessmentByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsRiskAssessmentByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsRiskAssessmentByIdApiArg = {
  id: string;
};
export type AddRiskAssessmentResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddRiskAssessmentRequestDto = {
  childName: string;
  gender: string;
  notes: string;
};

export const {
  useGetChildChronologyOfEventsRiskAssessmentListQuery,
  usePostChildChronologyOfEventsRiskAssessmentMutation,
  usePatchChildChronologyOfEventsRiskAssessmentByIdMutation,
  useLazyGetChildChronologyOfEventsRiskAssessmentByIdQuery,
  useDeleteChildChronologyOfEventsRiskAssessmentByIdMutation,
} = riskAssessmentApi;
