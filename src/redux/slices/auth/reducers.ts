import { TAuthSlice } from "@root/types/store";

const initialState: TAuthSlice = {
  authToken: null,
  refreshToken: null,
};

export const setTokens = (state: any, action: any) => {
  state.authToken = action.payload.authToken;
  state.refreshToken = action.payload.refreshToken;
};

export const logout = (state: any, action: any) => {
  state = initialState;
};
