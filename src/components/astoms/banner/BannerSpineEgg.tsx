import React, { useState, useEffect, useCallback } from "react";

import { Stage } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";
import Spine from "./Spine";

(window as any).PIXI = PIXI;

const mixes = [
  {
    from: "animation",
    to: "animation",
    duration: 0.2,
  },
  {
    from: "animation",
    to: "animation",
    duration: 0.4,
  },
  {
    from: "animation",
    to: "animation",
    duration: 0.4,
  },
];

type IProps = {
  link: string;
  name: string;
};

const BannerSpineEgg = (props: IProps) => {
  const [spineData, setSpineData] = useState();
  const [animationState, setAnimationState] = useState();

  useEffect(() => {
    const initSpine = async () => {
      const loader = new PIXI.Loader();
      loader.add(props.name, props.link).load((_, res) => {
        setSpineData((res as any)[props.name].spineData);
      });
    };
    initSpine();
  }, [props.link, props.name]);

  const stateRef = useCallback((state: any) => {
    if (state) {
      state.setAnimation(0, "animation", false);
      state.addAnimation(0, "animation", true, 0);
    }
    setAnimationState(state);
  }, []);

  const loadAnimation = useCallback(() => {
    if (animationState) {
      (animationState as any).setAnimation(0, "animation", false);
      (animationState as any).addAnimation(0, "animation", true, 0);
    }
  }, [animationState]);

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setSizeScreen(window.innerWidth);
    };
  }, [sizeScreen]);
  console.log(sizeScreen);

  let widthScreenWidth = 973;
  let boxWidth = sizeScreen > 769 ? widthScreenWidth * 0.23 : sizeScreen * 0.47;
  let boxHeight = sizeScreen > 769 ? 330 : 400;
  let scale = sizeScreen > 769 ? 0.8 : 0.8;
  let imageMarginLeft = sizeScreen > 769 ? (sizeScreen > 1024 ? boxWidth / 2.1 + 10 : boxWidth / 2.1 -5) : boxWidth / 2.1;
  let imageMarginTop = sizeScreen > 769 ? 85 : 80;

  return (
    <div className="h-full rounded" onClick={loadAnimation} role="none">
      <Stage className="rounded-lg" options={{ transparent: true }} width={boxWidth} height={boxHeight}>
        {spineData && (
          <Spine
            scale={scale}
            x={imageMarginLeft}
            y={imageMarginTop}
            spineData={spineData}
            mixes={mixes}
            animationStateCallback={stateRef}
          />
        )}
      </Stage>
      <style>
        {`
          canvas {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
          }
        `}
      </style>
    </div>
  );
};

export default BannerSpineEgg;
