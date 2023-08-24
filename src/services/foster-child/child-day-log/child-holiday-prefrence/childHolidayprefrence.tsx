import { baseAPI } from "@root/services/baseApi";

const TAG = "Child-holiday-prefrence";

export const ChildHolidayPrefrence = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildHolidayPrefrence: builder.query({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences/List/${payload.params.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetChildHolidayPrefrenceQueryById: builder.query({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteChildHolidayPrefrence: builder.mutation({
      query: (id: any) => ({
        url: `/child-day-log/child-holiday-prefrences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createChildHolidayPrefrence: builder.mutation({
      query: (payload: any) => ({
        url: "/child-day-log/child-holiday-prefrences",
        method: "POST",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateChildHolidayPrefrence: builder.mutation({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useCreateChildHolidayPrefrenceMutation,
  useDeleteChildHolidayPrefrenceMutation,
  useGetChildHolidayPrefrenceQuery,
  useLazyGetChildHolidayPrefrenceQuery,
  useGetChildHolidayPrefrenceQueryByIdQuery,
  useLazyGetChildHolidayPrefrenceQueryByIdQuery,
  useUpdateChildHolidayPrefrenceMutation,
} = ChildHolidayPrefrence;
