import { baseAPI } from "@root/services/baseApi";
const IndependencePacks = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getIndependencePacks: builder.query({
      query: ({ id, params }: any) => ({
        url: `/education-records/independence-pack?fosterChildId=${id}`,
        method: "GET",
        params,
      }),
      providesTags: ["INDEPENDENCE_PACKS_LIST"],
    }),
    getIndependencePack: builder.query({
      query: ({ id }: any) => ({
        url: `/education-records/independence-pack/${id}`,
        method: "GET",
      }),
      providesTags: ["INDEPENDENCE_PACK"],
    }),
    postIndependencePacks: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/independence-pack?fosterChildId=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["INDEPENDENCE_PACKS_LIST"],
    }),
    updateIndependencePack: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/education-records/independence-pack/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["INDEPENDENCE_PACKS_LIST", "INDEPENDENCE_PACK"],
    }),
    deleteIndependencePack: builder.mutation({
      query: (id: any) => ({
        url: `/education-records/independence-pack/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INDEPENDENCE_PACKS_LIST"],
    }),
    postUploadEvidence: builder.mutation({
      query: ({ formData }: any) => ({
        url: `/education-records/independence-pack/upload-evidence`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  usePostUploadEvidenceMutation,
  useGetIndependencePacksQuery,
  useGetIndependencePackQuery,
  usePostIndependencePacksMutation,
  useUpdateIndependencePackMutation,
  useDeleteIndependencePackMutation,
} = IndependencePacks;
