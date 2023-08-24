import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const employmentReferenceTwoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    empReferenceTwoList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/statutory-checks-list/emp-ref-2/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["EMPLOYMENT_REFERENCE2"],
    }),
    postEmpReferenceTwoList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/statutory-checks-list/emp-ref-2",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE2"],
    }),
    singleEmpReferenceTwoList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/emp-ref-2/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["EMPLOYMENT_REFERENCE2"],
    }),
    patchEmpReferenceTwoList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/statutory-checks-list/emp-ref-2/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE2"],
    }),
    deleteEmpReferenceTwoList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/emp-ref-2/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYMENT_REFERENCE2"],
    }),
  }),
});
export const {
  useEmpReferenceTwoListQuery,
  usePostEmpReferenceTwoListMutation,
  useLazySingleEmpReferenceTwoListQuery,
  usePatchEmpReferenceTwoListMutation,
  useDeleteEmpReferenceTwoListMutation,
} = employmentReferenceTwoApi;
