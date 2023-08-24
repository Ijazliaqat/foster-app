import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_REFERRAL";

export const childReferralApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildReferralTableApi: builder.query({
      query: ({ params }: any) => ({
        url: "foster-child/child-referral",
        method: "GET",
        params,
      }),
      providesTags: [TAG],
    }),
    postChildProfileInfo: builder.mutation({
      query: ({ updatedData, fosterChildId }: any) => ({
        url: `/foster-child/personal-info/${fosterChildId}`,
        method: "POST",
        body: updatedData,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetChildReferralTableApiQuery,
  usePostChildProfileInfoMutation,
} = childReferralApi;
