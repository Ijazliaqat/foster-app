import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "ROLE_PERMISSIONS";
const TAG_2 = "USER_PERMISSIONS";

export const systemAdminApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRolePermissions: builder.query({
      query: ({ roleId, params }: any) => ({
        url: `/roles/${roleId}/permissions`,
        method: "GET",
        params,
        cache: "reload"
      }),
      providesTags: [TAG],
    }),
    postAssignPermissions: builder.mutation({
      query: ({ roleId, dto }) => ({
        url: `/roles/${roleId}/assign-permission`,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: [TAG],
    }),
    postRemovePermissions: builder.mutation({
      query: ({ roleId, dto }) => ({
        url: `/roles/${roleId}/remove-permission`,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: [TAG],
    }),
    getUserPermissions: builder.query({
      query: ({ roleId, userId, params }: any) => ({
        url: `/roles/${roleId}/${userId}/permissions`,
        method: "GET",
        params,
        cache: "reload"
      }),
      providesTags: [TAG_2],
    }),
    postAssignPermissionsToUser: builder.mutation({
      query: ({ roleId, userId, dto }) => ({
        url: `/roles/${roleId}/${userId}/assign-permission`,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: [TAG_2],
    }),
    postRemovePermissionsFromUser: builder.mutation({
      query: ({ roleId, userId, dto }) => ({
        url: `/roles/${roleId}/${userId}/remove-permission`,
        method: "POST",
        body: dto,
      }),
      invalidatesTags: [TAG_2],
    }),
  }),
});

export const {
  useGetRolePermissionsQuery,
  usePostAssignPermissionsMutation,
  usePostRemovePermissionsMutation,
  useGetUserPermissionsQuery,
  usePostAssignPermissionsToUserMutation,
  usePostRemovePermissionsFromUserMutation
} = systemAdminApi;
