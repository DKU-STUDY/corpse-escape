import React, { ChangeEventHandler, useCallback, useState } from "react";
import { DurationLabels, IntervalLabels, PositionLabels } from "domain";
import SettingTime from "./SettingTime";

interface Props {}

const useSelectedPosition = () => {
  const [selectedPosition, setSelectedPosition] = useState(
    PositionLabels.LANDING
  );
  const positions = Object.entries(PositionLabels);
  const handleChangePosition: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        setSelectedPosition(event.target.value);
      },
      [selectedPosition]
    );

  return {
    selectedPosition,
    positions,
    handleChangePosition,
  };
};

const Setting: React.FC<Props> = ({}) => {
  const intervals = Object.entries(IntervalLabels);
  const durations = Object.entries(DurationLabels);
  const { selectedPosition, handleChangePosition, positions } =
    useSelectedPosition();

  /** interval 관련 코드 작성 **/

  return (
    <div>
      <p>반갑습니다.</p>
      <p>저는</p>
      {positions.map(([value, label]) => (
        <label key={value}>
          <input
            type="radio"
            name="position"
            checked={value === selectedPosition}
            onChange={handleChangePosition}
            value={value}
          />
          {label}
        </label>
      ))}
      <p>[ ] 마다 스트레칭을 하고 싶어요</p>
      <SettingTime labels={intervals} />
      <p>[ ] 분 동안 몸 풀래요</p>
      <SettingTime labels={durations} />
    </div>
  );
};

export default React.memo(Setting);
