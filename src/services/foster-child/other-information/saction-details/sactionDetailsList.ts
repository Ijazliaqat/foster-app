import { baseAPI } from "@root/services/baseApi";
export const SanctionDetailsList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllSanctionDetailsListData: builder.query({
      query: ({ fosterChildId, params }: any) => ({
        url: `/foster-child/list-sanction-details/${fosterChildId}`,
        method: "GET",
        params,
      }),
      providesTags: ["SANCTION_DETAILS_LIST"],
    }),
    getSingleSanctionDetailsData: builder.query({
      query: ({ sanctionDetailsId }: any) => ({
        url: `/foster-child/get-sanction-details/${sanctionDetailsId}`,
        method: "GET",
        params: sanctionDetailsId,
      }),
    }),
    postSanctionDetailsData: builder.mutation({
      //check the str of body here
      query: (apiDataParameter: any) => ({
        url: `/foster-child/add-sanction-details`,
        method: "POST",
        params: apiDataParameter.queryParams,
        body: apiDataParameter.body,
      }),
      invalidatesTags: ["SANCTION_DETAILS_LIST"],
    }),
    patchSanctionDetailsData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `/foster-child/update-sanction-details/${apiDataParameter?.pathParams?.sanctionDetailsId}`,
        method: "PATCH",
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["SANCTION_DETAILS_LIST"],
    }),
    deleteSanctionDetailsData: builder.mutation({
      query: ({ id }: any) => ({
        url: `/foster-child/delete-sanction-details/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SANCTION_DETAILS_LIST"],
    }),
  }),
});
export const {
  useGetAllSanctionDetailsListDataQuery,
  //   useLazyGetAllEducationInfoListDataQuery,
  useGetSingleSanctionDetailsDataQuery,
  //   useLazyGetSingleEducationInfoDataQuery,
  usePostSanctionDetailsDataMutation,
  usePatchSanctionDetailsDataMutation,
    useDeleteSanctionDetailsDataMutation,
} = SanctionDetailsList;
