import { baseAPI, TAGS } from "@root/services/baseApi";

export const courtProceedingApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putCourtProceeding: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/court-proceeding",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutCourtProceedingMutation } = courtProceedingApi;
