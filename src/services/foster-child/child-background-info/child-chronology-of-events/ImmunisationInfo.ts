import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const immunisationInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsImmunisationInfoList: build.query<
      GetChildChronologyOfEventsImmunisationInfoListApiResponse,
      GetChildChronologyOfEventsImmunisationInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/immunisation-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsImmunisationInfo: build.mutation<
      PostChildChronologyOfEventsImmunisationInfoApiResponse,
      PostChildChronologyOfEventsImmunisationInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/immunisation-info`,
        method: "POST",
        body: queryArg.addImmunisationInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsImmunisationInfoById: build.mutation<
      PatchChildChronologyOfEventsImmunisationInfoByIdApiResponse,
      PatchChildChronologyOfEventsImmunisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/immunisation-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addImmunisationInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsImmunisationInfoById: build.query<
      GetChildChronologyOfEventsImmunisationInfoByIdApiResponse,
      GetChildChronologyOfEventsImmunisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/immunisation-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsImmunisationInfoById: build.mutation<
      DeleteChildChronologyOfEventsImmunisationInfoByIdApiResponse,
      DeleteChildChronologyOfEventsImmunisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/immunisation-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export type AddImmunisationInfoRequestDto = {
  immunisationDate: string;
  immunisationType: string;
};
export type GetChildChronologyOfEventsImmunisationInfoListApiResponse =
  /** status 201  */ AddImmunisationInfoResponseDto;
export type GetChildChronologyOfEventsImmunisationInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsImmunisationInfoApiResponse =
  /** status 201  */ AddImmunisationInfoResponseDto;
export type PostChildChronologyOfEventsImmunisationInfoApiArg = {
  addImmunisationInfoRequestDto: AddImmunisationInfoRequestDto;
};
export type PatchChildChronologyOfEventsImmunisationInfoByIdApiResponse =
  /** status 201  */ AddImmunisationInfoResponseDto;
export type PatchChildChronologyOfEventsImmunisationInfoByIdApiArg = {
  id: string;
  addImmunisationInfoRequestDto: AddImmunisationInfoRequestDto;
};
export type GetChildChronologyOfEventsImmunisationInfoByIdApiResponse =
  /** status 201  */ AddImmunisationInfoResponseDto;
export type GetChildChronologyOfEventsImmunisationInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsImmunisationInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsImmunisationInfoByIdApiArg = {
  id: string;
};
export type AddImmunisationInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export const {
  useGetChildChronologyOfEventsImmunisationInfoListQuery,
  usePostChildChronologyOfEventsImmunisationInfoMutation,
  usePatchChildChronologyOfEventsImmunisationInfoByIdMutation,
  useLazyGetChildChronologyOfEventsImmunisationInfoByIdQuery,
  useDeleteChildChronologyOfEventsImmunisationInfoByIdMutation,
} = immunisationInfoApi;
