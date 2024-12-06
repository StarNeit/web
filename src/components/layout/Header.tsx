import { useCallback, useState } from 'react';
import {
  NotificationDropdownMenu,
  ProfileDropdownMenu
} from '@components/widgets';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import { NOTIFICATIONS, USER } from '@constants';
import { Notification } from '@types';

export const Header = () => {
  const [notifications, setNotifications] =
    useState<Notification[]>(NOTIFICATIONS);

  const handleClearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const handleRemoveMessage = (id: string) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <nav className="flex justify-between items-center gap-3 px-6 md:px-10 bg-white h-16 md:h-[76px]">
      <div className="block lg:hidden">
        <LogoIcon />
      </div>
      <div className="flex-1" />
      <NotificationDropdownMenu
        messages={notifications}
        onClear={handleClearAll}
        onRemoveMessage={handleRemoveMessage}
      />
      <ProfileDropdownMenu user={USER} />
    </nav>
  );
};
