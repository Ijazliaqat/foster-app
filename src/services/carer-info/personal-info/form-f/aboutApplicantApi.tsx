import { baseAPI, TAGS } from "@root/services/baseApi";

export const aboutTheApplicantApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putAboutTheApplicant: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/about-the-applicants",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutAboutTheApplicantMutation } = aboutTheApplicantApi;
