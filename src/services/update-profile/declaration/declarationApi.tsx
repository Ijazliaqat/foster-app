import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const declarationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getDeclarationInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=declaration",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateDeclarationInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-declaration",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useLazyGetDeclarationInfoQuery,
  useUpdateDeclarationInfoMutation,
} = declarationApi;
