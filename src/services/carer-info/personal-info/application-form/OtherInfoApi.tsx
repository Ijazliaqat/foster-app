import { baseAPI, TAGS } from "@root/services/baseApi";

export const otherInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updateOtherInfo: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/other-details?applicationFormId=${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["GET_BASICINFORMATION"],
    }),
  }),
});

export const { useUpdateOtherInfoMutation } = otherInfoApi;
