import { baseAPI, TAGS } from "@root/services/baseApi";

export const firstApplicantAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    get1stApplicantFormData: builder.query({
      query: (params: any) => "/initial-inquiry/first-applicant",
    }),
    post1stApplicantFormData: builder.mutation({
      query: (formData: any) => ({
        url: "/initial-inquiry/first-applicant",
        method: "PUT",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGet1stApplicantFormDataQuery,
  useLazyGet1stApplicantFormDataQuery,
  usePost1stApplicantFormDataMutation,
} = firstApplicantAPI;
