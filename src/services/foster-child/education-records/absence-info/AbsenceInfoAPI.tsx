import { baseAPI } from "@root/services/baseApi";

export const AbsenceInfoAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Absence Info
    getAbsenceInfo: builder.query<null, object>({
      query: ({ params }: any) => ({
        url: "/foster-child/absenceInfo/list-absence-info",
        method: "GET",
        params,
      }),
      providesTags: ["ABSENCE_INFO"],
    }),

    // Get API By Id of Absence Info
    getAbsenceInfoById: builder.query({
      query: (id: any) => `/foster-child/absenceInfo/get-absence-info/${id}`,
      providesTags: ["ABSENCE_INFO"],
    }),

    // Post API of Absence Info
    postAbsenceInfo: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/absenceInfo/add-absence-info",
        method: "POST",
        param: "",
        body: putDataParameter,
      }),
      invalidatesTags: ["ABSENCE_INFO"],
    }),

    // Patch API of Absence Info
    patchAbsenceInfo: builder.mutation({
      query: ({ id, body }) => ({
        url: `/foster-child/absenceInfo/update-absence-info/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["ABSENCE_INFO"],
    }),

    // Delete API of Absence Info
    deleteAbsenceInfo: builder.mutation({
      query: (id: any) => ({
        url: `/foster-child/absenceInfo/delete-absence-info/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ABSENCE_INFO"],
    }),
  }),
});

export const {
  useGetAbsenceInfoQuery,
  useGetAbsenceInfoByIdQuery,
  usePostAbsenceInfoMutation,
  usePatchAbsenceInfoMutation,
  useDeleteAbsenceInfoMutation,
} = AbsenceInfoAPI;
