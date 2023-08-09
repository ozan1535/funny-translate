import { Autocomplete, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import { languages } from "./languages";
import { ISelectLanguageProps } from "./SelectLanguage.types";

export function SelectLanguage({
  translation,
  setTranslation,
}: ISelectLanguageProps) {
  const router = useRouter();
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: {
      label: string;
    } | null
  ) => {
    setTranslation((prev) => ({ ...prev, language: value?.label || "" }));

    const url = new URL(router.asPath, window.location.origin);
    if (value?.label) url.searchParams.set("language", value.label);

    // https://nextjs.org/docs/routing/shallow-routing
    router.push(url, undefined, { shallow: true });
  };

  const sortedLanguages = languages
    .sort()
    .map((language) => ({ label: language }));

  return (
    <FormControl fullWidth>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={sortedLanguages}
        onChange={handleChange}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label={translation.language} />
        )}
      />
    </FormControl>
  );
}
