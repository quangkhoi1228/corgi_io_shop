import React, { useState, useEffect, useCallback } from 'react';

import { Stage } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

import Spine from './Spine';

(window as any).PIXI = PIXI;

const mixes = [
  {
    from: 'animation',
    to: 'animation',
    duration: 0.2,
  },
  {
    from: 'animation',
    to: 'animation',
    duration: 0.4,
  },
  {
    from: 'animation',
    to: 'animation',
    duration: 0.4,
  },
];

type IProps = {
  link: string;
  name: string;
};

const BannerSpine = (props: IProps) => {
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
      state.setAnimation(0, 'animation', false);
      state.addAnimation(0, 'animation', true, 0);
    }
    setAnimationState(state);
  }, []);

  const loadAnimation = useCallback(() => {
    if (animationState) {
      (animationState as any).setAnimation(0, 'animation', false);
      (animationState as any).addAnimation(0, 'animation', true, 0);
    }
  }, [animationState]);

  const getScreenSize = () => ({
    width:
      window.innerWidth > 1024
        ? window.innerWidth - 305
        : window.innerWidth - 50,
    height: window.innerHeight,
  });

  const useResize = () => {
    const [size, setSize] = React.useState(getScreenSize());

    React.useEffect(() => {
      const onResize = () => {
        setSize(getScreenSize());
      };
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, []);

    return size;
  };

  const size = useResize();
  return (
    <div className="h-full rounded" onClick={loadAnimation} role="none">
      <Stage
        className="rounded-lg"
        options={{ transparent: true }}
        width={size.width}
        height={size.width / 2 - 70}
      >
        {spineData && (
          <Spine
            scale={size.width / 950}
            x={size.width / 2}
            y={size.width / 2 - 40}
            spineData={spineData}
            mixes={mixes}
            animationStateCallback={stateRef}
          />
        )}
      </Stage>
      <style>
        {`
          canvas {
            top: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default BannerSpine;
