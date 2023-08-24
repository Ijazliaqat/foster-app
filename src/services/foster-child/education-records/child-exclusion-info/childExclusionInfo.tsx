import { baseAPI } from "@root/services/baseApi";

export const ChildEducationInfoList: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildExclusionInfoList: builder.query({
      query: ({ params }: any) => ({
        url: "/education-records/exclusion-info/List",
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    postExclusionInfoRecord: builder.mutation<null, void>({
      query: ({ data, fosterChildId }: any) => ({
        url: `/education-records/exclusion-info?fosterChildId=${fosterChildId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    getSingleChildExclusionInfoRecord: builder.query({
      query: (id: any) => ({
        url: `/education-records/exclusion-info/${id}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    patchSingleChildExclusionInfoRecord: builder.mutation({
      query: ({ data, id }: any) => ({
        url: `/education-records/exclusion-info/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    deleteSingleChildExclusionInfoRecord: builder.mutation({
      query: (childRecordId: any) => ({
        url: `/education-records/exclusion-info/${childRecordId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    deleteDocumentExclusionInfoRecord: builder.mutation({
      query: (childRecordId: any) => ({
        url:`/education-records/exclusionDocument/delete${childRecordId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    postFosterExclusionDocument: builder.mutation<null, void>({
      query: (formData: any) => ({
        url: `/education-records/exclusionDocuments`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
    getChildExclusionDocumentList: builder.query({
      query: (id: any) => ({
        url: `/education-records/list-exclusionDocuments/${id}`,
        method: "GET",
      }),
      providesTags: ["CHILD_EXCLUSION_INFO_LIST"],
    }),
  }),
});

export const {
  useGetChildExclusionInfoListQuery,
  usePostExclusionInfoRecordMutation,
  useGetSingleChildExclusionInfoRecordQuery,
  usePatchSingleChildExclusionInfoRecordMutation,
  useDeleteSingleChildExclusionInfoRecordMutation,
  usePostFosterExclusionDocumentMutation,
  useGetChildExclusionDocumentListQuery,
  useDeleteDocumentExclusionInfoRecordMutation
} = ChildEducationInfoList;
