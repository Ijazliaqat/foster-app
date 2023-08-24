import { baseAPI } from "@root/services/baseApi";
const ImmunisationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getImmunisationList: builder.query({
      query: ({ id, params }: any) => ({
        url: `/foster-child/child-immunisation-info/List?fosterChildId=${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["IMMUNISATION_LIST"],
    }),
    getImmunisationDetail: builder.query({
      query: ({ id }: any) => `/foster-child/child-immunisation-info/${id}`,
      providesTags: ["IMMUNISATION_DETAIL"],
    }),
    updateImmunisation: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/foster-child/child-immunisation-info/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["IMMUNISATION_DETAIL", "IMMUNISATION_LIST"],
    }),
    postImmunisation: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/foster-child/child-immunisation-info?fosterChildId=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["IMMUNISATION_LIST"],
    }),
    deleteimmunisation: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/child-immunisation-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["IMMUNISATION_LIST"],
    }),
  }),
});

export const {
  useGetImmunisationListQuery,
  useGetImmunisationDetailQuery,
  useUpdateImmunisationMutation,
  usePostImmunisationMutation,
  useDeleteimmunisationMutation,
} = ImmunisationApi;
