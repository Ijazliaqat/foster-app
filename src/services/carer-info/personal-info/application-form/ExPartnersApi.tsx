import { baseAPI, TAGS } from "@root/services/baseApi";

export const exPartnersApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExPartnerDetail: builder.query({
      query: (params: any) => "/application-form/ex-partner-detail",
    }),
    getExPartnerDetails: builder.query({
      query: ({ params, id }: any) => ({
        url: `/application-form/ex-partner-details/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["POST_EXPARTNER", "EDIT_EXPARTNER"],
    }),
    postExPartnerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/ex-partner-detail/add/${id}`,
        method: "Post",
        body: formData,
      }),
      invalidatesTags: ["POST_EXPARTNER"],
    }),
    updateExPartnerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/ex-partner-detail/${id}`,
        method: "Put",
        body: formData,
      }),
      invalidatesTags: ["EDIT_EXPARTNER"],
    }),
    deleteExPartner: builder.mutation({
      query: (id: any) => ({
        url: `/application-form/ex-partner-detail/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EDIT_EXPARTNER"],
    }),
  }),
});

export const {
  useGetExPartnerDetailQuery,
  useGetExPartnerDetailsQuery,
  usePostExPartnerDetailMutation,
  useUpdateExPartnerDetailMutation,
  useDeleteExPartnerMutation,
} = exPartnersApi;
