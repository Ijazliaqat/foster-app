import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const referenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferencesInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=reference",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addReference: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/add-reference",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateReference: builder.mutation<null, any>({
      query: ({ id }: any) => ({
        url: `user-profile/update-reference/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [TAG],
    }),
    deleteRefernce: builder.mutation<null, any>({
      query: ({ body, id }: any) => ({
        url: `user-profile/delete-reference/${id}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetReferencesInfoQuery,
  useAddReferenceMutation,
  useUpdateReferenceMutation,
  useDeleteRefernceMutation,
} = referenceApi;
