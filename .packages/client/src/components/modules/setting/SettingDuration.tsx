import React, { useState } from "react";
import { DurationLabels, EditingStateType } from "domain";
import SettingTime from "./SettingTime";
import SettingOption from "./SettingOption";

interface Props {
  editingStateType: EditingStateType;
  setEditingState: () => void;
}

export const SettingDuration: React.FC<Props> = ({
  editingStateType,
  setEditingState,
}) => {
  const durations = Object.entries(DurationLabels);
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <>
      <SettingOption
        question={"[] 동안 몸 풀래요"}
        selectedOption={String(!!selectedTime ? `${selectedTime} 분` : "")}
        editingStateType={editingStateType}
      >
        <SettingTime
          labels={durations}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setEditingState={setEditingState}
        />
      </SettingOption>
    </>
  );
};

export default SettingDuration;
