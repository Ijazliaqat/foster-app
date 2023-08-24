import { baseAPI, TAGS } from "@root/services/baseApi";

export const otherInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFormFOtherInfo: builder.query({
      query: (formFId) => `/carer-Info/get-other-materials/${formFId}`,
    }),
    postFormFOtherInfo: builder.mutation({
      query: ({ body, formFId }) => ({
        url: `/carer-Info/add-other-materials/${formFId}`,
        method: "POST",
        body,
      }),
    }),
    editFormFOtherInfo: builder.mutation({
      query: ({ formFId, body }) => ({
        url: `/carer-Info/get-other-materials/${formFId}`,
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetFormFOtherInfoQuery,
  useLazyGetFormFOtherInfoQuery,
  useEditFormFOtherInfoMutation,
  usePostFormFOtherInfoMutation,
} = otherInfoApi;
