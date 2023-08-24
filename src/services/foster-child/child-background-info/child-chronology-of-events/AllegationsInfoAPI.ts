import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const allegationsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsAllegationsInfoList: build.query<
      GetChildChronologyOfEventsAllegationsInfoListApiResponse,
      GetChildChronologyOfEventsAllegationsInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/allegations-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsAllegationsInfo: build.mutation<
      PostChildChronologyOfEventsAllegationsInfoApiResponse,
      PostChildChronologyOfEventsAllegationsInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/allegations-info`,
        method: "POST",
        body: queryArg.addAllegationsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsAllegationsInfoById: build.mutation<
      PatchChildChronologyOfEventsAllegationsInfoByIdApiResponse,
      PatchChildChronologyOfEventsAllegationsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/allegations-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addAllegationsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsAllegationsInfoById: build.query<
      GetChildChronologyOfEventsAllegationsInfoByIdApiResponse,
      GetChildChronologyOfEventsAllegationsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/allegations-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsAllegationsInfoById: build.mutation<
      DeleteChildChronologyOfEventsAllegationsInfoByIdApiResponse,
      DeleteChildChronologyOfEventsAllegationsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/allegations-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsAllegationsInfoListApiResponse =
  /** status 201  */ AddAllegationsInfoResponseDto;
export type GetChildChronologyOfEventsAllegationsInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsAllegationsInfoApiResponse =
  /** status 201  */ AddAllegationsInfoResponseDto;
export type PostChildChronologyOfEventsAllegationsInfoApiArg = {
  addAllegationsInfoRequestDto: AddAllegationsInfoRequestDto;
};
export type PatchChildChronologyOfEventsAllegationsInfoByIdApiResponse =
  /** status 201  */ AddAllegationsInfoResponseDto;
export type PatchChildChronologyOfEventsAllegationsInfoByIdApiArg = {
  id: string;
  addAllegationsInfoRequestDto: AddAllegationsInfoRequestDto;
};
export type GetChildChronologyOfEventsAllegationsInfoByIdApiResponse =
  /** status 201  */ AddAllegationsInfoResponseDto;
export type GetChildChronologyOfEventsAllegationsInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsAllegationsInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsAllegationsInfoByIdApiArg = {
  id: string;
};
export type AddAllegationsInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddAllegationsInfoRequestDto = {
  allegationDate: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsAllegationsInfoListQuery,
  usePostChildChronologyOfEventsAllegationsInfoMutation,
  usePatchChildChronologyOfEventsAllegationsInfoByIdMutation,
  useLazyGetChildChronologyOfEventsAllegationsInfoByIdQuery,
  useDeleteChildChronologyOfEventsAllegationsInfoByIdMutation,
} = allegationsInfoApi;
