import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialInquiryApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getInitialInquiryData: builder.query({
      query: () => "/initial-inquiry",
      transformResponse: (response: any) => {
        return {
          ...response,
          firstApplicant: response?.[0]?.firstApplicant,
          contact: response?.[0]?.contact?.dto,
          otherDetails: response?.[0]?.otherDetails?.dto,
        };
      },
    }),
    getInitialInquiryDocumentsData: builder.query({
      query: (params: any) => "/initial-inquiry/upload-document/all",
    }),
  }),
});

export const {
  useGetInitialInquiryDataQuery,
  useLazyGetInitialInquiryDataQuery,
  useGetInitialInquiryDocumentsDataQuery,
  useLazyGetInitialInquiryDocumentsDataQuery,
} = initialInquiryApi;
