import React from 'react';
import { ReactComponent as ClockIcon } from '@assets/icons/clock_outline.svg';
import { ReactComponent as TrashIcon } from '@assets/icons/trash.svg';
import { Notification } from '@types';

type Props = {
  data: Notification;
  onRemove: () => void;
};

export const NotificationItem: React.FC<Props> = ({ data, onRemove }) => {
  return (
    <div className="flex items-center border-t border-t-grey-300 gap-4 pl-4 pr-5 py-3 md:py-[18px]">
      <img className="w-10 h-10 rounded-full" src={data?.image} alt="user" />
      <div className="flex-1">
        <h5 className="text-sm font-semibold mb-0.5">{data?.title}</h5>
        <div className="text-xs md:text-sm font-light mb-1">
          {data?.description}
        </div>
        <div className="flex items-center gap-1 text-grey-400">
          <ClockIcon className="w-3 md:w-auto" />
          <span className="text-[10px] md:text-xs font-light">
            {data?.date}
          </span>
        </div>
      </div>
      <span onClick={onRemove}>
        <TrashIcon className="text-grey-400 cursor-pointer hover:opacity-80" />
      </span>
    </div>
  );
};
