import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import { baseAPI } from "./baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStickyNotes: builder.query<null, void>({
      query: () => "sticky-notes",
      providesTags: ["STICKY_NOTES"],
    }),
    getStickyNotesByDate: builder.query({
      query: ({ date }: any) => `sticky-notes/date/by-date?date=${date}`,
      transformResponse: (response: any) => {
        return response.data;
      },
      providesTags: ["STICKY_NOTES"],
    }),
    stickyNotes: builder.mutation({
      query: (notes: any) => ({
        url: "sticky-notes",
        method: "POST",
        body: notes,
      }),
      invalidatesTags: ["STICKY_NOTES"],
    }),
    editStickyNotes: builder.mutation({
      query: ({ id, payload }) => ({
        url: `sticky-notes/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["STICKY_NOTES"],
    }),
    deleteStickyNotes: builder.mutation({
      query: (id: any) => ({
        url: `sticky-notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["STICKY_NOTES"],
    }),
  }),
});

export const {
  useStickyNotesMutation,
  useGetStickyNotesQuery,
  useGetStickyNotesByDateQuery,
  useLazyGetStickyNotesByDateQuery,
  useEditStickyNotesMutation,
  useDeleteStickyNotesMutation,
} = userAPI;
