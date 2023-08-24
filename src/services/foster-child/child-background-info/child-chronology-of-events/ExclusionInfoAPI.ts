import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const exclusionInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsExclusionInfoList: build.query<
      GetChildChronologyOfEventsExclusionInfoListApiResponse,
      GetChildChronologyOfEventsExclusionInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exclusion-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsExclusionInfo: build.mutation<
      PostChildChronologyOfEventsExclusionInfoApiResponse,
      PostChildChronologyOfEventsExclusionInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exclusion-info`,
        method: "POST",
        body: queryArg.addChildExclusionInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsExclusionInfoById: build.mutation<
      PatchChildChronologyOfEventsExclusionInfoByIdApiResponse,
      PatchChildChronologyOfEventsExclusionInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exclusion-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addChildExclusionInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsExclusionInfoById: build.query<
      GetChildChronologyOfEventsExclusionInfoByIdApiResponse,
      GetChildChronologyOfEventsExclusionInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exclusion-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsExclusionInfoById: build.mutation<
      DeleteChildChronologyOfEventsExclusionInfoByIdApiResponse,
      DeleteChildChronologyOfEventsExclusionInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/exclusion-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export type GetChildChronologyOfEventsExclusionInfoListApiResponse =
  /** status 201  */ AddChildExclusionInfoResponseDto;
export type GetChildChronologyOfEventsExclusionInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsExclusionInfoApiResponse =
  /** status 201  */ AddChildExclusionInfoResponseDto;
export type PostChildChronologyOfEventsExclusionInfoApiArg = {
  addChildExclusionInfoRequestDto: AddChildExclusionInfoRequestDto;
};
export type PatchChildChronologyOfEventsExclusionInfoByIdApiResponse =
  /** status 201  */ AddChildExclusionInfoResponseDto;
export type PatchChildChronologyOfEventsExclusionInfoByIdApiArg = {
  id: string;
  addChildExclusionInfoRequestDto: AddChildExclusionInfoRequestDto;
};
export type GetChildChronologyOfEventsExclusionInfoByIdApiResponse =
  /** status 201  */ AddChildExclusionInfoResponseDto;
export type GetChildChronologyOfEventsExclusionInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsExclusionInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsExclusionInfoByIdApiArg = {
  id: string;
};
export type AddChildExclusionInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddChildExclusionInfoRequestDto = {
  exclusionDate: string;
  dateOfReturnFromExclusion: string;
  typeOfExclusion: string;
};
export const {
  useGetChildChronologyOfEventsExclusionInfoListQuery,
  usePostChildChronologyOfEventsExclusionInfoMutation,
  usePatchChildChronologyOfEventsExclusionInfoByIdMutation,
  useLazyGetChildChronologyOfEventsExclusionInfoByIdQuery,
  useDeleteChildChronologyOfEventsExclusionInfoByIdMutation,
} = exclusionInfoApi;
