import { ReactComponent as ChatUpIcon } from '@assets/icons/raise_up.svg';
import React, { ReactNode } from 'react';

export type StatisticCardProps = {
  title: string;
  changes: number;
  icon: ReactNode;
  value: number;
};

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  changes,
  icon,
  value
}) => {
  return (
    <div className="shadow-paper rounded-2xl px-6 py-4 md:p-6 flex items-center">
      <div className="flex-1">
        <h5 className="text-sm font-semibold mb-2">{title}</h5>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-6 h-6 bg-success/[16%] flex items-center justify-center rounded-full">
            <ChatUpIcon />
          </span>
          <span className="text-sm font-semibold text-grey-700">
            +{changes}%
          </span>
        </div>
        <h4 className="font-bold text-2xl md:text-[32px]">{value}</h4>
      </div>
      <div className="w-14 md:w-16 h-14 md:h-16 p-2 md:p-0 rounded-full bg-primary-200 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};
