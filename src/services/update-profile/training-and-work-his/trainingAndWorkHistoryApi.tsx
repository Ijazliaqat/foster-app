import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const trainingAndWorkHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrainingAndWorkHistoryInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=trainingHistory.trainingCertificate",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateTrainingAndWorkHistoryInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-training-certificate",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteTrainingAndWorkHistoryInfoDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/training-certificate",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getAdditionalTrainingDetails: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=trainingDetail",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addAdditionalTrainingDetails: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-additional-training",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateAdditionalTrainingDetails: builder.mutation<null, any>({
      query: ({ body, trainingId }: any) => ({
        url: `user-profile/update-additional-training/${trainingId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteAdditionalTrainingDetailsDocs: builder.mutation<null, any>({
      query: ({ body, trainingId }: any) => ({
        url: `user-profile/add-additional-training?trainingId=${trainingId}`,
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getWorkExperience: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=workExperience",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addWorkExperience: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-work-experience",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateWorkExperience: builder.mutation<null, any>({
      query: ({ body, workId }) => ({
        url: `user-profile/update-work-experience/${workId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    // Please Update Api end points
    getUnemploymentPeriod: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=workExperience",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    addUnemploymentPeriod: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-unemployement",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    updateUnemploymentPeriod: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/update-work-experience/workId",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getSpecialitiesInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=trainingHistory.specialities",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateSpecialitiesInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/specialities",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useLazyGetTrainingAndWorkHistoryInfoQuery,
  useUpdateTrainingAndWorkHistoryInfoMutation,
  useDeleteTrainingAndWorkHistoryInfoDocuMutation,

  useGetAdditionalTrainingDetailsQuery,
  useAddAdditionalTrainingDetailsMutation,
  useUpdateAdditionalTrainingDetailsMutation,
  useDeleteAdditionalTrainingDetailsDocsMutation,

  useGetWorkExperienceQuery,
  useAddWorkExperienceMutation,
  useUpdateWorkExperienceMutation,

  useGetUnemploymentPeriodQuery,
  useAddUnemploymentPeriodMutation,
  useUpdateUnemploymentPeriodMutation,

  useLazyGetSpecialitiesInfoQuery,
  useUpdateSpecialitiesInfoMutation,
} = trainingAndWorkHistoryApi;
