import React, { useState } from "react";
import s from "./StartPage.module.css";
import useStore from "../../store/store";
import { setLocalStorage } from "../../scripts/helpers/localeStorage";
import clean from "../../assets/wipe.png";
import useSound from "use-sound";
import clickAudio from "../../assets/sounds/click.mp3";

const ChangePanel = ({ girl }) => {
  const {
    firstGirlColors,
    secondGirlColors,
    thirdGirlColors,
    setFirstGirlColors,
    setSecondGirlColors,
    setThirdGirlColors,
  } = useStore();
  const [play] = useSound(clickAudio, { volume: 0.2 });
  const getGirlColors = () => {
    switch (girl) {
      case "firstGirl":
        return firstGirlColors;
      case "secondGirl":
        return secondGirlColors;
      case "thirdGirl":
        return thirdGirlColors;
      default:
        return {};
    }
  };

  const selectedColors = getGirlColors();

  const handleColorChange = (event, item) => {
    const newColors = { ...selectedColors, [item]: event.target.value };
    getSetGirlColors(newColors);
  };

  const getSetGirlColors = (value) => {
    let setGirlColors;
    switch (girl) {
      case "firstGirl":
        setGirlColors = setFirstGirlColors;
        break;
      case "secondGirl":
        setGirlColors = setSecondGirlColors;
        break;
      case "thirdGirl":
        setGirlColors = setThirdGirlColors;
        break;
      default:
        return;
    }
    setGirlColors(value);
  };

  const handleCleanColor = () => {
    play();
    const newColor = {};
    for (let key in selectedColors) {
      newColor[key] = null;
    }
    getSetGirlColors(newColor);
  };

  return (
    <div className={s.containerRightPanel}>
      <div className={s.item}>
        <div>HAIR</div>
        <input
          type="color"
          value={selectedColors.hair || "black"}
          onChange={(event) => handleColorChange(event, "hair")}
          onClick={play}
        />
      </div>

      {(girl === "firstGirl" || girl === "thirdGirl") && (
        <div className={s.item}>
          <div>TOP</div>
          <input
            type="color"
            value={selectedColors.top || "black"}
            onChange={(event) => handleColorChange(event, "top")}
            onClick={play}
          />
        </div>
      )}
      {girl === "secondGirl" && (
        <div className={s.item}>
          <div>SUIT</div>
          <input
            type="color"
            value={selectedColors.suit || "black"}
            onChange={(event) => handleColorChange(event, "suit")}
            onClick={play}
          />
        </div>
      )}

      {(girl === "firstGirl" || girl === "thirdGirl") && (
        <div className={s.item}>
          <div>PANTS</div>
          <input
            type="color"
            value={selectedColors.pants || "black"}
            onChange={(event) => handleColorChange(event, "pants")}
            onClick={play}
          />
        </div>
      )}

      <button onClick={() => handleCleanColor()} className={s.btn_clean}>
        <img src={clean} />
      </button>
    </div>
  );
};

export default ChangePanel;
