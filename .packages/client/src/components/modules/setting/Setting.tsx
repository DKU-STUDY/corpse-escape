import React, { useState } from "react";
import { EditingStateType, SettingOptionType } from "domain";
import SettingPosition from "./SettingPosition";
import SettingInterval from "./SettingInterval";
import SettingDuration from "./SettingDuration";
import Conditional from "../../../hoc/Conditional";

interface Props {}

export const Setting: React.FC<Props> = ({}) => {
  const [editingState, _setEditingState] = useState({
    [SettingOptionType.POSITION]: EditingStateType.EDIT,
    [SettingOptionType.INTERVAL]: EditingStateType.EMPTY,
    [SettingOptionType.DURATION]: EditingStateType.EMPTY,
  });

  const setEditingState = (settingOptionType: SettingOptionType) => {
    const nextEditSettingOptionType = Object.entries(editingState).find(
      ([_, v]) => v === EditingStateType.EMPTY
    )?.[0] as SettingOptionType;

    const newEditingState = {
      ...editingState,
      [settingOptionType]: EditingStateType.COMPLETE,
    };

    if (nextEditSettingOptionType) {
      newEditingState[nextEditSettingOptionType] = EditingStateType.EDIT;
    }

    _setEditingState(newEditingState);
  };

  const isShowOption = (settingOptionType: SettingOptionType) =>
    editingState[settingOptionType] !== EditingStateType.EMPTY;

  const isAllEditingStateTypeComplete = () => {
    return !Object.values(editingState).find(
      (editingStateType) => editingStateType !== EditingStateType.COMPLETE
    );
  };

  const setOneOfEditingState = (settingOptionType: SettingOptionType) => () =>
    setEditingState(settingOptionType);

  return (
    <div>
      <p>반갑습니다.</p>
      <Conditional condition={isShowOption(SettingOptionType.POSITION)}>
        <SettingPosition
          editingStateType={editingState[SettingOptionType.POSITION]}
          setEditingState={setOneOfEditingState(SettingOptionType.POSITION)}
        />
      </Conditional>

      <Conditional condition={isShowOption(SettingOptionType.INTERVAL)}>
        <SettingInterval
          editingStateType={editingState[SettingOptionType.INTERVAL]}
          setEditingState={setOneOfEditingState(SettingOptionType.INTERVAL)}
        />
      </Conditional>

      <Conditional condition={isShowOption(SettingOptionType.DURATION)}>
        <SettingDuration
          editingStateType={editingState[SettingOptionType.DURATION]}
          setEditingState={setOneOfEditingState(SettingOptionType.DURATION)}
        />
      </Conditional>

      <Conditional condition={isAllEditingStateTypeComplete()}>
        <p>시작해 볼까요?</p>
      </Conditional>
    </div>
  );
};

export default React.memo(Setting);
