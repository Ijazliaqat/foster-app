import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_INCIDENT";

export const ChildIncidentAPI: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getChildIncident: builder.query<
      GetChildIncidentsInfoListApiResponse,
      GetChildIncidentsInfoListApiArg
    >({
      query: (queryArg) => ({
        url: "/foster-child/childInfo/list-incident-info",
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
      providesTags: [TAG],
    }),

    postChildIncident: builder.mutation<
      PostChildIncidentsInfoApiResponse,
      PostChildIncidentsInfoApiArg
    >({
      query: (queryArg) => ({
        url: "/foster-child/childInfo/add-incident-info",
        method: "POST",
        body: queryArg.addIncidentsInfoRequestDto,
      }), 
      invalidatesTags: [TAG],
    }),

    patchChildIncident: builder.mutation<
      PatchChildIncidentsInfoByIdApiResponse,
      PatchChildIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/foster-child/childInfo/update-incident-info/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.addIncidentsInfoRequestDto,
      }),
      invalidatesTags: [TAG],
    }),

    getChildIncidentById: builder.query<
      GetChildIncidentsInfoByIdApiResponse,
      GetChildIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/foster-child/childInfo/get-incident-info/${queryArg.id}`,
      }),
      providesTags: [TAG],
    }),

    deleteChildIncident: builder.mutation<
      DeleteChildIncidentsInfoByIdApiResponse,
      DeleteChildIncidentsInfoByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/foster-child/childInfo/delete-incident-info/${queryArg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TAG],
    }),
  }),
});
export type GetChildIncidentsInfoListApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type GetChildIncidentsInfoListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type PostChildIncidentsInfoApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type PostChildIncidentsInfoApiArg = {
  addIncidentsInfoRequestDto: AddIncidentsInfoRequestDto;
};
export type PatchChildIncidentsInfoByIdApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type PatchChildIncidentsInfoByIdApiArg = {
  id: string;
  addIncidentsInfoRequestDto: AddIncidentsInfoRequestDto;
};
export type GetChildIncidentsInfoByIdApiResponse =
  /** status 201  */ AddIncidentsInfoResponseDto;
export type GetChildIncidentsInfoByIdApiArg = {
  id: string;
};
export type DeleteChildIncidentsInfoByIdApiResponse = unknown;
export type DeleteChildIncidentsInfoByIdApiArg = {
  id: string;
};

export type AddIncidentsInfoResponseDto = {
  data: object;
  message: string;
  errors: object;
};
export type AddIncidentsInfoRequestDto = {
  natureOfIncident: string;
  incidentDate: string;
  status: string;
};
export const {
  usePostChildIncidentMutation,
  useGetChildIncidentByIdQuery,
  useGetChildIncidentQuery,
  usePatchChildIncidentMutation,
  useDeleteChildIncidentMutation,
  useLazyGetChildIncidentByIdQuery,
} = ChildIncidentAPI;

// import { baseAPI } from "@root/services/baseApi";

// export const ChildIncidentAPI = baseAPI.injectEndpoints({
//   endpoints: (builder) => ({
//     //Get API of Incident
//     getChildIncident: builder.query<null, object>({
//       query: ({ params }: any) => ({
//         url: "/foster-child/childInfo/list-incident-info",
//         method: "GET",
//         params,
//       }),
//       providesTags: ["CHILD_INCIDENT"],
//     }),

//     // Get API By Id of Incident
//     getChildIncidentById: builder.query({
//       query: (id: any) => `/foster-child/childInfo/get-incident-info/${id}`,
//       providesTags: ["CHILD_INCIDENT"],
//     }),

//     // Post API of Incident
//     postChildIncident: builder.mutation({
//       query: (putDataParameter: any) => ({
//         url: "/foster-child/absenceInfo/add-absence-info",
//         method: "POST",
//         param: "",
//         body: putDataParameter,
//       }),
//       invalidatesTags: ["CHILD_INCIDENT"],
//     }),

//     // Patch API of Incident
//     patchChildIncident: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `/foster-child/childInfo/update-incident-info/${id}`,
//         method: "PATCH",
//         body: body,
//       }),
//       invalidatesTags: ["CHILD_INCIDENT"],
//     }),

//     // Delete API of Incident
//     deleteChildIncident: builder.mutation({
//       query: (id: any) => ({
//         url: `/foster-child/childInfo/delete-incident-info/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["CHILD_INCIDENT"],
//     }),
//   }),
// });

// export const {
//   usePostChildIncidentMutation,
//   useGetChildIncidentByIdQuery,
//   useGetChildIncidentQuery,
//   usePatchChildIncidentMutation,
//   useDeleteChildIncidentMutation,
//   useLazyGetChildIncidentByIdQuery,
// } = ChildIncidentAPI;
