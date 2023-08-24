import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const ofstedNotificationsApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsOfstedNotificationsList: build.query<
      GetChildChronologyOfEventsOfstedNotificationsListApiResponse,
      GetChildChronologyOfEventsOfstedNotificationsListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ofsted-notifications/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsOfstedNotifications: build.mutation<
      PostChildChronologyOfEventsOfstedNotificationsApiResponse,
      PostChildChronologyOfEventsOfstedNotificationsApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ofsted-notifications`,
        method: "POST",
        body: queryArg.addOfstedNotificationsRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsOfstedNotificationsById: build.mutation<
      PatchChildChronologyOfEventsOfstedNotificationsByIdApiResponse,
      PatchChildChronologyOfEventsOfstedNotificationsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ofsted-notifications/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addOfstedNotificationsRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsOfstedNotificationsById: build.query<
      GetChildChronologyOfEventsOfstedNotificationsByIdApiResponse,
      GetChildChronologyOfEventsOfstedNotificationsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ofsted-notifications/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsOfstedNotificationsById: build.mutation<
      DeleteChildChronologyOfEventsOfstedNotificationsByIdApiResponse,
      DeleteChildChronologyOfEventsOfstedNotificationsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/ofsted-notifications/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export type GetChildChronologyOfEventsOfstedNotificationsListApiResponse =
  /** status 201  */ AddOfstedNotificationsResponseDto;
export type GetChildChronologyOfEventsOfstedNotificationsListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsOfstedNotificationsApiResponse =
  /** status 201  */ AddOfstedNotificationsResponseDto;
export type PostChildChronologyOfEventsOfstedNotificationsApiArg = {
  addOfstedNotificationsRequestDto: AddOfstedNotificationsRequestDto;
};
export type PatchChildChronologyOfEventsOfstedNotificationsByIdApiResponse =
  /** status 201  */ AddOfstedNotificationsResponseDto;
export type PatchChildChronologyOfEventsOfstedNotificationsByIdApiArg = {
  id: string;
  addOfstedNotificationsRequestDto: AddOfstedNotificationsRequestDto;
};
export type GetChildChronologyOfEventsOfstedNotificationsByIdApiResponse =
  /** status 201  */ AddOfstedNotificationsResponseDto;
export type GetChildChronologyOfEventsOfstedNotificationsByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsOfstedNotificationsByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsOfstedNotificationsByIdApiArg = {
  id: string;
};
export type AddOfstedNotificationsResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddOfstedNotificationsRequestDto = {
  dateOfIncidentAndTime: string;
  status: string;
};
export const {
  useGetChildChronologyOfEventsOfstedNotificationsListQuery,
  usePostChildChronologyOfEventsOfstedNotificationsMutation,
  usePatchChildChronologyOfEventsOfstedNotificationsByIdMutation,
  useLazyGetChildChronologyOfEventsOfstedNotificationsByIdQuery,
  useDeleteChildChronologyOfEventsOfstedNotificationsByIdMutation,
} = ofstedNotificationsApi;
