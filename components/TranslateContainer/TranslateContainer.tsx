import { Box, TextField } from "@mui/material";
import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import { LanguageTab } from "../LanguageTab/LanguageTab";
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";
import { ITranslateContainerProps } from "./TranslateContainer.types";

export function TranslateContainer({
  isDisabled,
  translation,
  setTranslation,
}: ITranslateContainerProps) {
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTranslation((prev) => ({
      ...prev,
      userInput: event.target.value,
    }));
  };

  return (
    <Box
      sx={{ minWidth: { xs: 100, sm: 300, md: 400, lg: 600 }, margin: "10px" }}
    >
      <div style={{ height: "50px" }}>
        {isDisabled ? (
          <SelectLanguage
            translation={translation}
            setTranslation={setTranslation}
          />
        ) : (
          <LanguageTab />
        )}
      </div>
      <TextField
        id="outlined-basic"
        label={isDisabled ? "" : "Text"}
        variant="outlined"
        multiline={true}
        rows={5}
        value={
          isDisabled ? translation.translationValue : translation.userInput
        }
        onChange={changeValue}
        fullWidth
        margin="normal"
        placeholder={isDisabled ? "Translation" : ""}
        disabled={isDisabled}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
        }}
      />
    </Box>
  );
}
