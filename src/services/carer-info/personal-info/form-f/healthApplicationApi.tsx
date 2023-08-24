import { baseAPI, TAGS } from "@root/services/baseApi";

export const healthApplicationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putHealthApplication1: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/health-application1",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
    putHealthApplication2: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/health-application2",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const {
  usePutHealthApplication1Mutation,
  usePutHealthApplication2Mutation,
} = healthApplicationApi;
