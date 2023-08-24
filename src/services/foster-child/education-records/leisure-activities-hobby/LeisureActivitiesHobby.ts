import { baseAPI } from "@root/services/baseApi";
const LeisureActivitiesApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLeisureActivitiesList: builder.query({
      query: ({ id, params }: any) => ({
        url: `/education-records/leisure-activity/foster-child/${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["LEISURE_ACTIVITY_LIST"],
    }),
    getLeisureActivityDetail: builder.query({
      query: ({ id }: any) => `/education-records/leisure-activity/${id}`,
      providesTags: ["LEISURE_ACTIVITY_DETAIL"],
    }),
    updateLeisureActivity: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/leisure-activity/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_LIST", "LEISURE_ACTIVITY_DETAIL"],
    }),
    postLeisureActivity: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/leisure-activity/${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_LIST"],
    }),
    deleteLeisureActivity: builder.mutation({
      query: (id: any) => ({
        url: `/education-records/leisure-activity/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LEISURE_ACTIVITY_LIST"],
    }),
  }),
});

export const {
  useGetLeisureActivitiesListQuery,
  useGetLeisureActivityDetailQuery,
  useUpdateLeisureActivityMutation,
  usePostLeisureActivityMutation,
  useDeleteLeisureActivityMutation,
} = LeisureActivitiesApi;
