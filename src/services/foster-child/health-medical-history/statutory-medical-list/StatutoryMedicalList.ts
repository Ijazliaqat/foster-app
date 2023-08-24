import { baseAPI } from "@root/services/baseApi";

export const statutoryMedicalListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllStatutoryMedicalListData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "foster-child/statutory-medical/all",
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
      providesTags: (result) =>
        !!result?.data?.statutory_medical?.length
          ? [
              ...result?.data?.statutory_medical?.map(({ id }: any) => {
                return { type: "STATUTORY_MEDICAL_LIST" as const, id };
              }),
              "STATUTORY_MEDICAL_LIST",
            ]
          : ["STATUTORY_MEDICAL_LIST"],
    }),
    getSingleStatutoryMedicalTypeData: builder.query({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "GET",
        params: apiDataParameter.queryParams,
      }),
    }),
    postStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: "foster-child/statutory-medical",
        method: "POST",
        params: apiDataParameter?.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
    patchStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "PATCH",
        params: apiDataParameter.queryParams,
        body: apiDataParameter?.body,
      }),
      invalidatesTags: ["STATUTORY_MEDICAL_LIST"],
    }),
    deleteStatutoryMedicalTypeData: builder.mutation({
      query: (apiDataParameter: any) => ({
        url: `foster-child/statutory-medical/${apiDataParameter?.pathParams?.id}`,
        method: "DELETE",
        params: apiDataParameter?.params,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "STATUTORY_MEDICAL_LIST", id: arg?.pathParams?.id },
      ],
    }),
  }),
});

export const {
  useGetAllStatutoryMedicalListDataQuery,
  useLazyGetAllStatutoryMedicalListDataQuery,
  useLazyGetSingleStatutoryMedicalTypeDataQuery,
  useGetSingleStatutoryMedicalTypeDataQuery,
  useDeleteStatutoryMedicalTypeDataMutation,
  usePatchStatutoryMedicalTypeDataMutation,
  usePostStatutoryMedicalTypeDataMutation,
} = statutoryMedicalListApi;
