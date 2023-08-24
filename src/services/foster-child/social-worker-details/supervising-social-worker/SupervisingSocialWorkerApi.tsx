import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "SUPERVISING_CARER_FAMILY_NETWORK";

export const SupervisingcontactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getSupervisingSocialWorkerTableApi: builder.query({
      query: (payload: any) => ({
        // url: `social-worker-details/la-social-worker/list/?fosterChildId=${fosterChildId}`,
        url: `foster-child/list-supervising-social-worker/${payload?.params?.status}`,
        method: "GET",
        params: payload?.params,
      }),
      // providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postSupervisingSocialWorkerApi: builder.mutation({
      query: ({ body, fosterChildId }: any) => ({
        url: `foster-child/add-supervising-social-worker/fosterChildId=${fosterChildId}`,
        method: "POST",
        body: { ...body, fosterChildId: fosterChildId },
      }),
      invalidatesTags: [TAG],
    }),
    putSupervisingSocialWorkerById: builder.mutation({
      query: ({ body, id }: any) => {
        return {
          url: `social-worker-details/la-social-worker/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
    getSupervisingSocialWorkerById: builder.query({
      query: (supervisingSocialWorkerId) =>
        `foster-child/get-supervising-social-worker/${supervisingSocialWorkerId}`,
    }),
    // deleteSupervisingSocialWorkerById: builder.mutation({
    //   query: (data: any) => {
    //     const { id } = data;
    //     return {
    //       url: `social-worker-details/la-social-worker/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: [TAG],
    // }),
  }),
});

export const {
  useGetSupervisingSocialWorkerTableApiQuery,
  usePostSupervisingSocialWorkerApiMutation,
  useGetSupervisingSocialWorkerByIdQuery,
  usePutSupervisingSocialWorkerByIdMutation,
  // useDeleteSupervisingSocialWorkerByIdMutation,
} = SupervisingcontactApi;
