/** @format */
import RainStream from './RainStream';

const MatrixRain = () => {
  const streamCount = Math.floor(window.innerWidth / 36);
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
      {new Array(streamCount).fill().map(() => (
        // eslint-disable-next-line react/jsx-key
        <RainStream />
      ))}
    </div>
  );
};

export default MatrixRain;
