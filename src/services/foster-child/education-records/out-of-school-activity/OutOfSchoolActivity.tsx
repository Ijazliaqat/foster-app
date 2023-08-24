import { baseAPI } from "@root/services/baseApi";

export const OutOfSchoolActivity: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOutSchoolActivityList: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/school-info/foster-child/out-of-school-activity/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    getSingleSchoolActivityData: builder.query({
      query: (recordID: any) => ({
        url: `/school-info/out-of-school-activity/${recordID}`,
        method: "GET",
      }),
      providesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    postSingleSchoolActivityData: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/school-info/out-of-school-activity/${fosterChildId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    deleteSchoolActivityData: builder.mutation({
      query: (OutOfSchoolActivityId: string) => ({
        url: `/school-info/out-of-school-activity/${OutOfSchoolActivityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    patchSchoolActivityData: builder.mutation({
      query: ({ data, fosterChildId }: any) => ({
        url: `/school-info/out-of-school-activity/${fosterChildId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    postDocumentSchoolActivity: builder.mutation({
      query: ({ formData, fosterChildId }: any) => ({
        url: `/education-records/uploaded-documents?fosterChildId=${fosterChildId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    getSchoolActivityDocumentData: builder.query({
      query: ({fosterChildId, recordID}:any) => ({
        url: `/education-records/uploaded-documents/List?fosterChildId=${fosterChildId}&formName=${"OUT_OF_SCHOOL_ACTIVITY"}&recordId=${recordID}`,
        method: "GET",
      }),
      providesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
    deleteSchoolActivityDocumentData: builder.mutation({
      query: (recordId: any) => ({
        url: `/education-records/uploaded-document/${recordId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["OUT-SCHOOL-ACTIVITY"],
    }),
  }),
});

export const {
  useGetOutSchoolActivityListQuery,
  useGetSingleSchoolActivityDataQuery,
  usePostSingleSchoolActivityDataMutation,
  useDeleteSchoolActivityDataMutation,
  usePatchSchoolActivityDataMutation,
  usePostDocumentSchoolActivityMutation,
  useGetSchoolActivityDocumentDataQuery,
  useDeleteSchoolActivityDocumentDataMutation
} = OutOfSchoolActivity;
