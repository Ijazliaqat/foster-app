import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const referenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getNextOfKinInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.nextOfKim",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateNextOfKinInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/next-kin",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getContactPreference: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.contactPreferance",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateContactPreference: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/contact-preferance",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherPayInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.employmentStatus",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherPayInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/employment-status/paye",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherLimitedCompanyInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.employmentStatus",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherLimitedCompanyInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/employment-status/limited-company",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherSelfEmployedInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.employmentStatus",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherSelfEmployedInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/employment-status/self-employed",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getOtherUmbrellaCompanyInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.employmentStatus",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOtherUmbrellaCompanyInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/employment-status/umberalla-comapny",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOpportunityDecla: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=otherInfo.opportunityDeclaration",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateOpportunityDecla: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/opportunity-declaration",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherInfoAdditionalDocs: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=documents",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addOtherInfoAdditionalDocs: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/additional-docs",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateOtherInfoAdditionalDocs: builder.mutation<null, any>({
      query: ({ body, docId }: any) => ({
        url: `user-profile/additional-docs/${docId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteOtherInfoAdditionalDocsDocs: builder.mutation<null, any>({
      query: ({ body, docsId }: any) => ({
        url: `user-profile/additional-docs?docsId=${docsId}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getOtherBankDetailsInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=bankDetail",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addOtherBankDetailsInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/bank-detail",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateOtherBankDetailsInfo: builder.mutation<null, any>({
      query: ({ body, id }) => ({
        url: `user-profile/bank-detail?id=${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useLazyGetNextOfKinInfoQuery,
  useUpdateNextOfKinInfoMutation,
  useLazyGetContactPreferenceQuery,
  useUpdateContactPreferenceMutation,

  useLazyGetOtherPayInfoQuery,
  useUpdateOtherPayInfoMutation,

  useLazyGetOtherLimitedCompanyInfoQuery,
  useUpdateOtherLimitedCompanyInfoMutation,

  useLazyGetOtherSelfEmployedInfoQuery,
  useUpdateOtherSelfEmployedInfoMutation,

  useLazyGetOtherUmbrellaCompanyInfoQuery,
  useUpdateOtherUmbrellaCompanyInfoMutation,

  useLazyGetOpportunityDeclaQuery,
  useUpdateOpportunityDeclaMutation,

  useGetOtherInfoAdditionalDocsQuery,
  useAddOtherInfoAdditionalDocsMutation,
  useUpdateOtherInfoAdditionalDocsMutation,
  useDeleteOtherInfoAdditionalDocsDocsMutation,

  useGetOtherBankDetailsInfoQuery,
  useAddOtherBankDetailsInfoMutation,
  useUpdateOtherBankDetailsInfoMutation,
} = referenceApi;
