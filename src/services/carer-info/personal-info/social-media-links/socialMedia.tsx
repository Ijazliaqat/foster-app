import { baseAPI, TAGS } from "@root/services/baseApi";

export const socialMediaApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSocialMediaAccounts: builder.query<null, void>({
      query: (params: any) => "carer-info/personal-info/social-media",
      providesTags: ["LINKS", "EDIT_LINKS"],
    }),
    getSocialMediaAccount: builder.query({
      query: (params: any) =>
        "carer-info/personal-info/initial-enquiry/contact",
    }),
    editSocialMediaAccount: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `carer-info/personal-info/social-media/?socialMediaId=${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["EDIT_LINKS"],
    }),
    postSocialMediaAccount: builder.mutation({
      query: (formData: any) => ({
        url: "carer-info/personal-info/social-media",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["LINKS"],
    }),
  }),
});

export const {
  useGetSocialMediaAccountsQuery,
  usePostSocialMediaAccountMutation,
  useGetSocialMediaAccountQuery,
  useEditSocialMediaAccountMutation,
} = socialMediaApi;
