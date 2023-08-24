import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const examGradeInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsExamGradeInfoList: build.query<
      GetChildChronologyOfEventsExamGradeInfoListApiResponse,
      GetChildChronologyOfEventsExamGradeInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exam-grade-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),providesTags: [TAG],
    }),
    postChildChronologyOfEventsExamGradeInfo: build.mutation<
      PostChildChronologyOfEventsExamGradeInfoApiResponse,
      PostChildChronologyOfEventsExamGradeInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exam-grade-info`,
        method: "POST",
        body: queryArg.addExamGradeInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    patchChildChronologyOfEventsExamGradeInfoById: build.mutation<
      PatchChildChronologyOfEventsExamGradeInfoByIdApiResponse,
      PatchChildChronologyOfEventsExamGradeInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exam-grade-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addExamGradeInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    getChildChronologyOfEventsExamGradeInfoById: build.query<
      GetChildChronologyOfEventsExamGradeInfoByIdApiResponse,
      GetChildChronologyOfEventsExamGradeInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exam-grade-info/${queryArg.id}`,
      }),providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsExamGradeInfoById: build.mutation<
      DeleteChildChronologyOfEventsExamGradeInfoByIdApiResponse,
      DeleteChildChronologyOfEventsExamGradeInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exam-grade-info/${queryArg.id}`,
        method: "DELETE",
      }),invalidatesTags: [TAG],
    }),
  }),
});


export type GetChildChronologyOfEventsExamGradeInfoListApiResponse =
  /** status 201  */ AddExamGradeInfoRequestDto;
export type GetChildChronologyOfEventsExamGradeInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsExamGradeInfoApiResponse =
  /** status 201  */ AddExamGradeInfoResponseDto;
export type PostChildChronologyOfEventsExamGradeInfoApiArg = {
  addExamGradeInfoRequestDto: AddExamGradeInfoRequestDto;
};
export type PatchChildChronologyOfEventsExamGradeInfoByIdApiResponse =
  /** status 201  */ AddExamGradeInfoResponseDto;
export type PatchChildChronologyOfEventsExamGradeInfoByIdApiArg = {
  id: string;
  addExamGradeInfoRequestDto: AddExamGradeInfoRequestDto;
};
export type GetChildChronologyOfEventsExamGradeInfoByIdApiResponse =
  /** status 201  */ AddExamGradeInfoResponseDto;
export type GetChildChronologyOfEventsExamGradeInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsExamGradeInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsExamGradeInfoByIdApiArg = {
  id: string;
};
export type AddExamGradeInfoRequestDto = {
  schoolYear: string;
  term: string;
  examSubject: string;
};
export type AddExamGradeInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export const {
  useGetChildChronologyOfEventsExamGradeInfoListQuery,
  usePostChildChronologyOfEventsExamGradeInfoMutation,
  usePatchChildChronologyOfEventsExamGradeInfoByIdMutation,
  useLazyGetChildChronologyOfEventsExamGradeInfoByIdQuery,
  useDeleteChildChronologyOfEventsExamGradeInfoByIdMutation,
} = examGradeInfoApi;
