import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const DiaryRecordingsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    recordingList: builder.query<null, object>({
      query: (search: any) => ({
        url: `child-day-log/diary-recording/List/${search?.params?.fosterChildId}`,
        method: "GET",
        params: search.params,
      }),
      providesTags: ["DIARY_RECORDINGS_LIST"],
    }),
    postDiaryRecordingList: builder.mutation({
      query: (payload: any) => ({
        url: `child-day-log/diary-recording`,
        method: "POST",
        params: payload.params,
        body: payload.body,
      }),
      invalidatesTags: ["DIARY_RECORDINGS_LIST"],
    }),
    singleRecordingList: builder.query({
      query: (id: any) => `child-day-log/diary-recording/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["DIARY_RECORDINGS_LIST"],
    }),
    patchRecordingList: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `child-day-log/diary-recording/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["DIARY_RECORDINGS_LIST"],
    }),
    deleteRecordingsList: builder.mutation({
      query: (id: any) => ({
        url: `child-day-log/diary-recording/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DIARY_RECORDINGS_LIST"],
    }),
  }),
});
export const {
  useRecordingListQuery,
  useLazyRecordingListQuery,
  usePostDiaryRecordingListMutation,
  usePatchRecordingListMutation,
  useDeleteRecordingsListMutation,
  useLazySingleRecordingListQuery,
} = DiaryRecordingsApi;
