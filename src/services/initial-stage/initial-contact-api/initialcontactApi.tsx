import { baseAPI, TAGS } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const InitialContactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getInitialContactData: builder.query<null, void>({
      query: (userId: any) =>
        `enquiry-stage/initial-contact/${userId}`,
        transformResponse: (response: any) => {
          parseDatesToTimeStampByKey(response?.data?.initalContact);
          return response;
        },
      providesTags: ["INITIAL_CONTACT"],
    }),
    patchInitialContactData: builder.mutation({
      query: ({userId, ...formData}: any) => ({
        url: `enquiry-stage/initial-contact/${userId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["INITIAL_CONTACT"],
    }),
  }),
});

export const { useLazyGetInitialContactDataQuery, usePatchInitialContactDataMutation } =
  InitialContactApi;
