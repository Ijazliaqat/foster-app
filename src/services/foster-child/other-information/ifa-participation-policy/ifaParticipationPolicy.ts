import { baseAPI } from "@root/services/baseApi";
export const IfaParticipationPolicy: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postIfaParticiaptionPolicy: builder.mutation({
      query: ({ formData, fosterChildId }: any) => ({
        url: `/ifa-participation?fosterCarerId=${fosterChildId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
    getIfaParticiaptionPolicy: builder.query({
      query: (fosterId: any) => ({
        url: `/ifa-participation?fosterCarerId=${fosterId}`,
        method: "GET",
      }),
      providesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
    deleteIfaParticiaptionPolicy: builder.mutation({
      query: (fosterChildId: any) => ({
        url: `/ifa-participation/${fosterChildId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
    getIfaParticiaptionPolicyById: builder.query({
      query: (ifaChildId: any) => ({
        url: `/ifa-participation/${ifaChildId}`,
        method: "GET",
      }),
      providesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
    putIfaParticiaptionPolicyById: builder.mutation({
      query: ({ formData, ifaChildId }: any) => ({
        url: `/ifa-participation/${ifaChildId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["IFA-PARTICIPATION-POLICY"],
    }),
  }),
});
export const {
  usePostIfaParticiaptionPolicyMutation,
  useGetIfaParticiaptionPolicyQuery,
  useDeleteIfaParticiaptionPolicyMutation,
  useGetIfaParticiaptionPolicyByIdQuery,
  usePutIfaParticiaptionPolicyByIdMutation,
} = IfaParticipationPolicy;
