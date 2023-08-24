import { baseAPI, TAGS } from "@root/services/baseApi";

export const frontSheetApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    frontSheet: builder.mutation({
      query: ({ formData, params }: any) => ({
        url: "/carer-Info/personal-info/form-f/frontsheet",
        method: "PUT",
        body: formData,
        params,
      }),
    }),
  }),
});

export const { useFrontSheetMutation } = frontSheetApi;
