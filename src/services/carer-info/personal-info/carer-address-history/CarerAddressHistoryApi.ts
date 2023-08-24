import { baseAPI, TAGS } from "@root/services/baseApi";

export const carerAddressHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllHistory: builder.query({
      query: ({ params }: any) => ({
        url: "/carer-address-history",
        method: "GET",
        params,
      }),
      providesTags: ["POST_CARER_ADDRESS_LIST"],
    }),
    getHistory: builder.query({
      query: ({ id }: any) => ({
        url: `/carer-address-history/${id}`,
        method: "GET",
      }),
      providesTags: ["POST_CARER_ADDRESS"],
    }),
    postAddressHistory: builder.mutation({
      query: ({ formData }: any) => ({
        url: `/carer-address-history`,
        method: "Post",
        body: formData,
      }),
      invalidatesTags: ["POST_CARER_ADDRESS_LIST"],
    }),
    updateAddressHistory: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/carer-address-history/${id}`,
        method: "Put",
        body: formData,
      }),
      invalidatesTags: ["POST_CARER_ADDRESS_LIST", "POST_CARER_ADDRESS"],
    }),
    deleteAddressHistory: builder.mutation({
      query: (id: any) => ({
        url: `/carer-address-history/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["POST_CARER_ADDRESS_LIST"],
    }),
  }),
});

export const {
  useGetAllHistoryQuery,
  useGetHistoryQuery,
  useDeleteAddressHistoryMutation,
  usePostAddressHistoryMutation,
  useUpdateAddressHistoryMutation,
} = carerAddressHistoryApi;
