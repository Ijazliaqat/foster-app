import { baseAPI } from "@root/services/baseApi";

export const fosterCarerListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFosterCarerList: builder.query({
      query: ({ params }: any) => ({
        url: "users/foster-carer-users",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetFosterCarerListQuery } = fosterCarerListApi;
