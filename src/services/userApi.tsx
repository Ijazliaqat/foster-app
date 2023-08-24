import { baseAPI } from "./baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (user: any) => ({
        url: "auth/change-password",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["USER"],
    }),
    getUserProfile: builder.query<null, void>({
      query: () => "user-profile/my-profile",
      providesTags: ["USER"],
    }),
    getAboutDetails: builder.query<any, any>({
      query: () => "user-profile/edit-profile",
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useGetAboutDetailsQuery,
} = userAPI;
