import { baseAPI } from "./baseApi";

export const uploadAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: ({ formData }: any) => ({
        url: "uploads/upload-image",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = uploadAPI;
