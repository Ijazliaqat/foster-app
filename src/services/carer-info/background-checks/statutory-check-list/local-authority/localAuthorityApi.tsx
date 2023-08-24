import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const localAuthorityApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    localAuthorityList: builder.query<null, object>({
      query: (search: any) => ({
        url: "assessment-stage-one/statutory-checks-list/local-authority-ssd/List",
        method: "GET",
        params: search,
      }),
      providesTags: ["LOCAL_AUTHORITY"],
    }),
    postLocalAuthorityList: builder.mutation({
      query: (formData: any) => ({
        url: "assessment-stage-one/statutory-checks-list/local-authority-ssd",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["LOCAL_AUTHORITY"],
    }),
    singleLocalAuthorityList: builder.query({
      query: (id: any) =>
        `assessment-stage-one/statutory-checks-list/local-authority-ssd/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["LOCAL_AUTHORITY"],
    }),
    patchLocalAuthorityList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `assessment-stage-one/statutory-checks-list/local-authority-ssd/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["LOCAL_AUTHORITY"],
    }),
    deleteLocalAuthorityList: builder.mutation({
      query: (id: any) => ({
        url: `assessment-stage-one/statutory-checks-list/local-authority-ssd/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LOCAL_AUTHORITY"],
    }),
  }),
});
export const {
  useLocalAuthorityListQuery,
  usePostLocalAuthorityListMutation,
  useLazySingleLocalAuthorityListQuery,
  usePatchLocalAuthorityListMutation,
  useDeleteLocalAuthorityListMutation,
} = localAuthorityApi;
