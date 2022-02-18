export const enum PositionType {
  LANDING = "LANDING",
  CHAIR = "CHAIR",
  SEDENTARY = "SEDENTARY",
  LYING_DOWN = "LYING_DOWN",
  ANYTHING = "ANYTHING",
}

export const PositionLabels: Record<PositionType, string> = {
  [PositionType.LANDING]: "서있어요",
  [PositionType.CHAIR]: "의자에 앉아 있어요",
  [PositionType.SEDENTARY]: "좌식 의자에 앉아 있어요",
  [PositionType.LYING_DOWN]: "누워 있어요",
  [PositionType.ANYTHING]: "뭐든 좋아요",
};

export const enum IntervalType {
  MIN_10 = 10,
  MIN_30 = 30,
  HOUR_1 = 60,
  HOUR_2 = 120,
}

export const IntervalLabels: Record<IntervalType, string> = {
  [IntervalType.MIN_10]: "10 분",
  [IntervalType.MIN_30]: "30 분",
  [IntervalType.HOUR_1]: "1 시간",
  [IntervalType.HOUR_2]: "2 시간",
};
