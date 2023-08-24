import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const absenceInfoApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getChildChronologyOfEventsAbsenceInfoList: build.query({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/absence-info/List`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),
    postChildChronologyOfEventsAbsenceInfo: build.mutation({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/absence-info`,
        method: "POST",
        body: queryArg.addAbsenceInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    patchChildChronologyOfEventsAbsenceInfoById: build.mutation({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/absence-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addAbsenceInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),
    getChildChronologyOfEventsAbsenceInfoById: build.query({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/absence-info/${queryArg.id}`,
      }),

      providesTags: [TAG],
    }),
    deleteChildChronologyOfEventsAbsenceInfoById: build.mutation({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/absence-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),

});

export const {
  useGetChildChronologyOfEventsAbsenceInfoListQuery,
  usePostChildChronologyOfEventsAbsenceInfoMutation,
  usePatchChildChronologyOfEventsAbsenceInfoByIdMutation,
  useLazyGetChildChronologyOfEventsAbsenceInfoByIdQuery,
  useDeleteChildChronologyOfEventsAbsenceInfoByIdMutation,
} = absenceInfoApi;
