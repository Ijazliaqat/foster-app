import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const backgroundChecksApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDbsInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=backgroundCheck.dbs",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateDbsInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/dbs",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteDbsDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/dbs",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getWriteToWorkInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=backgroundCheck.workRight",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateWriteToWorkInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/right-to-work",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteWriteToWorkDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/right-to-work",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useLazyGetDbsInfoQuery,
  useUpdateDbsInfoMutation,
  useDeleteDbsDocuMutation,

  useLazyGetWriteToWorkInfoQuery,
  useUpdateWriteToWorkInfoMutation,
  useDeleteWriteToWorkDocuMutation,
} = backgroundChecksApi;
