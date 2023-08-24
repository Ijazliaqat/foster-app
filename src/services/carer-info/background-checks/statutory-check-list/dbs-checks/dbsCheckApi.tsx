import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const dbsCheckApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    dbsCheckList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/statutory-checks-list/dbs-check/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["DBS_CHECK"],
    }),
    postDbsCheckList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/statutory-checks-list/dbs-check",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["DBS_CHECK"],
    }),
    singleDbsCheckList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/dbs-check/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["DBS_CHECK"],
    }),
    patchDbsCheckList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/statutory-checks-list/dbs-check/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["DBS_CHECK"],
    }),
    deleteDbsCheckList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/dbs-check/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DBS_CHECK"],
    }),
  }),
});
export const {
  useDbsCheckListQuery,
  usePostDbsCheckListMutation,
  useLazySingleDbsCheckListQuery,
  usePatchDbsCheckListMutation,
  useDeleteDbsCheckListMutation,
} = dbsCheckApi;
