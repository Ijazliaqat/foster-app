import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const childMissingPlacementApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsChildMissingPlacementList: build.query<
      GetChildChronologyOfEventsChildMissingPlacementListApiResponse,
      GetChildChronologyOfEventsChildMissingPlacementListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/child-missing-placement/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsChildMissingPlacement: build.mutation<
      PostChildChronologyOfEventsChildMissingPlacementApiResponse,
      PostChildChronologyOfEventsChildMissingPlacementApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/child-missing-placement`,
        method: "POST",
        body: queryArg.addChildMissingPlacementRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsChildMissingPlacementById: build.mutation<
      PatchChildChronologyOfEventsChildMissingPlacementByIdApiResponse,
      PatchChildChronologyOfEventsChildMissingPlacementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/child-missing-placement/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addChildMissingPlacementRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsChildMissingPlacementById: build.query<
      GetChildChronologyOfEventsChildMissingPlacementByIdApiResponse,
      GetChildChronologyOfEventsChildMissingPlacementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/child-missing-placement/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsChildMissingPlacementById: build.mutation<
      DeleteChildChronologyOfEventsChildMissingPlacementByIdApiResponse,
      DeleteChildChronologyOfEventsChildMissingPlacementByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/child-missing-placement/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export type GetChildChronologyOfEventsChildMissingPlacementListApiResponse =
  /** status 201  */ AddChildMissingPlacementResponseDto;
export type GetChildChronologyOfEventsChildMissingPlacementListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildChronologyOfEventsChildMissingPlacementApiResponse =
  /** status 201  */ AddChildMissingPlacementResponseDto;
export type PostChildChronologyOfEventsChildMissingPlacementApiArg = {
  addChildMissingPlacementRequestDto: AddChildMissingPlacementRequestDto;
};
export type PatchChildChronologyOfEventsChildMissingPlacementByIdApiResponse =
  /** status 201  */ AddChildMissingPlacementResponseDto;
export type PatchChildChronologyOfEventsChildMissingPlacementByIdApiArg = {
  id: string;
  addChildMissingPlacementRequestDto: AddChildMissingPlacementRequestDto;
};
export type GetChildChronologyOfEventsChildMissingPlacementByIdApiResponse =
  /** status 201  */ AddChildMissingPlacementResponseDto;
export type GetChildChronologyOfEventsChildMissingPlacementByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsChildMissingPlacementByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsChildMissingPlacementByIdApiArg = {
  id: string;
};
export type AddChildMissingPlacementResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddChildMissingPlacementRequestDto = {
  childMissingDate: string;
  reportedDate: string;
  missingReason: string;
};

export const {
  useGetChildChronologyOfEventsChildMissingPlacementListQuery,
  usePostChildChronologyOfEventsChildMissingPlacementMutation,
  usePatchChildChronologyOfEventsChildMissingPlacementByIdMutation,
  useLazyGetChildChronologyOfEventsChildMissingPlacementByIdQuery,
  useDeleteChildChronologyOfEventsChildMissingPlacementByIdMutation,
} = childMissingPlacementApi;
