import {
  generateLocalFormsStatuses,
  tabsItems,
} from "@root/sections/edit-profile/layout/static-data";
import { baseAPI } from "@root/services/baseApi";

const TAG = "UPDATE_PROFILE";

export const aboutTheCandidateApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getProfileStatus: builder.query({
      query: () => ({
        url: "user-profile/all-profile-status",
        method: "GET",
      }),
      providesTags: [TAG],
      transformResponse: (response: any) => {
        const lastCompletedForm =
          response?.data?.nextProperty || "personalInfo";
        const genForms = generateLocalFormsStatuses(lastCompletedForm);
        return {
          forms: genForms,
          activeFormName: lastCompletedForm,
        };
      },
    }),
    getProfileProgressInfo: builder.query({
      query: () => ({
        url: "user-profile/progress-bar",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    getPersonalInfo: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=personalInfo",
        method: "GET",
      }),
      providesTags: [TAG],
      transformResponse: (response: any) => ({
        ...response.data,
        nationality: response.data.nationality || "Pakistani",
      }),
    }),
    updatePersonalInfo: builder.mutation<null, void>({
      query: (body) => ({
        url: "user-profile/personal-info",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getAddressDetails: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.addressDetail",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updateAddressDetails: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/address-detail",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deleteAddressDetailsDocu: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/address-detail",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getPhotoForIdBadge: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.badgeId",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updatePhotoForIdBadge: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/bagde-Id-image",
        method: "PUT",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    deletePhotoForIdBadge: builder.mutation<null, any>({
      query: (body) => ({
        url: "/user-profile/bagde-Id-image",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getPhotoForIdUpload: builder.query({
      query: () => ({
        url: "user-profile/all-profile?infoToget=aboutCandidate.passport",
        method: "GET",
      }),
      providesTags: [TAG],
    }),
    updatePhotoForIdUpload: builder.mutation<null, any>({
      query: (body) => ({
        url: "user-profile/add-passport-image",
        method: "PUT",
        body,
      }),
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetProfileProgressInfoQuery,
  useGetProfileStatusQuery,
  useLazyGetPersonalInfoQuery,
  useUpdatePersonalInfoMutation,
  useLazyGetAddressDetailsQuery,
  useUpdateAddressDetailsMutation,
  useDeleteAddressDetailsDocuMutation,
  useGetPhotoForIdBadgeQuery,
  useUpdatePhotoForIdBadgeMutation,
  useDeletePhotoForIdBadgeMutation,
  useGetPhotoForIdUploadQuery,
  useUpdatePhotoForIdUploadMutation,
} = aboutTheCandidateApi;
