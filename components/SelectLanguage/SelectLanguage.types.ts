import { Dispatch, SetStateAction } from "react";

export interface ITranslation {
  language: string;
  userInput: string;
  translationValue: string;
}

export interface ISelectLanguageProps {
  translation: ITranslation;
  setTranslation: Dispatch<SetStateAction<ITranslation>>;
}
