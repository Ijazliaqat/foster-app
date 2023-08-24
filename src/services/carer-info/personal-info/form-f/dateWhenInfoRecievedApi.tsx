import { baseAPI, TAGS } from "@root/services/baseApi";

export const dateWhenInfoReceivedApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    putDateWhenInfoReceivedApi: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "carer-info/personal-info/form-f/date-information-received",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { usePutDateWhenInfoReceivedApiMutation } =
  dateWhenInfoReceivedApi;
