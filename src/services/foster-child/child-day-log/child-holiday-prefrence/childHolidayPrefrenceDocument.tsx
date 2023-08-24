import { baseAPI } from "@root/services/baseApi";

const TAG = "Child-holiday-prefrence-document";

export const ChildHolidayPrefrenceDocument = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildHolidayPrefrenceDocument: builder.query({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences-documents/List/${payload.childHolidayPrefrencesId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: [TAG],
    }),
    GetChildHolidayPrefrenceDocumentQueryById: builder.query({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences-documents/${payload.params.id}`,
        method: "GET",
        params: payload.params,
      }),
    }),
    deleteChildHolidayPrefrenceDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences-documents/${payload.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
    createChildHolidayPrefrenceDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences-documents/${payload.params.id}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
    updateChildHolidayPrefrenceDocument: builder.mutation({
      query: (payload: any) => ({
        url: `/child-day-log/child-holiday-prefrences-document/${payload?.params.id}`,
        method: "PATCH",
        body: payload.body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useCreateChildHolidayPrefrenceDocumentMutation,
  useDeleteChildHolidayPrefrenceDocumentMutation,
  useGetChildHolidayPrefrenceDocumentQuery,
  useGetChildHolidayPrefrenceDocumentQueryByIdQuery,
  useLazyGetChildHolidayPrefrenceDocumentQuery,
  useLazyGetChildHolidayPrefrenceDocumentQueryByIdQuery,
  useUpdateChildHolidayPrefrenceDocumentMutation,
} = ChildHolidayPrefrenceDocument;
