import { baseAPI} from "@root/services/baseApi";

export const initialHomeInterestApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeInterestData: builder.query({
      query: (params: any) =>
        "carer-Info/personal-info/initial-home-visit/interest",
    }),
    postInitialHomeInterestData: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/interest",
        method: "PUT",
        body: putDataParameter.body,
        params: putDataParameter.params,
      }),
      invalidatesTags: ["INITIAL_HOME_VISIT"],
    }),
  }),
});

export const {
  useGetInitialHomeInterestDataQuery,
  usePostInitialHomeInterestDataMutation,
} = initialHomeInterestApi;
