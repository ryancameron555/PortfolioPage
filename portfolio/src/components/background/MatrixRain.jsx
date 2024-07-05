/** @format */
import RainStream from './RainStream';

const MatrixRain = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        background: 'black',
        zIndex: '-1',
      }}
    >
      <RainStream />
    </div>
  );
};

export default MatrixRain;
