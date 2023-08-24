import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const incidentsInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsIncidentsInfoList: build.query<
      GetChildChronologyOfEventsIncidentsInfoListApiResponse,
      GetChildChronologyOfEventsIncidentsInfoListApiArg
    >({
      query: (queryArg: any) => ({
        url: `/child-chronology-of-events/incidents-info/List`,
        params: {
          limit: queryArg.limit,
          offset: queryArg.offset,
          fosterChildId: queryArg.fosterChildId,
          search: queryArg.search,
        },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsIncidentsInfo: build.mutation<
      PostChildChronologyOfEventsIncidentsInfoApiResponse,
      PostChildChronologyOfEventsIncidentsInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/incidents-info`,
        method: "POST",
        body: queryArg.addIncidentsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsIncidentsInfoById: build.mutation<
      PatchChildChronologyOfEventsIncidentsInfoByIdApiResponse,
      PatchChildChronologyOfEventsIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/incidents-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addIncidentsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsIncidentsInfoById: build.query<
      GetChildChronologyOfEventsIncidentsInfoByIdApiResponse,
      GetChildChronologyOfEventsIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/incidents-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsIncidentsInfoById: build.mutation<
      DeleteChildChronologyOfEventsIncidentsInfoByIdApiResponse,
      DeleteChildChronologyOfEventsIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/incidents-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsIncidentsInfoListApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type GetChildChronologyOfEventsIncidentsInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsIncidentsInfoApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type PostChildChronologyOfEventsIncidentsInfoApiArg = {
  addIncidentsInfoRequestDto: AddIncidentsInfoRequestDto;
};
export type PatchChildChronologyOfEventsIncidentsInfoByIdApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type PatchChildChronologyOfEventsIncidentsInfoByIdApiArg = {
  id: string;
  addIncidentsInfoRequestDto: AddIncidentsInfoRequestDto;
};
export type GetChildChronologyOfEventsIncidentsInfoByIdApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type GetChildChronologyOfEventsIncidentsInfoByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsIncidentsInfoByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsIncidentsInfoByIdApiArg = {
  id: string;
};

export type AddIncidentsInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddIncidentsInfoRequestDto = {
  natureOfIncident: string;
  incidentDate: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsIncidentsInfoListQuery,
  usePostChildChronologyOfEventsIncidentsInfoMutation,
  usePatchChildChronologyOfEventsIncidentsInfoByIdMutation,
  useLazyGetChildChronologyOfEventsIncidentsInfoByIdQuery,
  useDeleteChildChronologyOfEventsIncidentsInfoByIdMutation,
} = incidentsInfoApi;
