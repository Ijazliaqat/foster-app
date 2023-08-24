import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStudySupportInfoTableApi: builder.query({
      query: ({ params }: any) => ({
        url: `education-records/study-support-info/List`,
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postStudySupportInfoApi: builder.mutation({
      query: ({ body }: any) => ({
        url: `education-records/study-support-info`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getStudySupportInfoById: builder.query({
      query: (id) => `education-records/study-support-info/${id}`,
    }),
    putStudySupportInfoById: builder.mutation({
      query: ({ body, id }: any) => {
        return {
          url: `education-records/study-support-info/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    deleteStudySupportInfoById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id } = data;
        return {
          url: `education-records/study-support-info/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG],
    }),
    //documents upload
    getUploadDocumentsStudySupportInfo: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/education-records/uploaded-documents/List?fosterChildId=${fosterChildId}`,
        method: "GET",
        params: { ...params, formName: "STUDY_SUPPORT_INFO" }
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postUploadDocumentsStudySupportInfoApi: builder.mutation({
      query: (body: any) => ({
        url: `/education-records/uploaded-documents`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteUploadDocumentsStudySupportInfoById: builder.mutation<null, void>({
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
  useGetStudySupportInfoTableApiQuery,
  usePostStudySupportInfoApiMutation,
  useGetStudySupportInfoByIdQuery,
  usePutStudySupportInfoByIdMutation,
  useDeleteStudySupportInfoByIdMutation,
  //documentUpload
  useGetUploadDocumentsStudySupportInfoQuery,
  usePostUploadDocumentsStudySupportInfoApiMutation,
  useDeleteUploadDocumentsStudySupportInfoByIdMutation,
} = contactApi;
