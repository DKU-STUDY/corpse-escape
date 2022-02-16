import React, { createContext } from "react";
import { PositionType } from "domain";

export const initSettingState = {
  position: PositionType.LANDING,
  interval: 0,
  duration: 0,
};

export type SettingState = typeof initSettingState;

export const SET_POSITION = "SET_POSITION";
export const SET_INTERVAL = "SET_INTERVAL";
export const SET_DURATION = "SET_DURATION";

interface Action {
  type: string;
  payload: unknown;
}

export function settingReducer(
  state: SettingState = initSettingState,
  action: Action
) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSITION:
      return { ...state, position: payload as PositionType };
    case SET_INTERVAL:
      return { ...state, interval: payload as number };
    case SET_DURATION:
      return { ...state, duration: payload as number };
    default:
      return initSettingState;
  }
}

type SettingContextType = SettingState & { dispatch: React.Dispatch<Action> };

export const SettingContext = createContext<SettingContextType>(null as any);
