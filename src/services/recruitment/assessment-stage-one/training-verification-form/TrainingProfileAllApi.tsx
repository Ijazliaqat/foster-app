import { baseAPI } from "@root/services/baseApi";

const TAGS: any = ["POST_DATA", "DELETE_PROFILE", "UPDATE_DATA", "GET_DATA"];

export const trainingPRofileAllApi: any = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingProfileAllData: builder.query({
      query: ({ params }: any) => ({
        url: "/training-profile/all",
        method: "GET",
        params,
      }),
      providesTags: [TAGS],
    }),
    getSingleTrainingProfileData: builder.query({
      query: (trainingProfileId: any) =>
        `/training-profile/${trainingProfileId}`,
    }),
    postTrainingProfileApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "/training-profile",
        method: "POST",
        body,
      }),
      invalidatesTags: TAGS,
    }),
    patchTrainingProfileApi: builder.mutation<null, void>({
      query: ({ trainingProfileId, data }: any) => ({
        url: `/training-profile/${trainingProfileId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: TAGS,
    }),
    deleteTrainingProfileApi: builder.mutation<null, void>({
      query: (id: any) => ({
        url: `/training-profile/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: TAGS,
    }),
    getTrainingProfileAllDocument: builder.query({
      query: ({ id, params }: any) => ({
        url: `/training-profile/document/all?trainingProfileId=${id}`,
        method: "GET",
        params,
      }),
    }),
    postTrainingProfileDocument: builder.mutation<null, void>({
      query: ({ data, trainingProfileId }: any) => ({
        url: `/training-profile/document?trainingProfileId=${trainingProfileId}`,
        method: "POST",
        body: data,
      }),
    }),
    deleteTrainingProfileDocument: builder.mutation<null, void>({
      query: ({ trainingProfileId, profileId }: any) => ({
        url: `/training-profile/document/${profileId}?trainingProfileId=${trainingProfileId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTrainingProfileAllDataQuery,
  useGetSingleTrainingProfileDataQuery,
  usePostTrainingProfileApiMutation,
  usePatchTrainingProfileApiMutation,
  useGetTrainingProfileAllDocumentQuery,
  useDeleteTrainingProfileApiMutation,
  usePostTrainingProfileDocumentMutation,
  useDeleteTrainingProfileDocumentMutation,
} = trainingPRofileAllApi;
