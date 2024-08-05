/** @format */
import { useState, useEffect } from 'react';
import RainStream from './RainStream';

const MatrixRain = () => {
  const [streamCount, setStreamCount] = useState(
    Math.floor(window.innerWidth / 36)
  );

  useEffect(() => {
    const handleResize = () => {
      setStreamCount(Math.floor(window.innerWidth / 36));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'black',
        display: 'flex',
        zIndex: '-1',
      }}
    >
      {new Array(streamCount).fill().map((_, index) => (
        // eslint-disable-next-line react/jsx-key
        <RainStream key={index} />
      ))}
    </div>
  );
};

export default MatrixRain;
