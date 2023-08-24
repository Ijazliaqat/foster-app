import { baseAPI, TAGS } from "@root/services/baseApi";

export const applicationDetailsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    puthouseholdAccommodation: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/household-accomodation",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePuthouseholdAccommodationMutation } = applicationDetailsApi;
