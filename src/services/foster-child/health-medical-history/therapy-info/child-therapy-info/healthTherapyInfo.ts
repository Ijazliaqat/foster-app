import { baseAPI } from "@root/services/baseApi";

export const healthDetailsInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllTherapyDetailsInfoData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/therapy-info",
        method: "GET",
        params: apiDataParameter.params,
      }),
      //   providesTags: ["INITIAL_HOME_VISIT"],
    }),
    getSingleTherapyDetailsInfoData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/therapy-info/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter?.params,
      }),
      //   providesTags: ["INITIAL_HOME_VISIT"],
    }),
    postTherapyDetailsInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "foster-child/therapy-info",
        method: "POST",
        params: apiDataParameter.params,
        body: apiDataParameter.body,
      }),
      // invalidatesTags: ["GP_DETAILS_INFO"],
    }),
    patchTherapyDetailsInfoData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/therapy-info/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter?.params,
        body: apiDataParameter?.body,
      }),
      // invalidatesTags: ["GP_DETAILS_INFO"],
    }),
  }),
});

export const {
  useGetAllTherapyDetailsInfoDataQuery,
  useLazyGetSingleTherapyDetailsInfoDataQuery,
  useGetSingleTherapyDetailsInfoDataQuery,
  usePatchTherapyDetailsInfoDataMutation,
  usePostTherapyDetailsInfoDataMutation,
} = healthDetailsInfoApi;
