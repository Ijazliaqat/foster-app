import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const medicalHistoryApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getImmunisationInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=medicalHistory.immunisation",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateImmunisationInfo: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/immunisation",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteImmunisationInfoDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/immunisation",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),

    getMedicalQuestionnaire: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=medicalHistory.questionair",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateMedicalQuestionnaire: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/questionnair",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useLazyGetImmunisationInfoQuery,
  useUpdateImmunisationInfoMutation,
  useDeleteImmunisationInfoDocuMutation,
  useLazyGetMedicalQuestionnaireQuery,
  useUpdateMedicalQuestionnaireMutation,
} = medicalHistoryApi;
