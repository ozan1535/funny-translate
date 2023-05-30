import { Dispatch, SetStateAction } from "react";
import { ITranslation } from "../SelectLanguage/SelectLanguage.types";

export interface ITranslateContainerProps {
  isDisabled: boolean;
  translation: ITranslation;
  setTranslation: Dispatch<SetStateAction<ITranslation>>;
}
