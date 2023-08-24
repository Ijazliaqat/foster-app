import { baseAPI } from "@root/services/baseApi";

const TAG = "VOCATIONAL-INFO";
const DOCTAG = "VOCATIONAL-INFO-DOCS";
export const VocationalInfoListApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Main Form
    vocationalInfoList: builder.query({
      //1
      query: (id) => ({
        url: `/vocational-info-list/info-list/${id}`,
        method: "GET",
      }),
      providesTags: [TAG],
      // transformResponse: (res) => {
      // return [...mockSafeCarePolicyList].sort((a, b) => 0.5 - Math.random());
      // },
    }),
    addVocationalInfo: builder.mutation({
      //2
      query: ({ body, id }) => ({
        url: `/vocational-info-list/add?fosterChildId=${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    editVocationalInfo: builder.mutation({
      //3
      query: (id) => ({
        url: `/vocational-info-list/info-list/${id}`,
        method: "PUT",
      }),
      invalidatesTags: [TAG],
    }),
    deleteVocationalInfo: builder.mutation({
      //4
      query: (id) => ({
        url: `/vocational-info-list/info-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    //--------------------------------------------------------------/Documents/----------------------------------------------------//

    vocationalInfoDocuments: builder.query({
      //5
      query: ({ params }) => ({
        url: `/vocational-info-list/all-documents/vocational-info-documents`,
        method: "GET",
        params,
      }),
      providesTags: [DOCTAG],
    }),
    addVocationalInfoDocument: builder.mutation({
      //6
      query: ({ id, body }) => ({
        url: `vocational-info-list/documents?fosterCarerId=${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: [DOCTAG],
    }),
    deleteVocationalInfoDocument: builder.mutation({
      //7
      query: (id) => ({
        url: `vocational-info-list/documents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [DOCTAG],
    }),
  }),
});

export const {
  useVocationalInfoListQuery, //1
  useAddVocationalInfoMutation, //2
  useDeleteVocationalInfoMutation, //3
  useEditVocationalInfoMutation, //4
  useVocationalInfoDocumentsQuery, //5
  useAddVocationalInfoDocumentMutation, //6
  useDeleteVocationalInfoDocumentMutation, //7
} = VocationalInfoListApi;
