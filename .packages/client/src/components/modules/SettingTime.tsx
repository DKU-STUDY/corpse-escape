import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useState,
} from "react";

const useSelectedTime = () => {
  const [selectedTime, setSelectedTime] = useState(0);
  const handleClickLabel: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      setSelectedTime(selectedTime + Number(event.target.value));
    },
    [selectedTime]
  );
  const handleClickSubmit: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {}, [selectedTime]);
  const handleClickInit: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setSelectedTime(0);
    }, [selectedTime]);
  const handleChangeTime: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const number = Number(event.target.value);
      if (isNaN(number)) {
        return;
      }
      setSelectedTime(number);
    },
    [selectedTime]
  );

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
        <button value={value} onClick={handleClickLabel}>
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
