import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const referenceTwoApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    referenceTwoList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `assessment-stage-one/reference-two-list/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["REFERENCE_TWO"],
    }),
    postReferenceTwoList: builder.mutation({
      query: (payload: any) => ({
        url: `assessment-stage-one/add-reference-two/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["REFERENCE_TWO"],
    }),
    singleReferenceTwoList: builder.query({
      query: (id: any) => `assessment-stage-one/get-reference-two/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["REFERENCE_TWO"],
    }),
    patchReferenceTwoList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-reference-two/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["REFERENCE_TWO"],
    }),
    deleteReferenceTwoList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-reference-two/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REFERENCE_TWO"],
    }),
  }),
});
export const {
  useReferenceTwoListQuery,
  usePostReferenceTwoListMutation,
  useLazySingleReferenceTwoListQuery,
  usePatchReferenceTwoListMutation,
  useDeleteReferenceTwoListMutation,
} = referenceTwoApi;
