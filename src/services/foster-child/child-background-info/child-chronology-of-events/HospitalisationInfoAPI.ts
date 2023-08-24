import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const hospitalisationInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsHospitalisationInfoList: build.query<
      GetChildChronologyOfEventsHospitalisationInfoListApiResponse,
      GetChildChronologyOfEventsHospitalisationInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/hospitalisation-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),providesTags: [TAG],
    }),
    postChildChronologyOfEventsHospitalisationInfo: build.mutation<
      PostChildChronologyOfEventsHospitalisationInfoApiResponse,
      PostChildChronologyOfEventsHospitalisationInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/hospitalisation-info`,
        method: "POST",
        body: queryArg.addHospitalisationInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    patchChildChronologyOfEventsHospitalisationInfoById: build.mutation<
      PatchChildChronologyOfEventsHospitalisationInfoByIdApiResponse,
      PatchChildChronologyOfEventsHospitalisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addHospitalisationInfoRequestDto,
      }),invalidatesTags: [TAG]
    }),
    getChildChronologyOfEventsHospitalisationInfoById: build.query<
      GetChildChronologyOfEventsHospitalisationInfoByIdApiResponse,
      GetChildChronologyOfEventsHospitalisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${queryArg.id}`,
      }),providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsHospitalisationInfoById: build.mutation<
      DeleteChildChronologyOfEventsHospitalisationInfoByIdApiResponse,
      DeleteChildChronologyOfEventsHospitalisationInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${queryArg.id}`,
        method: "DELETE",
      }),invalidatesTags: [TAG]
    }),
  }),
});


export type GetChildChronologyOfEventsHospitalisationInfoListApiResponse =
  /** status 201  */ AddHospitalisationInfoResponseDto;
export type GetChildChronologyOfEventsHospitalisationInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsHospitalisationInfoApiResponse =
  /** status 201  */ AddHospitalisationInfoResponseDto;
export type PostChildChronologyOfEventsHospitalisationInfoApiArg = {
  addHospitalisationInfoRequestDto: AddHospitalisationInfoRequestDto;
};
export type PatchChildChronologyOfEventsHospitalisationInfoByIdApiResponse =
  /** status 201  */ AddHospitalisationInfoResponseDto;
export type PatchChildChronologyOfEventsHospitalisationInfoByIdApiArg = {
  id: string;
  addHospitalisationInfoRequestDto: AddHospitalisationInfoRequestDto;
};
export type GetChildChronologyOfEventsHospitalisationInfoByIdApiResponse =
  /** status 201  */ AddHospitalisationInfoResponseDto;
export type GetChildChronologyOfEventsHospitalisationInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsHospitalisationInfoByIdApiResponse =
  unknown;
export type DeleteChildChronologyOfEventsHospitalisationInfoByIdApiArg = {
  id: string;
};
export type AddHospitalisationInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddHospitalisationInfoRequestDto = {
  hospitalName: string;
  admissionDate: string;
  dischargeDate: string;
};
export const {
  useGetChildChronologyOfEventsHospitalisationInfoListQuery,
  usePostChildChronologyOfEventsHospitalisationInfoMutation,
  usePatchChildChronologyOfEventsHospitalisationInfoByIdMutation,
  useLazyGetChildChronologyOfEventsHospitalisationInfoByIdQuery,
  useDeleteChildChronologyOfEventsHospitalisationInfoByIdMutation,
} = hospitalisationInfoApi;
