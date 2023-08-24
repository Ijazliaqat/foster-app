import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const referenceThreeApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    referenceThreeList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `assessment-stage-one/reference-three-list/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["REFERENCE_THREE"],
    }),
    postReferenceThreeList: builder.mutation({
      query: (payload: any) => ({
        url: `assessment-stage-one/add-reference-three/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
    singleReferenceThreeList: builder.query({
      query: (id: any) => `assessment-stage-one/get-reference-three/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["REFERENCE_THREE"],
    }),
    patchReferenceThreeList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-reference-three/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
    deleteReferenceThreeList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-reference-three/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REFERENCE_THREE"],
    }),
  }),
});
export const {
  useReferenceThreeListQuery,
  usePostReferenceThreeListMutation,
  useLazySingleReferenceThreeListQuery,
  usePatchReferenceThreeListMutation,
  useDeleteReferenceThreeListMutation,
} = referenceThreeApi;
