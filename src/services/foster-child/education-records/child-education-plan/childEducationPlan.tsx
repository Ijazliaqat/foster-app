import { baseAPI } from "@root/services/baseApi";

export const ChildEducationPlan: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildEducationPlanList: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/education-records/education-plan/list-education-plan?${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    postChildEducationPlan: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/education-plan/${fosterChildId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    getSingleChildEducationPlan: builder.query({
      query: (fosterChildId: any) => ({
        url: `/education-records/education-plan/${fosterChildId}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    patchSingleChildEducationPlan: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/education-plan/${fosterChildId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    deleteSingleChildEducationPlan: builder.mutation({
      query: (trainingProfileId: any) => ({
        url: `/education-records/education-plan/${trainingProfileId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    getDocumentChildEducationPlan: builder.query({
      query: ({fosterChildId, params}: any) => ({
        url: `/education-records/education-plan/documents/${fosterChildId}`,
        method: "GET",
        params
      }),
      providesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    postDocumentChildEducationPlan: builder.mutation({
      query: ({ formData, fosterChildId}: any) => ({
        url: `/education-records/education-plan/document/${fosterChildId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
    deleteDocumentChildEducationPlan: builder.mutation({
      query: (id: any) => ({
        url: `/education-records/education-planDocument/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EDUCATION_PLAN_LIST"],
    }),
  }),
});

export const {
  useGetChildEducationPlanListQuery,
  usePostChildEducationPlanMutation,
  useGetSingleChildEducationPlanQuery,
  usePatchSingleChildEducationPlanMutation,
  useDeleteSingleChildEducationPlanMutation,
  useGetDocumentChildEducationPlanQuery,
  usePostDocumentChildEducationPlanMutation,
  useDeleteDocumentChildEducationPlanMutation
} = ChildEducationPlan;
