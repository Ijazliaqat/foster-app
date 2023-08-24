import { baseAPI } from "@root/services/baseApi";

const TAG = "hospitalization";

export const hospitalisationInfoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHospitalisationInfoList: builder.query({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/List`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetHospitalisationInfoListQueryById: builder.query({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteHospitalisationInfoList: builder.mutation({
      query: (id: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createhospitalisationinfoList: builder.mutation({
      query: (payload: any) => ({
        url: "/child-chronology-of-events/hospitalisation-info",
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateHospitalisationinfoList: builder.mutation({
      query: (payload: any) => ({
        url: `/child-chronology-of-events/hospitalisation-info/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export const {
  useGetHospitalisationInfoListQuery,
  useDeleteHospitalisationInfoListMutation,
  useCreatehospitalisationinfoListMutation,
  useLazyGetHospitalisationInfoListQuery,
  useUpdateHospitalisationinfoListMutation,
  useLazyGetHospitalisationInfoListQueryByIdQuery,
} = hospitalisationInfoApi;
