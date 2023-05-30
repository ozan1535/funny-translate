import { Dispatch, SetStateAction } from "react";
import { ITranslation } from "../components/SelectLanguage/SelectLanguage.types";

export const getTranslation = async (
  translation: ITranslation,
  setTranslation: Dispatch<SetStateAction<ITranslation>>
) => {
  const request = await fetch(
    `https://api.funtranslations.com/translate/${translation.language}.json?text=${translation.userInput}`
  );

  const response = await request.json();
  setTranslation((prev) => ({
    ...prev,
    translationValue: response.contents?.translated || response.error.message,
  }));
};
