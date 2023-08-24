import { baseAPI } from "@root/services/baseApi";
export const childEducationInfoDocumentApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildEducationInfoDocumentData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `education-records/education-info/document/list/${apiDataParameter?.pathParams?.educationInfoId}`,
        method: "GET",
        params: apiDataParameter?.params,
      }),
      providesTags: ["EDUCATION_INFO_DOCUMENTS"],
    }),
    deleteEducationInfoDocumentDataById: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `education-records/education-info/document/${apiDataParameter.pathParams.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EDUCATION_INFO_DOCUMENTS"],
    }),
    postEducationInfoDocumentData: builder.mutation({
      query: (apiDataParameter: any) => {
        console.log(apiDataParameter);
        return {
          url: `education-records/education-info-document`,
          method: "POST",
          body: apiDataParameter?.body,
          // params: apiDataParameter?.params,
        };
      },
      invalidatesTags: ["EDUCATION_INFO_DOCUMENTS"],
    }),
  }),
});
export const {
  useDeleteEducationInfoDocumentDataByIdMutation,
  useGetChildEducationInfoDocumentDataQuery,
  usePostEducationInfoDocumentDataMutation,
} = childEducationInfoDocumentApi;
