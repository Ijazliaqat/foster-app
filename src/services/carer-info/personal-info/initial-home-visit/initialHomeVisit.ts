import { baseAPI, TAGS } from "@root/services/baseApi";

export const initialHomeVisitApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllInitialHomeVisitData: builder.query({
      query: (apiDataParameter: any) => ({
        url: "carer-Info/personal-info/initial-home-visit/get-all",
        method: "GET",
        params: apiDataParameter?.queryParams,
      }),
      providesTags: ["INITIAL_HOME_VISIT"],
    }),
  }),
});

export const { useGetAllInitialHomeVisitDataQuery } = initialHomeVisitApi;
