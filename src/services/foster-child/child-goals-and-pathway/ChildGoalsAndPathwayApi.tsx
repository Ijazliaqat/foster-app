import { baseAPI } from "@root/services/baseApi";
import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";

export const childGoalsAndPathwayApi = baseAPI.injectEndpoints({
  endpoints: (builder: any) => ({
    getChildPersonalGoalsList: builder.query({
      query: ({ search, limit, offset }: any) => ({
        url: `foster-child/personalgoal/list-personal-goal-info?limit=10&offset=0`,
        params: search,
        limit,
        offset,
      }),
    }),
    getChildPersonalViewData: builder.query({
      query: ({ id, fosterChildId }: any) => ({
        url: `foster-child/personalGoal/get-personal-goal/${id}?fosterChildId=${fosterChildId}`,
        transformResponse: (response: any) => {
          parseDatesToTimeStampByKey(response.data);
          return response;
        },
      }),
    }),
  }),
});

export const {
  useGetChildPersonalGoalsListQuery,
  useLazyGetChildPersonalViewDataQuery,
} = childGoalsAndPathwayApi;
