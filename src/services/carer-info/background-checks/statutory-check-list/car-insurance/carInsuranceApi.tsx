import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const carInsuranceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    carInsuranceList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/statutory-checks-list/car-insurance/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["CAR_INSURANCE"],
    }),
    postCarInsurance: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/statutory-checks-list/car-insurance",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CAR_INSURANCE"],
    }),
    singleCarInsuranceList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/car-insurance/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CAR_INSURANCE"],
    }),
    patchCarInsurance: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/statutory-checks-list/car-insurance/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["CAR_INSURANCE"],
    }),
    deleteCarInsuranceList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/car-insurance/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CAR_INSURANCE"],
    }),
  }),
});
export const {
  useCarInsuranceListQuery,
  usePostCarInsuranceMutation,
  useLazySingleCarInsuranceListQuery,
  usePatchCarInsuranceMutation,
  useDeleteCarInsuranceListMutation,
} = carInsuranceApi;
