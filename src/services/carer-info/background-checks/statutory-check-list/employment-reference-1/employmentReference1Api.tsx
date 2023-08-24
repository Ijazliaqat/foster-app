import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const employmentReferenceOneApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    employmentOneList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/statutory-checks-list/emp-ref-1/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["EMPLOYMENT_REFERENCE1"],
    }),
    postEmploymentOneList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/statutory-checks-list/emp-ref-1",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE1"],
    }),
    singleEmploymentOneList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/emp-ref-1/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["EMPLOYMENT_REFERENCE1"],
    }),
    patchEmploymentList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/statutory-checks-list/emp-ref-1/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE1"],
    }),
    deleteEmploymentOneList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/emp-ref-1/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE1"],
    }),
  }),
});
export const {
  useEmploymentOneListQuery,
  usePostEmploymentOneListMutation,
  useLazySingleEmploymentOneListQuery,
  usePatchEmploymentListMutation,
  useDeleteEmploymentOneListMutation,
} = employmentReferenceOneApi;
