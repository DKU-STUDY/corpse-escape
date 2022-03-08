import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";

interface Props {
  labels: [string, string][];
  selectedTime: number;
  setSelectedTime: Dispatch<SetStateAction<any>>;
  setEditingState: () => void;
}

const SettingTime: React.FC<Props> = ({
  labels,
  selectedTime,
  setSelectedTime,
  setEditingState,
}) => {
  const handleClickLabel = (value: string) => () =>
    setSelectedTime(selectedTime + Number(value));
  const handleClickSubmit = () => {
    if (!selectedTime) {
      alert("0 이상 입력해주세요");
      return;
    }
    setEditingState();
  };
  const handleClickInit = () => setSelectedTime(0);
  const handleChangeTime: ChangeEventHandler<HTMLInputElement> = (event) => {
    const number = Number(event.target.value);
    if (isNaN(number)) {
      return;
    }
    setSelectedTime(number);
  };

  return (
    <div>
      {labels.map(([value, label]) => (
        <button key={value} onClick={handleClickLabel(value)}>
          {label}
        </button>
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
