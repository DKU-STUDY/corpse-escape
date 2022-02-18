import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { IntervalLabels, PositionLabels } from "domain";
import { SettingContext } from "../../context";

interface Props {}

const useSelectedInterval = () => {
  const [selectedInterval, setSelectedInterval] = useState(0);
  const handleClickIntervalLabel: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        setSelectedInterval(selectedInterval + Number(event.target.value));
      },
      [selectedInterval]
    );

  const handleClickIntervalSubmit: MouseEventHandler<HTMLButtonElement> =
    useCallback((event) => {}, [selectedInterval]);

  const handleClickIntervalInit: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        setSelectedInterval(0);
      },
      [selectedInterval]
    );

  const handleChangeInterval: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const number = Number(event.target.value);
        if (isNaN(number)) {
          return;
        }
        setSelectedInterval(number);
      },
      [selectedInterval]
    );

  return {
    selectedInterval,
    handleClickIntervalLabel,
    handleClickIntervalSubmit,
    handleClickIntervalInit,
    handleChangeInterval,
  };
};

const useSelectedPosition = () => {
  const [selectedPosition, setSelectedPosition] = useState(
    PositionLabels.LANDING
  );

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        setSelectedPosition(event.target.value);
      },
      [selectedPosition]
    );

  return {
    selectedPosition,
    handleChangePosition,
  };
};

const Setting: React.FC<Props> = ({}) => {
  const { dispatch } = useContext(SettingContext);
  const {
    selectedInterval,
    handleClickIntervalLabel,
    handleClickIntervalSubmit,
    handleClickIntervalInit,
    handleChangeInterval,
  } = useSelectedInterval();
  const { selectedPosition, handleChangePosition } = useSelectedPosition();

  const positions = Object.entries(PositionLabels);
  const intervals = Object.entries(IntervalLabels);

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
      {intervals.map(([value, label]) => (
        <button value={value} onClick={handleClickIntervalLabel}>
          {label}
        </button>
      ))}
      <button onClick={handleClickIntervalInit}>다시 입력</button>
      <p>
        <input value={selectedInterval} onChange={handleChangeInterval} /> 분
        <button onClick={handleClickIntervalSubmit}>입력</button>
      </p>
    </div>
  );
};

export default React.memo(Setting);
