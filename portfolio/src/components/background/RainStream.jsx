/** @format */

import { useState, useEffect, useRef } from 'react';

const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 40;

const getRandInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandChar = () => {
  return VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));
};

const getRandStream = () => {
  return new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill(undefined)
    .map(() => getRandChar());
};

// Custom useInterval hook
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const RainStream = () => {
  const [topPadding, setTopPadding] = useState(0);
  const stream = getRandStream();

  useInterval(() => {
    setTopPadding((prev) => prev + 44);
  }, 100);

  return (
    <div
      style={{
        marginTop: topPadding,
        fontFamily: 'matrixFont',
        color: '#20c20e',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
        fontSize: 50,
      }}
    >
      {stream.map((char, index) => (
        <a
          key={index}
          style={{
            color: index === stream.length - 1 ? '#fff' : undefined,
            opacity: index < 6 ? 0.1 + index * 0.15 : 1,
            textShadow:
              index === stream.length - 1
                ? '0px 0px 20px rgba(255, 255, 255, 1)'
                : undefined,
            marginTop: -12,
          }}
        >
          {char}
        </a>
      ))}
    </div>
  );
};

export default RainStream;
