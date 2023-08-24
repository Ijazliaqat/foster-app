import { baseAPI, TAGS } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

export const applicationFormApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getApplicationFormData: builder.query({
      query: (params: any) => "/application-form",
      providesTags: (result) =>
        generalTags(result?.questionnaire_list, "GET_BASICINFORMATION"),
    }),
  }),
});

export const { useGetApplicationFormDataQuery } = applicationFormApi;
