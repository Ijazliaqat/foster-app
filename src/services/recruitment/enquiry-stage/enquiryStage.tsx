import { baseAPI } from "@root/services/baseApi";

export const enquiryStageAllApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getEnquiryStageStatus: builder.query({
      query: (id: string) => `/enquiry-stage/enquiry-stage/${id}`,
    }),
    patchEnquiryStageStatus: builder.mutation({
      query: ({ userId, body }: any) => ({
        url: `enquiry-stage/enquiry-stage/${userId}?enquiryStage=${body?.point}&status=${body?.status}`,
        method: "PATCH",
      }),
    }),
    patchSocialWorkerInfo: builder.mutation({
      query: ({ data, userId }: any) => ({
        url: `/enquiry-stage/social-Worker-info/${userId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    getSocialWorkerInfo: builder.query({
      query: (userId: any) => ({
        url: `/enquiry-stage/social-Worker-info/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetEnquiryStageStatusQuery,
  usePatchEnquiryStageStatusMutation,
  usePatchSocialWorkerInfoMutation,
  useGetSocialWorkerInfoQuery
} = enquiryStageAllApi;
