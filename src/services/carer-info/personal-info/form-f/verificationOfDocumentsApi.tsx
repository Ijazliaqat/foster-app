import { baseAPI, TAGS } from "@root/services/baseApi";

export const verificationOfDocumentsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    verificationApplication1: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/verification-application1",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
    verificationApplication2: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/verification-application2",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const {
  useVerificationApplication1Mutation,
  useVerificationApplication2Mutation,
} = verificationOfDocumentsApi;
