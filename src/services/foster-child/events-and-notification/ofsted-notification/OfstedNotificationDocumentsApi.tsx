import { baseAPI } from "@root/services/baseApi";

const TAG = "OFSTED_NOTIFICATION_DOCUMENTS";

export const OfstedNotificationDocuments = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getOfstedNotificationDocumentsList: builder.query({
      query: (payload: any) => ({
        url: `/events-and-notification/uploaded-documents-list/${payload.params.fosterChildId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    // GetOfstedNotificationDocumentsListQueryById: builder.query({
    //   query: (payload: any) => ({
    //     url: `/events-and-notification/ofsted-notification/${payload.params.id}`,
    //     method: "GET",
    //     params: payload.params,
    //   }),
    // }),
    deleteOfstedNotificationDocumentsList: builder.mutation({
      query: (payload: any) => ({
        url: `/events-and-notification/uploaded-document/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createOfstedNotificationDocumentsList: builder.mutation({
      query: (payload: any) => ({
        url: `/events-and-notification/uploaded-documents/upload-all/${payload.params.fosterChildId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    // updateOfstedNotificationDocumentsList: builder.mutation({
    //   query: (payload: any) => ({
    //     url: `/events-and-notification/ofsted-notification/${payload?.params.id}`,
    //     method: "PATCH",
    //     body: payload.body,
    //   }),
    //   invalidatesTags: [TAG],
    // }),
  }),
});
export const {
  useCreateOfstedNotificationDocumentsListMutation,
  useDeleteOfstedNotificationDocumentsListMutation,
  useGetOfstedNotificationDocumentsListQuery,
  useLazyGetOfstedNotificationDocumentsListQuery,
} = OfstedNotificationDocuments;
