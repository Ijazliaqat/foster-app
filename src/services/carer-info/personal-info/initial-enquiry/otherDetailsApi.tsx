import { baseAPI, TAGS } from "@root/services/baseApi";

export const otherDetailsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOtherDetailsFormData: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-enquiry/other-details",
    }),
    postOtherDetailsFormData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/initial-enquiry/other-details",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetOtherDetailsFormDataQuery,
  usePostOtherDetailsFormDataMutation,
} = otherDetailsApi;
