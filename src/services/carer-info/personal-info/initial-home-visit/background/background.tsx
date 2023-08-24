import { baseAPI } from "@root/services/baseApi";

export const initialHomeBackgroundApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeBackgroundData: builder.query({
      query: (params: any) => "carer-Info/personal-info/initial-home-visit/background",
    }),
    postInitialHomeBackgroundData: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/background",
        method: "PUT",
        body: putDataParameter.body,
        params: putDataParameter.params,
      }),
      invalidatesTags: ["INITIAL_HOME_VISIT"],

    }),
  }),
});

export const { useGetInitialHomeBackgroundDataQuery, usePostInitialHomeBackgroundDataMutation } =
  initialHomeBackgroundApi;
