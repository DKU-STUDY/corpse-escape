import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { IntervalLabels, PositionLabels } from "domain";
import { SET_INTERVAL, SET_POSITION, SettingContext } from "../../context";

interface Props {}

const Setting: React.FC<Props> = ({}) => {
  const { position, dispatch } = useContext(SettingContext);
  const [interval, setInterval] = useState(0);
  const positions = Object.entries(PositionLabels);
  const intervals = Object.entries(IntervalLabels);

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        dispatch({ type: SET_POSITION, payload: event.target.value });
      },
      [position]
    );

  const handleClickIntervalLabel: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        setInterval(interval + Number(event.target.value));
      },
      [interval]
    );

  const handleClickIntervalSubmit:
    | MouseEventHandler<HTMLButtonElement>
    | KeyboardEvent = useCallback(
    (event) => {
      dispatch({ type: SET_INTERVAL, payload: interval });
    },
    [interval]
  );

  const handleClickIntervalInit: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        setInterval(0);
      },
      [interval]
    );

  const handleChangeInterval: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        const number = Number(event.target.value);
        if (isNaN(number)) {
          return;
        }
        setInterval(number);
      },
      [interval]
    );

  return (
    <div>
      <p>반갑습니다.</p>
      <p>저는</p>
      {positions.map(([value, label]) => (
        <label key={value}>
          <input
            type="radio"
            name="position"
            checked={value === position}
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
        <input value={interval} onChange={handleChangeInterval} /> 분
        <button onClick={handleClickIntervalSubmit}>입력</button>
      </p>
    </div>
  );
};

export default React.memo(Setting);
