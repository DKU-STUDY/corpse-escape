import React, { ReactNode } from "react";
import { EditingStateType } from "domain";
import { Conditional } from "../../../hoc";
import SettingQuestion from "./SettingQuestion";

interface Props {
  question: string;
  selectedOption: string;
  editingStateType: EditingStateType;
  children: ReactNode;
}

const SettingOption: React.FC<Props> = ({
  question,
  selectedOption,
  editingStateType,
  children,
}) => {
  return (
    <>
      <div>
        <SettingQuestion
          question={question}
          selectedOption={selectedOption}
          editingStateType={editingStateType}
        />
        <Conditional condition={editingStateType === EditingStateType.COMPLETE}>
          <button>수정하기</button>
        </Conditional>
      </div>
      <Conditional condition={editingStateType === EditingStateType.EDIT}>
        {children}
      </Conditional>
    </>
  );
};

export default SettingOption;
