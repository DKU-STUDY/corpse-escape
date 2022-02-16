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
