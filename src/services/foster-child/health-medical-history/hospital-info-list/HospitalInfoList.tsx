import { baseAPI } from "@root/services/baseApi";

const HospitalInfoList = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    getHospitalInfoList: Builder.query({
      query: (payload: any) => ({
        url: "/hospital-info-list/get-all/hospital-info",
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["hospital-info-list"],
    }),
    getHospitalInfoById: Builder.query({
      query: (payload: any) => ({
        url: `/hospital-info-list/${payload.id}`,
        method: "Get",
        params: payload.params,
      }),
    }),
    createHospitalInfo: Builder.mutation({
      query: (payload: any) => ({
        url: "/hospital-info-list",
        method: "Post",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["hospital-info-list"],
    }),
    updateHospitalInfo: Builder.mutation({
      query: (payload: any) => ({
        url: `/hospital-info-list/${payload.id}`,
        method: "Put",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["hospital-info-list"],
    }),
    deleteHospitalInfo: Builder.mutation({
      query: (payload: any) => ({
        url: `/hospital-info-list/${payload.id}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["hospital-info-list"],
    }),
  }),
});

export const {
  useGetHospitalInfoListQuery,
  useGetHospitalInfoByIdQuery,
  useCreateHospitalInfoMutation,
  useUpdateHospitalInfoMutation,
  useDeleteHospitalInfoMutation,
  useLazyGetHospitalInfoByIdQuery,
} = HospitalInfoList;
