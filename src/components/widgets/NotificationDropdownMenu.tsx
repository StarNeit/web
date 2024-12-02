import { ReactComponent as BellIcon } from '@assets/icons/bell.svg';
import { ReactComponent as ClockIcon } from '@assets/icons/clock_outline.svg';
import { ReactComponent as TrashIcon } from '@assets/icons/trash.svg';
import { Popup } from '@components/common';

export const NotificationDropdownMenu = () => {
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
      <div className="px-5 py-4 min-w-[300px] md:min-w-[360px]">
        <p className="text-sm md:text-base font-semibold">Notifications</p>
        <p className="text-grey-600 text-xs md:text-sm font-light">
          You have 2 unread messages
        </p>
      </div>
      <div>
        <div className="flex items-center border-t border-t-grey-300 gap-4 px-4 py-3 md:p-4">
          <img className="w-10 h-10 rounded-full" src="/user.png" alt="user" />
          <div className="flex-1">
            <h5 className="text-sm font-semibold">New Registration</h5>
            <div className="text-xs md:text-sm font-light mb-1">
              Alex Fredricks
            </div>
            <div className="flex items-center gap-1 text-grey-400">
              <ClockIcon className="w-3 md:w-auto" />
              <span className="text-[10px] md:text-xs font-light">
                07 Oct 2022
              </span>
            </div>
          </div>
          <span>
            <TrashIcon className="text-grey-400 cursor-pointer hover:opacity-80" />
          </span>
        </div>
      </div>
      <div className="flex justify-center py-[14px] border-t border-t-grey-300">
        <span className="text-xs md:text-sm font-semibold text-primary cursor-pointer hover:opacity-80">
          Clear All
        </span>
      </div>
    </Popup>
  );
};
