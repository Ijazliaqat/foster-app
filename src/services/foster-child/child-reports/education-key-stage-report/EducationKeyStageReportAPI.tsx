import { baseAPI } from "@root/services/baseApi";

const EducationKeyStageAPI = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    getEducationKeyStageReportList: Builder.query({
      query: ({params,fosterChildId}: any) => ({
        url: `/foster-child/list-education-key-stage-reports/${fosterChildId}`,
        method: "GET",
        params: params,
      }),
      providesTags: ["EDUCATION-KEY-STAGE-REPORT"],
    }),
  }),
});
export const { useGetEducationKeyStageReportListQuery } = EducationKeyStageAPI;
