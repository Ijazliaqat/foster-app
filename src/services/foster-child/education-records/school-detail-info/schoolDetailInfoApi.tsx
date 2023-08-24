import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSchoolDetailInfoTableApi: builder.query({
      query: ({ params, fosterChildId }: any) => ({
        url: `school-info/foster-child/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postSchoolDetailInfoApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `school-info/${fosterChildId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getSchoolDetailInfoById: builder.query({
      query: (id) => `/school-info/${id}`,
    }),
    putSchoolDetailInfoById: builder.mutation({
      query: ({ body, schoolInfoId }: any) => {
        return {
          url: `/school-info/${schoolInfoId}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteSchoolDetailInfoById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `/school-info/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
    //documents upload
    getUploadDocumentsSchoolDetailInfo: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/education-records/uploaded-documents/List?fosterChildId=${fosterChildId}`,
        method: "GET",
        params: { ...params, formName: "SCHOOL_DETAIL_INFO" },
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postUploadDocumentsSchoolDetailInfoApi: builder.mutation({
      query: (body: any) => ({
        url: `/education-records/uploaded-documents`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteUploadDocumentsSchoolDetailInfoById: builder.mutation<null, void>({
      query: (id: any) => {
        return {
          url: `education-records/uploaded-document/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetSchoolDetailInfoTableApiQuery,
  usePostSchoolDetailInfoApiMutation,
  useGetSchoolDetailInfoByIdQuery,
  usePutSchoolDetailInfoByIdMutation,
  useDeleteSchoolDetailInfoByIdMutation,
  //documentUpload
  useGetUploadDocumentsSchoolDetailInfoQuery,
  usePostUploadDocumentsSchoolDetailInfoApiMutation,
  useDeleteUploadDocumentsSchoolDetailInfoByIdMutation,
} = contactApi;
