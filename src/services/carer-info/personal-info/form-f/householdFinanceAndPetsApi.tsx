import { baseAPI, TAGS } from "@root/services/baseApi";

export const householdFinanceAndPetsAPi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putHouseholdFinance: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/household-finance",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutHouseholdFinanceMutation } = householdFinanceAndPetsAPi;
