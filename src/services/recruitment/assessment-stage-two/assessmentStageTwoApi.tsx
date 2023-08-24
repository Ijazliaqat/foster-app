import { baseAPI } from "@root/services/baseApi";

const assessmentStageTwoApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStageTwoStatus: builder.query({
      query: (id: string) => `/assessment-stage-two/${id}/status`,
    }),
    patchStageTwoStatus: builder.mutation({
      query: ({ userId, body }: any) => ({
        url: `assessment-stage-two/${userId}/status?stageTwo=${body?.point}&status=${body?.status}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const { useGetStageTwoStatusQuery, usePatchStageTwoStatusMutation } =
  assessmentStageTwoApi;
