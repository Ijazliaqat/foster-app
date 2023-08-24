import { baseAPI, TAGS } from "@root/services/baseApi";

export const employerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEmployerDetail: builder.query({
      query: (params: any) => "/application-form/employer-detail",
    }),
    getEmployerDetails: builder.query({
      query: ({ params, id }: any) => ({
        url: `/application-form/employer-details/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["POST_EMPLOYEE", "EDIT_EMPLOYEE"],
    }),
    postEmployerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/employer-detail/${id}`,
        method: "Post",
        body: formData,
      }),
      invalidatesTags: ["POST_EMPLOYEE"],
    }),
    updateEmployerDetail: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/employer-detail/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["EDIT_EMPLOYEE"],
    }),
    deleteEmployer: builder.mutation({
      query: (id: any) => ({
        url: `/application-form/employer-detail/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EDIT_EMPLOYEE"],
    }),
  }),
});

export const {
  useGetEmployerDetailQuery,
  useGetEmployerDetailsQuery,
  usePostEmployerDetailMutation,
  useUpdateEmployerDetailMutation,
  useDeleteEmployerMutation,
} = employerApi;
