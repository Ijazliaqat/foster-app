import { baseAPI } from "@root/services/baseApi";
export const ChildEducationInfoList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducationInfoListData: builder.query({
      query: ({ params }: any) => ({
        url: "education-records/education-info/list-education-info",
        method: "GET",
        params,
      }),
      providesTags: ["CHILD_EDUCATION_INFO_LIST"],
    }),
    getSingleEducationInfoData: builder.query({
      query: ({ educationInfoId }: any) => ({
        url: `education-records/education-info/${educationInfoId}`,
        method: "GET",
        params: educationInfoId,
      }),
    }),
    postEducationInfoData: builder.mutation({
      //check the str of body here
      query: ({ body, fosterChildId }: any) => ({
        url: `education-records/education-info/${fosterChildId}`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    }),
    patchEducationInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `education-records/education-info/${apiDataParameter?.pathParams?.educationInfoId}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    }),
    deleteEducationInfoData: builder.mutation({
      query: ({ id }: any) => ({
        url: `education-records/education-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CHILD_EDUCATION_INFO_LIST"],
    }),
  }),
});
export const {
  useGetAllEducationInfoListDataQuery,
  useLazyGetAllEducationInfoListDataQuery,
  useGetSingleEducationInfoDataQuery,
  useLazyGetSingleEducationInfoDataQuery,
  usePostEducationInfoDataMutation,
  usePatchEducationInfoDataMutation,
  useDeleteEducationInfoDataMutation,
} = ChildEducationInfoList;