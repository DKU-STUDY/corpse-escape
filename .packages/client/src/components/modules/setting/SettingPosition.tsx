import React, { ChangeEventHandler, useMemo, useState } from "react";
import { EditingStateType, PositionLabels, PositionType } from "domain";
import SettingOption from "./SettingOption";

interface Props {
  editingStateType: EditingStateType;
  setEditingState: () => void;
}

const SettingPosition: React.FC<Props> = ({
  editingStateType,
  setEditingState,
}) => {
  const [selectedPosition, setSelectedPosition] = useState(PositionType.EMPTY);
  const positions = useMemo(
    () =>
      Object.entries(PositionLabels).filter(([k]) => k !== PositionType.EMPTY),
    []
  );

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSelectedPosition(event.target.value as PositionType);
    setEditingState();
  };

  return (
    <>
      <SettingOption
        question={"저는 []"}
        selectedOption={
          selectedPosition ? PositionLabels[selectedPosition] : ""
        }
        editingStateType={editingStateType}
      >
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
      </SettingOption>
    </>
  );
};

export default React.memo(SettingPosition);
