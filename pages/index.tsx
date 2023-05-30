import { Button } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { TranslateContainer } from "../components/TranslateContainer/TranslateContainer";
import { getTranslation } from "../helpers";
import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const [translation, setTranslation] = useState({
    language: (router.query.language as string) || "yoda",
    userInput: "",
    translationValue: "",
  });

  useEffect(() => {
    setTranslation((prev) => ({
      ...prev,
      language: (router.query.language as string) || "yoda",
    }));
  }, [router]);

  return (
    <div className={style["Home__Main"]}>
      <div className={style["Home__Header"]}>
        <h2>Funny Translate</h2>
      </div>

      <div className={style["Home__Translation"]}>
        <TranslateContainer
          isDisabled={false}
          translation={translation}
          setTranslation={setTranslation}
        />
        <TranslateContainer
          isDisabled={true}
          translation={translation}
          setTranslation={setTranslation}
        />
      </div>
      <div className={style["Home__Translation__Button"]}>
        <Button
          variant="contained"
          onClick={() => getTranslation(translation, setTranslation)}
          sx={{
            minWidth: { xs: 350, sm: 630, md: 800, lg: 1230 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          Click to Translate
        </Button>
      </div>
    </div>
  );
};

export default Home;
