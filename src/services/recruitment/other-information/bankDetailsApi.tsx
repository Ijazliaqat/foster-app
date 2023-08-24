import { baseAPI } from "@root/services/baseApi";

export const bankDetailsApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getBankDetails: builder.query({
      query: (params) => ({
        url: `/carer-other-info/bank-detail`,
        method: "GET",
        params,
      }),
      providesTags: ["other-details/bank-details"],
    }),
    postBankDetails: builder.mutation({
      query: (body) => ({
        url: `/carer-other-info/bank-detail`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["other-details/bank-details"],
    }),
    patchBankDetails: builder.mutation({
      query: ({ id, body }) => ({
        url: `/carer-other-info/bank-detail/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["other-details/bank-details"],
    }),
    deleteBankDetail: builder.mutation({
      query: (id) => ({
        url: `/carer-other-info/bank-detail/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["other-details/bank-details"],
    }),
  }),
});

export const {
  useGetBankDetailsQuery,
  usePostBankDetailsMutation,
  usePatchBankDetailsMutation,
  useDeleteBankDetailMutation,
} = bankDetailsApi;
