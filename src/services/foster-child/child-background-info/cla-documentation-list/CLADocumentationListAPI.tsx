import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const claDocumentationApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Get API of CLA Documentation
    claDocumentationList: builder.query<null, object>({
      query: ({params}: any) => ({
        url: "/foster-child/cla/list",
        method: "GET",
        params,
      }),
      providesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    // Get API By Id of CLA Documentation
    getClaDocumentationById: builder.query({
      query: (id: any) => `/foster-child/cla/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    // Post PEP API of CLA Documentation
    postPepClaDocumentationList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/cla-pep",
        method: "POST",
        body: putDataParameter,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    // Post EHCP API of CLA Documentation
    postEhcpClaDocumentationList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/cla-ehcp",
        method: "POST",
        body: putDataParameter,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    //Patch PEP API of CLA Documentation
    patchPepClaDocumentationList: builder.mutation({
      query: ({ id, body }) => ({
        url: `/foster-child/cla-pep/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    //Patch EHCP API of CLA Documentation
    patchEHCPClaDocumentationList: builder.mutation({
      query: ({ id, body }) => ({
        url: `/foster-child/cla-ehcp/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
    // Delete API of CLA Documentation
    deleteClaDocumentationList: builder.mutation({
      query: (id: any) => ({
        url: `foster-child/cla/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CLA_DOCUMENTATION_LIST"],
    }),
  }),
});

export const {
  useClaDocumentationListQuery,
  useGetClaDocumentationByIdQuery,
  usePostPepClaDocumentationListMutation,
  usePostEhcpClaDocumentationListMutation,
  usePatchPepClaDocumentationListMutation,
  usePatchEHCPClaDocumentationListMutation,
  useDeleteClaDocumentationListMutation,
} = claDocumentationApi;
