import { baseAPI, TAGS } from "@root/services/baseApi";
type IPARAM =
  | "frontSheet"
  | "applicationDetails1"
  | "applicationDetails2"
  | "enhancedDBSCheck"
  | "healthApplication1"
  | "healthApplication2"
  | "houseHoldAccommodation"
  | "informationDate"
  | "verificationApplication1"
  | "verificationApplication2"
  | "courtProceedings"
  | "householdFinance"
  | "aboutApplicants"
  | "specialistReports"
  | "summaryAndRecommendation"
  | "applicantsObservation"
  | "verificaitonApplication2";

export const formFAll = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    formF: builder.query({
      query: (param: IPARAM) => `/carer-Info/Form-f/get-all?value=${param}`,
    }),
    formFAll: builder.query({
      query: () => `/carer-Info/personal-info/form-f`,
    }),
  }),
});

export const { useFormFQuery, useLazyFormFQuery, useLazyFormFAllQuery } =
  formFAll;
