import { baseAPI } from "@root/services/baseApi";
import { generalTags } from "@root/utils/apiHelper";

const TAG = "CARER_FAMILY_NETWORK";

export const contactApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getCarerFamilyTableApi: builder.query({
      query: ({ params }: any) => ({
        url: "carer-Info/personal-info/carer-family",
        method: "GET",
        params,
      }),
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    postCarerFamilyApi: builder.mutation<null, void>({
      query: (body: any) => ({
        url: "carer-Info/personal-info/carer-family",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAG],
    }),
    getCarerFamilyById: builder.query({
      query: (familyId) => `/carer-Info/personal-info/carer-family/${familyId}`,
      providesTags: (result) => generalTags(result?.faimly_details, TAG),
    }),
    putCarerFamilyById: builder.mutation<null, void>({
      query: (data: any) => {
        const { id, ...body } = data;
        return {
          url: `/carer-Info/personal-info/carer-family/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [TAG],
    }),
  }),
});

export const {
  useGetCarerFamilyTableApiQuery,
  usePostCarerFamilyApiMutation,
  useGetCarerFamilyByIdQuery,
  usePutCarerFamilyByIdMutation,
} = contactApi;
