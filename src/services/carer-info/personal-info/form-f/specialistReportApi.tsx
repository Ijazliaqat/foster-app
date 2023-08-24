import { baseAPI, TAGS } from "@root/services/baseApi";

export const specialistReportApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putSpecialistReport: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/specialist_report",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutSpecialistReportMutation } = specialistReportApi;
