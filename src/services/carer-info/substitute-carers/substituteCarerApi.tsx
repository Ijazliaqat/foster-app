import { baseAPI, TAGS } from "@root/services/baseApi";

const TAG = "SUBSTITUTE_CARER";
const DOCTAG = "SUBSTITUTE_CARER_DOCUMENTS";

export const substituteCarerApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSelectedSubstituteCarer: builder.query({
      query: (params) => ({
        url: "/carer-Info/substitute-cares/list-carer", // BC, SC,RC
        params,
      }),
      providesTags: [TAG],
    }),
    getSubstituteCarerById: builder.query({
      query: (carerId) => ({
        url: `/carer-Info/carer-info/substitute-cares/get-carer/${carerId}`, // BC, SC,RC
      }),
    }),
    postSubstituteCarer: builder.mutation({
      query: (body) => ({
        url: "/carer-Info/carer-info/substitute-cares/add-carer",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    editSubstituteCarer: builder.mutation({
      query: ({ body, id }) => ({
        url: `/carer-Info/carer-info/substitute-cares/update-carer/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteSubstituteCarer: builder.mutation({
      query: (id) => ({
        url: `/carer-Info/carer-info/substitute-cares/delete-carer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    // Documents
    getSubstituteCarerDocs: builder.query({
      query: (recordId) => ({
        url: `/foster-child/child-carer-info/document/list/${recordId}`,
      }),
      providesTags: [DOCTAG],
    }),
    postSubstituteCarerDocs: builder.mutation({
      query: ({ body, recordId }) => ({
        url: `/foster-child/add-child-carer-info/document/${recordId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [DOCTAG],
    }),
    deleteSubstituteCarerDoc: builder.mutation({
      query: (id) => ({
        url: `/foster-child/child-Carer-info/document/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [DOCTAG],
    }),
  }),
});

export const {
  useGetSelectedSubstituteCarerQuery,
  usePostSubstituteCarerMutation,
  useGetSubstituteCarerByIdQuery,
  useLazyGetSubstituteCarerByIdQuery,
  useDeleteSubstituteCarerMutation,
  useEditSubstituteCarerMutation,
  //Documents
  useGetSubstituteCarerDocsQuery,
  usePostSubstituteCarerDocsMutation,
  useDeleteSubstituteCarerDocMutation,
} = substituteCarerApi;
