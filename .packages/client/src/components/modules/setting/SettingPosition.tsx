import React, {
  ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { PositionLabels, PositionType } from "domain";
import { Conditional } from "../../../hoc";

interface Props {
  setStep: (step: number) => void;
  isShow: boolean;
}

const SettingPosition: React.FC<Props> = ({ setStep, isShow }) => {
  const [selectedPosition, setSelectedPosition] = useState(PositionType.EMPTY);
  const positions = useMemo(
    () =>
      Object.entries(PositionLabels).filter(([k]) => k !== PositionType.EMPTY),
    []
  );

  const handleChangePosition: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (event) => {
        setSelectedPosition(event.target.value as PositionType);
        setStep(1);
      },
      [selectedPosition]
    );

  return (
    <div>
      <p>저는 {selectedPosition ? PositionLabels[selectedPosition] : ""}</p>

      <Conditional condition={step === 0}>
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
      </Conditional>
    </div>
  );
};

export default React.memo(SettingPosition);
