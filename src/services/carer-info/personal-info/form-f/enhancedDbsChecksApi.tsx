import { baseAPI, TAGS } from "@root/services/baseApi";

export const enhancedDbsChecksApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putEnhancedDbsChecks: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/enhanced-dbs-check",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutEnhancedDbsChecksMutation } = enhancedDbsChecksApi;
