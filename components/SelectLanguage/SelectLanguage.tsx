import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/router";
import { languages } from "./languages";
import { ISelectLanguageProps } from "./SelectLanguage.types";

export function SelectLanguage({
  translation,
  setTranslation,
}: ISelectLanguageProps) {
  const router = useRouter();
  const handleChange = (event: SelectChangeEvent) => {
    setTranslation((prev) => ({ ...prev, language: event.target.value }));

    const url = new URL(router.asPath, window.location.origin);
    if (event.target.value)
      url.searchParams.set("language", event.target.value);

    // https://nextjs.org/docs/routing/shallow-routing
    router.push(url, undefined, { shallow: true });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {translation.language}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={translation.language}
        label={translation.language}
        onChange={handleChange}
        fullWidth={false}
      >
        {languages.map((language) => (
          <MenuItem value={language} key={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
