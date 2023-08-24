import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationDetailsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putApplicationDetails1: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/application-details1",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
    putApplicationDetails2: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/application-details2",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const {
  usePutApplicationDetails1Mutation,
  usePutApplicationDetails2Mutation,
} = applicationDetailsApi;
