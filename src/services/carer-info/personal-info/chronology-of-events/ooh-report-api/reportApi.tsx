import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const reportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    reportList: builder.query({
      query: (search: any) => ({
        url: "chronology-events/ooh-report/list",
        method: "GET",
        params: search,
      }),
      providesTags: ["OOHREPORT_LIST_TABLE"],
    }),
    reportAddPost: builder.mutation({
      query: (payload: any) => ({
        url: "chronology-events/ooh-report",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["OOHREPORT_LIST_TABLE"],
    }),
    reportById: builder.query({
      query: (id: any) => `chronology-events/ooh-report/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["OOHREPORT_LIST_TABLE"],
    }),
    patchReportById: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/ooh-report/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["OOHREPORT_LIST_TABLE"],
    }),
    deleteReportById: builder.mutation({
      query: (id: any) => ({
        url: `chronology-events/ooh-report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OOHREPORT_LIST_TABLE"],
    }),
  }),
});

export const {
  useReportListQuery,
  useReportAddPostMutation,
  useLazyReportByIdQuery,
  usePatchReportByIdMutation,
  useDeleteReportByIdMutation,
} = reportApi;
