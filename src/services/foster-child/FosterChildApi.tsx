import { baseAPI } from "@root/services/baseApi";

const FosterApi = baseAPI.injectEndpoints({
  endpoints: (Builder) => ({
    GetFosterLists: Builder.query({
      query: (payload: any) => ({
        url: "/users/foster-child-users",
        method: "GET",
        params: payload.params,
      }),
      providesTags: ["foster-lists"],
    }),
    
  }),
});
export const { useGetFosterListsQuery } = FosterApi;
