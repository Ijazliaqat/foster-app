import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const vocationalCourseInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsVocationalCourseInfoList: build.query<
      GetChildChronologyOfEventsVocationalCourseInfoListApiResponse,
      GetChildChronologyOfEventsVocationalCourseInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/vocational-course-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),providesTags: [TAG],
    }),
    postChildChronologyOfEventsVocationalCourseInfo: build.mutation<
      PostChildChronologyOfEventsVocationalCourseInfoApiResponse,
      PostChildChronologyOfEventsVocationalCourseInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/vocational-course-info`,
        method: "POST",
        body: queryArg.addVocationalCourseInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    patchChildChronologyOfEventsVocationalCourseInfoById: build.mutation<
      PatchChildChronologyOfEventsVocationalCourseInfoByIdApiResponse,
      PatchChildChronologyOfEventsVocationalCourseInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/vocational-course-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addVocationalCourseInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    getChildChronologyOfEventsVocationalCourseInfoById: build.query<
      GetChildChronologyOfEventsVocationalCourseInfoByIdApiResponse,
      GetChildChronologyOfEventsVocationalCourseInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/vocational-course-info/${queryArg.id}`,
      }),providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsVocationalCourseInfoById: build.mutation<
      DeleteChildChronologyOfEventsVocationalCourseInfoByIdApiResponse,
      DeleteChildChronologyOfEventsVocationalCourseInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/vocational-course-info/${queryArg.id}`,
        method: "DELETE",
      }),invalidatesTags: [TAG]
    }),
  }),
});


export type GetChildChronologyOfEventsVocationalCourseInfoListApiResponse =
  /** status 201  */ AddVocationalCourseInfoResponseDto;
export type GetChildChronologyOfEventsVocationalCourseInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsVocationalCourseInfoApiResponse =
  /** status 201  */ AddVocationalCourseInfoResponseDto;
export type PostChildChronologyOfEventsVocationalCourseInfoApiArg = {
  addVocationalCourseInfoRequestDto: AddVocationalCourseInfoRequestDto;
};
export type PatchChildChronologyOfEventsVocationalCourseInfoByIdApiResponse =
  /** status 201  */ AddVocationalCourseInfoResponseDto;
export type PatchChildChronologyOfEventsVocationalCourseInfoByIdApiArg = {
  id: string;
  addVocationalCourseInfoRequestDto: AddVocationalCourseInfoRequestDto;
};
export type GetChildChronologyOfEventsVocationalCourseInfoByIdApiResponse =
  /** status 201  */ AddVocationalCourseInfoResponseDto;
export type GetChildChronologyOfEventsVocationalCourseInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsVocationalCourseInfoByIdApiResponse =
  unknown;
export type DeleteChildChronologyOfEventsVocationalCourseInfoByIdApiArg = {
  id: string;
};
export type AddVocationalCourseInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddVocationalCourseInfoRequestDto = {
  courseType: string;
  duration: string;
  qualification: string;
};
export const {
  useGetChildChronologyOfEventsVocationalCourseInfoListQuery,
  usePostChildChronologyOfEventsVocationalCourseInfoMutation,
  usePatchChildChronologyOfEventsVocationalCourseInfoByIdMutation,
  useLazyGetChildChronologyOfEventsVocationalCourseInfoByIdQuery,
  useDeleteChildChronologyOfEventsVocationalCourseInfoByIdMutation,
} = vocationalCourseInfoApi;
