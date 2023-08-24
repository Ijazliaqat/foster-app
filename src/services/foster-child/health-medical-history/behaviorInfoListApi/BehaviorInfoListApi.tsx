import { baseAPI } from "@root/services/baseApi";
const BehaviorInfoList = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    behaviorInfoList: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/behavioural-info/foster-child/${payload.fosterChildId}`,
        method: "GET",
        params: payload,
      }),
      providesTags: ["behaviorInfoList"],
    }),
    behaviorInfoPostAdd: builder.mutation({
      query: (payload: any) => ({
        url: "/foster-child/behavioural-info",
        method: "POST",
        params: payload.params,
        body: payload.formdata,
      }),
      invalidatesTags: ["behaviorInfoList"],
    }),
    behaviorInfoPatch: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/behavioural-info/${payload.params.behaviouralInfoId}`,
        method: "PATCH",
        params: payload.params,
        body: payload.formdata,
      }),
      invalidatesTags: ["behaviorInfoList"],
    }),

    behaviorInfoGetBYbehaviouralInfoId: builder.query({
      query: (payload: any) => ({
        url: `/foster-child/behavioural-info/${payload.behaviouralInfoId}`,
        method: "GET",
        params: payload,
      }),
      providesTags: ["behaviorInfoList"],
    }),
    behaviorInfoDeleteBYbehaviouralInfoId: builder.mutation({
      query: (payload: any) => ({
        url: `/foster-child/behavioural-info/${payload.behaviouralInfoId}`,
        method: "Delete",
        params: payload.params,
      }),
      invalidatesTags: ["behaviorInfoList"],
    }),
  }),
});

export const {
  useBehaviorInfoListQuery,
  useBehaviorInfoPostAddMutation,
  useLazyBehaviorInfoGetBYbehaviouralInfoIdQuery,
  useBehaviorInfoDeleteBYbehaviouralInfoIdMutation,
  useBehaviorInfoPatchMutation,
} = BehaviorInfoList;
