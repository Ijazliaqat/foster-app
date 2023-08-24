import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeAssessmentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeAssessmentData: builder.query({
      query: (params: any) =>
        "carer-Info/personal-info/initial-home-visit/assesment",
    }),
    postInitialHomeAssessmentData: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/assesment",
        method: "PUT",
        body: putDataParameter.body,
        params: putDataParameter.params,
      }),
      invalidatesTags: ["INITIAL_HOME_VISIT"],
    }),
  }),
});

export const {
  useGetInitialHomeAssessmentDataQuery,
  usePostInitialHomeAssessmentDataMutation,
} = initialHomeAssessmentApi;
