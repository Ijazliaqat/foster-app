import { baseAPI } from "@root/services/baseApi";
export const nextOfKin = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    nextofkinList: builder.query({
      query: (payload: any) => ({
        url: "/carer-other-info/next-of-kin",
        method: "GET",
        params: payload,
      }),
      providesTags: ["NEXT-OF-KIN"],
    }),
    nextofkinListBYID: builder.query({
      query: (payload: any) => ({
        url: `/carer-other-info/next-of-kin/${payload}`,
        method: "GET",
        params: payload,
      }),
    }),
    nextofkinDelete: builder.mutation({
      query: (payload: any) => ({
        url: `/carer-other-info/next-of-kin/${payload.id}`,
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: ["NEXT-OF-KIN"],
    }),
    nextofkinPatch: builder.mutation({
      query: (payload: any) => ({
        url: `/carer-other-info/next-of-kin/${payload.id}`,
        method: "PATCH",
        body: payload.formData,
      }),
      invalidatesTags: ["NEXT-OF-KIN"],
    }),
    nextofkinPost: builder.mutation({
      query: (payload: any) => ({
        url: "/carer-other-info/next-of-kin/",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["NEXT-OF-KIN"],
    }),
  }),
});

export const {
  useNextofkinListQuery,
  useNextofkinPostMutation,
  useNextofkinPatchMutation,
  useLazyNextofkinListBYIDQuery,
  useNextofkinDeleteMutation,
} = nextOfKin;
