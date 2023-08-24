import { baseAPI, TAGS } from "@root/services/baseApi";

export const summaryAndRecommendationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putSummaryAndRecommendation: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/summary-and-recommendation",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutSummaryAndRecommendationMutation } =
  summaryAndRecommendationApi;
