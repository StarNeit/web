import { ReactComponent as BellIcon } from '@assets/icons/bell.svg';
import { Popup } from '@components/common';
import React from 'react';
import { NotificationItem } from '@components/widgets/NotificationItem';
import { Notification } from '@types';

type Props = {
  messages: Notification[];
  onRemoveMessage?: (id: string) => void;
  onClear?: () => void;
};

export const NotificationDropdownMenu: React.FC<Props> = ({
  messages,
  onRemoveMessage,
  onClear
}) => {
  return (
    <Popup
      anchor={
        <div className="w-11 h-11 rounded-full cursor-pointer hover:opacity-80 relative flex items-center justify-center">
          <BellIcon />
          <span className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-error text-white text-xs font-medium md:font-bold flex items-center justify-center absolute top-1.5 md:top-0.5 right-1.5 md:right-0.5">
            2
          </span>
        </div>
      }>
      <div className="px-5 py-[18px] min-w-[300px] md:min-w-[360px]">
        <p className="text-sm md:text-base font-semibold">Notifications</p>
        <p className="text-grey-600 text-xs md:text-sm font-light">
          {!messages.length
            ? 'No unread messages'
            : `You have ${messages.length} unread messages`}
        </p>
      </div>
      {!!messages.length && (
        <>
          <div>
            {messages.map((message) => (
              <NotificationItem
                key={message.id}
                data={message}
                onRemove={() => onRemoveMessage?.(message.id)}
              />
            ))}
          </div>
          <div className="flex justify-center py-[14px] border-t border-t-grey-300">
            <span
              className="text-xs md:text-sm font-semibold text-primary cursor-pointer hover:opacity-80"
              onClick={() => onClear?.()}>
              Clear All
            </span>
          </div>
        </>
      )}
    </Popup>
  );
};
