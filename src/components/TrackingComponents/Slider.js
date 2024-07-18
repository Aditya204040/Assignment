import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
  const handleChange = (event) => {
    setSpeed(Number(event.target.value));
  };

  return (
    <div className='flex-col justify-center my-8 '>
      <label className='font-semibold'>Speed: {speed}x</label>
      <input
          type="range"
          min="1"
          max="100"
          className="m-4 w-[88%] pointer-cursor rounded-lg mx-auto "
          value={speed}
          onChange={handleChange}
          style={{
            WebkitAppearance: 'none',
            appearance: 'none',
            height: '0.93rem',
            background: '#FE8C00',
            outline: 'none',
            opacity: 0.7,
            transition: 'opacity .15s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.opacity = 1)}
          onMouseOut={(e) => (e.target.style.opacity = 0.7)}
      />
    </div>
  );
};

export default SpeedSlider;
