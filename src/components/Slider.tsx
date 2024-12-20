import React from 'react';

interface SliderProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
}

const Slider: React.FC<SliderProps> = ({ isActive, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isActive);
  };

  return (
    <div className="slider-container">
      <label className="switch">
        <input type="checkbox" checked={isActive} onChange={handleToggle} />
        <span className="slider" />
      </label>
    </div>
  );
};

export default Slider;