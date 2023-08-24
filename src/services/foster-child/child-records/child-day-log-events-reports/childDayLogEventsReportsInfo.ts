import { baseAPI } from "@root/services/baseApi";

export const allegationInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllChildDaylogEventsReportListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "child-chronology-of-events/day-log/List",
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
      providesTags: ["CHILD_DAY_LOG_EVENTS_REPORTS_INFO"],
    }),
    getSingleChildDaylogEventsReportInfoData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `child-chronology-of-events/day-log/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
    }),
    postChildDaylogEventsReportInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "child-chronology-of-events/day-log",
        method: "POST",
        params: apiDataParameter.queryParams,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["CHILD_DAY_LOG_EVENTS_REPORTS_INFO"],
    }),
    patchChildDaylogEventsReportInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `child-chronology-of-events/day-log/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter?.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["CHILD_DAY_LOG_EVENTS_REPORTS_INFO"],
    }),
    deleteChildDaylogEventsReportInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `child-chronology-of-events/day-log/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
        params: apiDataParameter?.queryParams,
      }),
      invalidatesTags: ["CHILD_DAY_LOG_EVENTS_REPORTS_INFO"],
    }),
  }),
});

export const {
  useGetAllChildDaylogEventsReportListDataQuery,
  useLazyGetAllChildDaylogEventsReportListDataQuery,
  useLazyGetSingleChildDaylogEventsReportInfoDataQuery,
  useGetSingleChildDaylogEventsReportInfoDataQuery,
  usePatchChildDaylogEventsReportInfoDataMutation,
  usePostChildDaylogEventsReportInfoDataMutation,
  useDeleteChildDaylogEventsReportInfoDataMutation,
} = allegationInfoApi;
