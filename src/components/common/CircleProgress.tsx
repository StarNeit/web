import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';

const pathColorVariants = {
  warning: '#FF966B',
  success: '#54D62C',
  info: '#1890FF'
};

type Props = {
  variant: 'warning' | 'success' | 'info';
  value?: number;
};

export const CircleProgress: React.FC<Props> = ({ variant, value = 0 }) => {
  return (
    <div className="w-16 md:w-20 h-16 md:h-20">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: pathColorVariants[variant],
          textColor: '#414141',
          textSize: 14,
          trailColor: 'rgba(157, 157, 157, 0.16)'
        })}
      />
    </div>
  );
};
