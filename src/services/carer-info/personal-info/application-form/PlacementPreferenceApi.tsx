import { baseAPI, TAGS } from "@root/services/baseApi";

export const placementPreferenceApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    updatePlacementPreference: builder.mutation({
      query: ({ id, formData }: any) => ({
        url: `/application-form/placement-preference?applicationFormId=${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["GET_BASICINFORMATION"],
    }),
  }),
});

export const { useUpdatePlacementPreferenceMutation } = placementPreferenceApi;
