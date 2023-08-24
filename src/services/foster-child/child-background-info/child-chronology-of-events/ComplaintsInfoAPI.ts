import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const complaintsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsComplaintsInfoList: build.query<
      GetChildChronologyOfEventsComplaintsInfoListApiResponse,
      GetChildChronologyOfEventsComplaintsInfoListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/complaints-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsComplaintsInfo: build.mutation<
      PostChildChronologyOfEventsComplaintsInfoApiResponse,
      PostChildChronologyOfEventsComplaintsInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/complaints-info`,
        method: "POST",
        body: queryArg.addComplaintsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsComplaintsInfoById: build.mutation<
      PatchChildChronologyOfEventsComplaintsInfoByIdApiResponse,
      PatchChildChronologyOfEventsComplaintsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/complaints-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addComplaintsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsComplaintsInfoById: build.query<
      GetChildChronologyOfEventsComplaintsInfoByIdApiResponse,
      GetChildChronologyOfEventsComplaintsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/complaints-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsComplaintsInfoById: build.mutation<
      DeleteChildChronologyOfEventsComplaintsInfoByIdApiResponse,
      DeleteChildChronologyOfEventsComplaintsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/complaints-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsComplaintsInfoListApiResponse =
  /** status 201  */ AddComplaintsInfoResponseDto;
export type GetChildChronologyOfEventsComplaintsInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsComplaintsInfoApiResponse =
  /** status 201  */ AddComplaintsInfoResponseDto;
export type PostChildChronologyOfEventsComplaintsInfoApiArg = {
  addComplaintsInfoRequestDto: AddComplaintsInfoRequestDto;
};
export type PatchChildChronologyOfEventsComplaintsInfoByIdApiResponse =
  /** status 201  */ AddComplaintsInfoResponseDto;
export type PatchChildChronologyOfEventsComplaintsInfoByIdApiArg = {
  id: string;
  addComplaintsInfoRequestDto: AddComplaintsInfoRequestDto;
};
export type GetChildChronologyOfEventsComplaintsInfoByIdApiResponse =
  /** status 201  */ AddComplaintsInfoResponseDto;
export type GetChildChronologyOfEventsComplaintsInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsComplaintsInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsComplaintsInfoByIdApiArg = {
  id: string;
};
export type AddComplaintsInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddComplaintsInfoRequestDto = {
  complaintDate: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsComplaintsInfoListQuery,
  usePostChildChronologyOfEventsComplaintsInfoMutation,
  usePatchChildChronologyOfEventsComplaintsInfoByIdMutation,
  useLazyGetChildChronologyOfEventsComplaintsInfoByIdQuery,
  useDeleteChildChronologyOfEventsComplaintsInfoByIdMutation,
} = complaintsInfoApi;
