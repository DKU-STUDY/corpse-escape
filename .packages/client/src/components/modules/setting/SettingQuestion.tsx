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
 * @param selectedOption question 의 [] 을 selectedOption 으로 문자열 replace 함.
 * @param editingStateType 이 COMPLETE 일 때, selectedOption 문자열이 보이도록 함.
 * @constructor
 * substring 을 사용하여 <span> 태그로 전후를 나눈 이유
 *  <span> 태그는 [] 문자열의 css 스타일을 다르게 하기 위함.
 *  예시) question: 저는 [] 하고 있어요, selectedOption: 잠을
 *  이라면, span 태그를 삽입하기 위해 [] 전후로 나누어야 함.
 */
export const SettingQuestion: React.FC<Props> = ({
  question,
  selectedOption,
  editingStateType,
}) => {
  const SETTING_OPTIONAL_STR = "[]";
  const preSentenceOfSettingOptionalStr = question.substring(
    0,
    question.indexOf(SETTING_OPTIONAL_STR)
  );
  const postSentenceOfSettingOptionalStr = question.substring(
    question.indexOf(SETTING_OPTIONAL_STR) + SETTING_OPTIONAL_STR.length,
    question.length
  );
  const replacedSentenceOfsettingOptionalStr =
    editingStateType === EditingStateType.COMPLETE ? selectedOption : "...";

  return (
    <>
      <p>
        {preSentenceOfSettingOptionalStr}
        <span>{replacedSentenceOfsettingOptionalStr}</span>
        {postSentenceOfSettingOptionalStr}
      </p>
    </>
  );
};

export default SettingQuestion;
