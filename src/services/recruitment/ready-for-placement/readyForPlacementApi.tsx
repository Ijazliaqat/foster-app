import { baseAPI } from "@root/services/baseApi";

const readyForPlacementApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getReadyForPlacementStatus: builder.query({
      query: (id: string) => `ready-for-placement/${id}/status`,
    }),
    patchReadyForPlacementStatus: builder.mutation({
      query: ({ userId, body }: any) => ({
        url: `ready-for-placement/${userId}/status?placementReady=${body?.point}&status=${body?.status}`,
        method: "PATCH",
      }),
    }),
  }),
});
export const {
  useGetReadyForPlacementStatusQuery,
  usePatchReadyForPlacementStatusMutation,
} = readyForPlacementApi;
