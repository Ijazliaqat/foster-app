import { baseAPI, TAGS } from "@root/services/baseApi";

export const familyApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getFamilyDetail: builder.query({
      query: (params: any) => "/application-form/family-details",
    }),
    getFamilyDetails: builder.query({
      query: ({ params, id }: any) => ({
        url: `/application-form/${id}/family-list`,
        method: "GET",
        params,
      }),
      providesTags: ["POST_FAMILY"],
    }),
    postFamilyDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/family-details/${id}`,
        method: "Post",
        body: formData,
      }),
      invalidatesTags: ["POST_FAMILY"],
    }),
    updateFamilyDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/family-details/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["POST_FAMILY"],
    }),
    deleteFamilyDetail: builder.mutation({
      query: ({ id }: any) => ({
        url: `/application-form/family-details/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["POST_FAMILY"],
    }),
  }),
});

export const {
  useGetFamilyDetailQuery,
  useGetFamilyDetailsQuery,
  usePostFamilyDetailMutation,
  useUpdateFamilyDetailMutation,
  useDeleteFamilyDetailMutation,
} = familyApi;
