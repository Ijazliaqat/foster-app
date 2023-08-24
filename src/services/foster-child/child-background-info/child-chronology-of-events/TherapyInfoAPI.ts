import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const therapyInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsTherapyInfoList: build.query<
      GetChildChronologyOfEventsTherapyInfoListApiResponse,
      GetChildChronologyOfEventsTherapyInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/therapy-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsTherapyInfo: build.mutation<
      PostChildChronologyOfEventsTherapyInfoApiResponse,
      PostChildChronologyOfEventsTherapyInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/therapy-info`,
        method: "POST",
        body: queryArg.addTherapyInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsTherapyInfoById: build.mutation<
      PatchChildChronologyOfEventsTherapyInfoByIdApiResponse,
      PatchChildChronologyOfEventsTherapyInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/therapy-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addTherapyInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsTherapyInfoById: build.query<
      GetChildChronologyOfEventsTherapyInfoByIdApiResponse,
      GetChildChronologyOfEventsTherapyInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/therapy-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsTherapyInfoById: build.mutation<
      DeleteChildChronologyOfEventsTherapyInfoByIdApiResponse,
      DeleteChildChronologyOfEventsTherapyInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/therapy-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export type GetChildChronologyOfEventsTherapyInfoListApiResponse =
  /** status 201  */ AddTherapyInfoResponseDto;
export type GetChildChronologyOfEventsTherapyInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsTherapyInfoApiResponse =
  /** status 201  */ AddTherapyInfoResponseDto;
export type PostChildChronologyOfEventsTherapyInfoApiArg = {
  addTherapyInfoRequestDto: AddTherapyInfoRequestDto;
};
export type PatchChildChronologyOfEventsTherapyInfoByIdApiResponse =
  /** status 201  */ AddTherapyInfoResponseDto;
export type PatchChildChronologyOfEventsTherapyInfoByIdApiArg = {
  id: string;
  addTherapyInfoRequestDto: AddTherapyInfoRequestDto;
};
export type GetChildChronologyOfEventsTherapyInfoByIdApiResponse =
  /** status 201  */ AddTherapyInfoResponseDto;
export type GetChildChronologyOfEventsTherapyInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsTherapyInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsTherapyInfoByIdApiArg = {
  id: string;
};

export type AddTherapyInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddTherapyInfoRequestDto = {
  camhsDate: string;
  appointment: string;
};

export const {
  useGetChildChronologyOfEventsTherapyInfoListQuery,
  usePostChildChronologyOfEventsTherapyInfoMutation,
  usePatchChildChronologyOfEventsTherapyInfoByIdMutation,
  useLazyGetChildChronologyOfEventsTherapyInfoByIdQuery,
  useDeleteChildChronologyOfEventsTherapyInfoByIdMutation,
} = therapyInfoApi;
