import { baseAPI, TAGS } from "@root/services/baseApi";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getContactFormData: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-enquiry/contact",
    }),
    postContactFormData: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/initial-enquiry/contact",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetContactFormDataQuery, usePostContactFormDataMutation } =
  contactApi;
