import React, { ChangeEventHandler, useState } from "react";

const useSelectedTime = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const handleClickLabel = (value: string) => () =>
    setSelectedTime(selectedTime + Number(value));
  const handleClickSubmit = () => {};
  const handleClickInit = () => setSelectedTime(0);
  const handleChangeTime: ChangeEventHandler<HTMLInputElement> = (event) => {
    const number = Number(event.target.value);
    if (isNaN(number)) {
      return;
    }
    setSelectedTime(number);
  };

  return {
    selectedTime,
    handleClickLabel,
    handleClickSubmit,
    handleClickInit,
    handleChangeTime,
  };
};

interface Props {
  labels: [string, string][];
}

const SettingTime: React.FC<Props> = ({ labels }) => {
  const {
    selectedTime,
    handleClickLabel,
    handleClickSubmit,
    handleClickInit,
    handleChangeTime,
  } = useSelectedTime();
  return (
    <div>
      {labels.map(([value, label]) => (
        <button onClick={handleClickLabel(value)}>{label}</button>
      ))}
      <button onClick={handleClickInit}>다시 입력</button>
      <p>
        <input value={selectedTime} onChange={handleChangeTime} /> 분
        <button onClick={handleClickSubmit}>입력</button>
      </p>
    </div>
  );
};

export default SettingTime;
