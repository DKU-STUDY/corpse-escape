import { createContext } from "react";

export const initSettingState = {
  position: "",
  interval: 0,
  duration: 0,
};

export type SettingState = typeof initSettingState;

export const SET_POSITION = "SET_POSITION";
export const SET_INTERVAL = "SET_INTERVAL";
export const SET_DURATION = "SET_DURATION";

export function settingReducer(
  state: SettingState = initSettingState,
  action: { type: string; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSITION:
      return { ...state, position: payload };
    case SET_INTERVAL:
      return { ...state, interval: payload };
    case SET_DURATION:
      return { ...state, duration: payload };
    default:
      return initSettingState;
  }
}

export const SettingContext = createContext({
  ...initSettingState,
  reducer: settingReducer,
});
