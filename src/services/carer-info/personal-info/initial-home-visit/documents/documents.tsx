import { baseAPI} from "@root/services/baseApi";

export const initialHomeDocumentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialHomeDocumentData: builder.query({
      query: (dataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/all-documents",
        method: "GET",
        params: dataParameter.params,
      }),
      providesTags: ["INITIAL_HOME_VISIT_DOCUMENTS"],
    }),
    getInitialHomeDocumentDataById: builder.query({
      query: (params: any) =>
        `carer-Info/personal-info/initial-home-visit/documents/${params.id}`,
    }),
    deleteInitialHomeDocumentDataById: builder.mutation({
      query: (apiParameter: any) => ({
        url: `carer-Info/personal-info/initial-home-visit/documents/${apiParameter?.params?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INITIAL_HOME_VISIT_DOCUMENTS"],
    }),
    postInitialHomeDocumentData: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/documents",
        method: "POST",
        body: putDataParameter.body,
        params: putDataParameter.params,
      }),
      invalidatesTags: ["INITIAL_HOME_VISIT_DOCUMENTS"],
    }),
  }),
});

export const {
  useDeleteInitialHomeDocumentDataByIdMutation,
  useGetInitialHomeDocumentDataByIdQuery,
  useGetInitialHomeDocumentDataQuery,
  usePostInitialHomeDocumentDataMutation,
} = initialHomeDocumentApi;
