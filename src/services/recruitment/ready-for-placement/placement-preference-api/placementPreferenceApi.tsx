import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const placementPreferenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postPlacementPreferenceList: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/allegation/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["POST_PLACEMENT_REFERENCES"],
    }),
  }),
});
export const { usePostPlacementPreferenceListMutation } =
  placementPreferenceApi;
