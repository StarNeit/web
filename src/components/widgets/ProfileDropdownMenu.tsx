import Avatar from 'react-avatar';
import { ReactComponent as ArrowDownIcon } from '@assets/icons/chevron_down.svg';
import { Popup } from '@components/common';

export const ProfileDropdownMenu = () => {
  return (
    <Popup
      anchor={
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
          <Avatar
            name="Adrian Stefan"
            size="40"
            round
            color="#67ADB914"
            fgColor="#5F97A0"
            className="font-bold"
          />
          <span className="hidden md:block text-sm font-semibold text-grey-700">
            Adrian Stefan
          </span>
          <ArrowDownIcon />
        </div>
      }>
      <div className="px-5 py-3 md:py-4">
        <p className="text-sm md:text-base font-semibold">Adrian Stefan</p>
        <p className="text-grey-600 text-xs md:text-sm font-light">
          adrian@mrfertility.co.za
        </p>
      </div>
      <div className="border-t border-t-grey-300 p-2">
        <div className="rounded-lg text-xs md:text-sm font-light text-grey-700 cursor-pointer hover:bg-grey/[8%] px-4 py-2">
          Profile
        </div>
      </div>
      <div className="border-t border-t-grey-300 p-2">
        <div className="rounded-lg text-xs md:text-sm font-light text-grey-700 cursor-pointer hover:bg-grey/[8%] px-4 py-2">
          Logout
        </div>
      </div>
    </Popup>
  );
};
