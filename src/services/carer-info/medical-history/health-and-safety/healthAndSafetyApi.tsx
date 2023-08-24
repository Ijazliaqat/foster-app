import { baseAPI } from "@root/services/baseApi";

export const healthAndSafetyApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getHealthAndSafetyListData: builder.query({
      query: () => ({
        url: `carer-Info/list-health-and-safety`,
      }),
      providesTags: ["HEALTH_AND_SAFETY"],
    }),
    deleteHealthAndSafetyListData: builder.mutation({
      query: (id: any) => ({
        url: `carer-Info/delete-health-and-safety/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
    houseHoldConditionAPost: builder.mutation({
      query: (payload: any) => ({
        url: `carer-Info/add-health-and-safety`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
    healthAndSafetyDataPatch: builder.mutation({
      query: ({ healthAndSafetyId, payload }: any) => ({
        url: `carer-Info/update-health-and-safety/${healthAndSafetyId}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["HEALTH_AND_SAFETY"],
    }),
    getHealthAndSafetyDataById: builder.query({
      query: (healthAndSafetyId: any) => ({
        url: `carer-Info/get-health-and-safety/${healthAndSafetyId}`,
      }),
      providesTags: ["HEALTH_AND_SAFETY"],
    }),
  }),
});
export const {
  useGetHealthAndSafetyListDataQuery,
  useDeleteHealthAndSafetyListDataMutation,
  useHouseHoldConditionAPostMutation,
  useHealthAndSafetyDataPatchMutation,
  useGetHealthAndSafetyDataByIdQuery,
} = healthAndSafetyApi;
