import { baseAPI } from "@root/services/baseApi";

const TAG = "OFSTED_NOTIFICATION";

export const OfstedNotifications = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOfstedNotificationList: builder.query({
      query: (payload: any) => ({
        url: `/events-and-notification/ofsted-notification/list`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetOfstedNotificationListQueryById: builder.query({
      query: (payload: any) => ({
        url: `/events-and-notification/ofsted-notification/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteOfstedNotificationList: builder.mutation({
      query: (id: any) => ({
        url: `/events-and-notification/ofsted-notification/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createOfstedNotificationList: builder.mutation({
      query: (payload: any) => ({
        url: "/events-and-notification/ofsted-notification",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateOfstedNotificationList: builder.mutation({
      query: (payload: any) => ({
        url: `/events-and-notification/ofsted-notification/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useCreateOfstedNotificationListMutation,
  useDeleteOfstedNotificationListMutation,
  useGetOfstedNotificationListQuery,
  useGetOfstedNotificationListQueryByIdQuery,
  useLazyGetOfstedNotificationListQuery,
  useLazyGetOfstedNotificationListQueryByIdQuery,
  useUpdateOfstedNotificationListMutation,
} = OfstedNotifications;
