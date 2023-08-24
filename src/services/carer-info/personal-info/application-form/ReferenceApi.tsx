import { baseAPI, TAGS } from "@root/services/baseApi";

export const referenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceDetail: builder.query({
      query: (params: any) => "/application-form/reference-detail",
    }),
    getReferenceDetails: builder.query({
      query: ({ params, id }: any) => ({
        url: `/application-form/reference-details/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["POST_REFERENCE", "EDIT_REFERENCE"],
    }),
    postReferenceDetail: builder.mutation({
      query: (params: any) => ({
        url: `/application-form/reference-detail/${params.id}`,
        method: "Post",
        body: params.formData,
      }),
      invalidatesTags: ["POST_REFERENCE"],
    }),
    updateReference: builder.mutation({
      query: (params: any) => ({
        url: `/application-form/reference-details/${params.id}`,
        method: "PUT",
        body: params.formData,
      }),
      invalidatesTags: ["EDIT_REFERENCE"],
    }),
    deleteReferenceDetail: builder.mutation({
      query: ({ id }: any) => ({
        url: `/application-form/reference-detail/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["POST_REFERENCE"],
    }),
  }),
});

export const {
  useGetReferenceDetailQuery,
  useGetReferenceDetailsQuery,
  usePostReferenceDetailMutation,
  useUpdateReferenceMutation,
  useDeleteReferenceDetailMutation,
} = referenceApi;
