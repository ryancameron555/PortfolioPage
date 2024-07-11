/** @format */

import { useState, useEffect, useRef } from 'react';

const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 10;
const MAX_STREAM_SIZE = 25;

// Get a random integer between min (inclusive) and max (exclusive)
const getRandInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Get a random character from VALID_CHARS
const getRandChar = () => {
  return VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));
};

// Generate a random stream of characters with a size between MIN_STREAM_SIZE and MAX_STREAM_SIZE
const getRandStream = () => {
  return new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
    .fill(undefined)
    .map(() => getRandChar());
};

// Mutate the stream with a probability of STREAM_MUTATION_ODDS
const getMutatedStream = (stream) => {
  const newStream = [];
  for (let i = 1; i < stream.length; i++) {
    if (Math.random() < STREAM_MUTATION_ODDS) {
      newStream.push(getRandChar());
    } else {
      newStream.push(stream[i]);
    }
  }
  newStream.push(getRandChar());
  return newStream;
};

// Custom useInterval hook to handle intervals
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
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const RainStream = () => {
  const [stream, setStream] = useState(getRandStream());
  const [topPadding, setTopPadding] = useState(stream.length * -50);

  useInterval(() => {
    if (topPadding > window.innerHeight) {
      setTopPadding(0);
      setStream(getRandStream);
    } else {
      setTopPadding(topPadding + 44);
      setStream(getMutatedStream);
    }
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
        fontSize: 25,
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
