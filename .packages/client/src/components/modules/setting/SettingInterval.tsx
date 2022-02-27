import React, { useState } from "react";
import SettingTime from "./SettingTime";
import SettingOption from "./SettingOption";
import { EditingStateType, IntervalLabels } from "domain";

interface Props {
  editingStateType: EditingStateType;
  setEditingState: () => void;
}

export const SettingInterval: React.FC<Props> = ({
  editingStateType,
  setEditingState,
}) => {
  const intervals = Object.entries(IntervalLabels);
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <>
      <SettingOption
        question={"[] 마다 스트레칭을 하고 싶어요"}
        selectedOption={(!!selectedTime ? `${selectedTime} 분` : "") + ""}
        editingStateType={editingStateType}
      >
        <SettingTime
          labels={intervals}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          setEditingState={setEditingState}
        />
      </SettingOption>
    </>
  );
};

export default SettingInterval;
