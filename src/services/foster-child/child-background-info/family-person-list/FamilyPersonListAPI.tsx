import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const FamilyPersonListAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    //Get API of Family Person List
    getFamilyPersonList: builder.query<null, object>({
      query: ({params}: any) => ({
        url: "/foster-child/child-info/family-org-involved/list-fc-family-org-involved",
        method: "GET",
        params,
      }),
      providesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Get API By Id of Family Person
    getFamilyPersonListById: builder.query({
      query: (id: any) => `/foster-child/child-info/family-org-involved/get-fc-family-org-involved/${id}`,
      transformResponse: (response: any) => {
        parseDatesToTimeStampByKey(response.data);
        return response;
      },
      providesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Post API of Family Person List
    postFamilyPersonList: builder.mutation({
      query: (putDataParameter: any) => ({
        url: "/foster-child/child-info/family-org-involved/add-fc-family-org-involved",
        method: "POST",
        param: "63e5eefe677b0d581e40682a",
        body: putDataParameter,
      }),
      invalidatesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Patch API of Family Person List
    patchFamilyPersonList: builder.mutation({
      query: ({ id, body }) => ({
        url: `/foster-child/child-info/family-org-involved/edit-fc-family-org-involved/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["FAMILY_PERSON_LIST"],
    }),

    // Delete API of Family Person List
    deleteFamilyPersonList: builder.mutation({
      query: (id: any) => ({
        url: `foster-child/child-info/family-org-involved/delete-fc-family-org-involved/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FAMILY_PERSON_LIST"],
    }),
  }),
});

export const {
  useGetFamilyPersonListQuery,
  useGetFamilyPersonListByIdQuery,
  usePostFamilyPersonListMutation,
  usePatchFamilyPersonListMutation,
  useDeleteFamilyPersonListMutation,
} = FamilyPersonListAPI;
