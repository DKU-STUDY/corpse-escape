import React, { ChangeEventHandler, useCallback, useContext } from "react";
import { PositionLabels } from "domain";
import { SET_POSITION, SettingContext } from "../../context";

interface Props {}

const Setting: React.FC<Props> = ({}) => {
  const { position, dispatch } = useContext(SettingContext);
  const positions = Object.entries(PositionLabels);

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        dispatch({ type: SET_POSITION, payload: event.target.value });
      },
      [position]
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
    </div>
  );
};

export default React.memo(Setting);
