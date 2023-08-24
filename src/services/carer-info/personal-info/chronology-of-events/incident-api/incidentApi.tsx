import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const incidentApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    incidentList: builder.query({
      query: (payload: any) => ({
        url: `chronology-events/incident/List/${payload.params.fosterCarerId}`,
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["INCIDENT_LIST"],
    }),
    incidentAddPost: builder.mutation({
      query: (payload: any) => ({
        url: `chronology-events/incidents/${payload.params.fosterCarerId}`,
        method: "POST",
        body: payload.body,
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
    incidentById: builder.query({
      query: (id: any) => `/chronology-events/incident/${id}`,
      transformResponse: (response: any) => {
        return response;
      },
      providesTags: ["INCIDENT_LIST"],
    }),
    deleteIncidentById: builder.mutation({
      query: (id: any) => ({
        url: `/chronology-events/incident/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
    patchIncidentById: builder.mutation({
      query: ({ id, ...formData }: any) => ({
        url: `chronology-events/incident/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["INCIDENT_LIST"],
    }),
  }),
});

export const {
  useIncidentListQuery,
  useIncidentAddPostMutation,
  useLazyIncidentByIdQuery,
  usePatchIncidentByIdMutation,
  useDeleteIncidentByIdMutation,
} = incidentApi;
