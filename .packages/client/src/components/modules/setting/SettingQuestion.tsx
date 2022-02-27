import React from "react";
import { EditingStateType } from "domain";

interface Props {
  question: string;
  selectedOption: string;
  editingStateType: EditingStateType;
}

/**
 *
 * @param question 예시) 저는 [] | [] 마다 스트레칭을 하고 싶어요
 * @param selectedOption question 의 [] 을 selectedOption 으로 대체함.
 * @param editingStateType 이 COMPLETE 일 때, selectedOption 문자열이 보이도록 함.
 * @constructor
 */
export const SettingQuestion: React.FC<Props> = ({
  question,
  selectedOption,
  editingStateType,
}) => {
  const SettingOptionalChar = "[]";

  return (
    <>
      <p>
        {question.substring(0, question.indexOf(SettingOptionalChar))}
        <span>
          {editingStateType === EditingStateType.COMPLETE
            ? selectedOption
            : "..."}
        </span>
        {question.substring(
          question.indexOf(SettingOptionalChar) + SettingOptionalChar.length,
          question.length
        )}
      </p>
    </>
  );
};

export default SettingQuestion;
