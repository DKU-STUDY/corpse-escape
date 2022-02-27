import React, { useState } from "react";
import { DurationLabels, IntervalLabels, PositionLabels } from "domain";
import SettingTime from "./SettingTime";
import SettingPosition from "./SettingPosition";
import { Conditional } from "../../../hoc";

interface Props {}

const enum EditingState {
  EMPTY = "EMPTY",
  EDIT = "EDIT",
  COMPLETE = "COMPLETE",
}

const Setting: React.FC<Props> = ({}) => {
  const intervals = Object.entries(IntervalLabels);
  const durations = Object.entries(DurationLabels);

  const [editingState, setEditingState] = useState({
    position: EditingState.EDIT,
    interval: EditingState.EMPTY,
    duration: EditingState.EMPTY,
  });

  return (
    <div>
      <p>반갑습니다.</p>

      <Conditional condition={editingState.position === EditingState.EDIT}>
        <SettingPosition />
      </Conditional>

      <Conditional condition={editingState.interval === EditingState.EDIT}>
        <p>[ ] 마다 스트레칭을 하고 싶어요</p>
        <SettingTime labels={intervals} />
      </Conditional>

      <Conditional condition={editingState.duration === EditingState.EDIT}>
        <p>[ ] 분 동안 몸 풀래요</p>
        <SettingTime labels={durations} />
      </Conditional>
    </div>
  );
};

export default React.memo(Setting);
