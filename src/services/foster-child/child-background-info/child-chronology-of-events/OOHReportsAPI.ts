import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const OOHReportsApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsOohReportsList: build.query<
      GetChildChronologyOfEventsOohReportsListApiResponse,
      GetChildChronologyOfEventsOohReportsListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ooh-reports/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsOohReports: build.mutation<
      PostChildChronologyOfEventsOohReportsApiResponse,
      PostChildChronologyOfEventsOohReportsApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ooh-reports`,
        method: "POST",
        body: queryArg.addOohReportsRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsOohReportsById: build.mutation<
      PatchChildChronologyOfEventsOohReportsByIdApiResponse,
      PatchChildChronologyOfEventsOohReportsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ooh-reports/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addDayLogRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsOohReportsById: build.query<
      GetChildChronologyOfEventsOohReportsByIdApiResponse,
      GetChildChronologyOfEventsOohReportsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ooh-reports/${queryArg}`,
      }),

      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsOohReportsById: build.mutation<
      DeleteChildChronologyOfEventsOohReportsByIdApiResponse,
      DeleteChildChronologyOfEventsOohReportsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ooh-reports/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildChronologyOfEventsOohReportsListApiResponse =
  /** status 201  */ AddOohReportsResponseDto;
export type GetChildChronologyOfEventsOohReportsListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsOohReportsApiResponse =
  /** status 201  */ AddOohReportsResponseDto;
export type PostChildChronologyOfEventsOohReportsApiArg = {
  addOohReportsRequestDto: AddOohReportsRequestDto;
};
export type PatchChildChronologyOfEventsOohReportsByIdApiResponse =
  /** status 201  */ AddOohReportsResponseDto;
export type PatchChildChronologyOfEventsOohReportsByIdApiArg = {
  id: string;
  addDayLogRequestDto: AddDayLogRequestDto;
};
export type GetChildChronologyOfEventsOohReportsByIdApiResponse =
  /** status 201  */ AddOohReportsResponseDto;
export type GetChildChronologyOfEventsOohReportsByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsOohReportsByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsOohReportsByIdApiArg = {
  id: string;
};
export type AddOohReportsResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddOohReportsRequestDto = {
  reportingDateAndTime: string;
  emergencyPlacementRequired: string;
  status: string;
};
export type AddDayLogRequestDto = {
  dateOfOccurence: string;
  type: string;
  subject: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsOohReportsListQuery,
  usePostChildChronologyOfEventsOohReportsMutation,
  usePatchChildChronologyOfEventsOohReportsByIdMutation,
  useLazyGetChildChronologyOfEventsOohReportsByIdQuery,
  useDeleteChildChronologyOfEventsOohReportsByIdMutation,
} = OOHReportsApi;
