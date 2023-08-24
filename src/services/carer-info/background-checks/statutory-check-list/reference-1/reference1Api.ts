import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const referenceOneApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    referenceOneList: builder.query<null, object>({
      query: (payload: any) => ({
        url: `assessment-stage-one/reference-one-list/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["REFERENCE_ONE"],
    }),
    postReferenceOneList: builder.mutation({
      query: (payload: any) => ({
        url: `assessment-stage-one/add-reference-one/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["REFERENCE_ONE"],
    }),
    singleReferenceOneList: builder.query({
      query: (id: any) => `assessment-stage-one/get-reference-one/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["REFERENCE_ONE"],
    }),
    patchReferenceOneList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/update-reference-one/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["REFERENCE_ONE"],
    }),
    deleteReferenceOneList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/delete-reference-one/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REFERENCE_ONE"],
    }),
  }),
});
export const {
  useReferenceOneListQuery,
  usePostReferenceOneListMutation,
  useLazySingleReferenceOneListQuery,
  usePatchReferenceOneListMutation,
  useDeleteReferenceOneListMutation,
} = referenceOneApi;
