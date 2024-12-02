import {
  NotificationDropdownMenu,
  ProfileDropdownMenu
} from '@components/widgets';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';

export const Header = () => {
  return (
    <nav className="flex justify-between items-center gap-3 px-6 md:px-10 bg-white h-16 md:h-[76px]">
      <div className="block lg:hidden">
        <LogoIcon />
      </div>
      <div className="flex-1" />
      <NotificationDropdownMenu />
      <ProfileDropdownMenu />
    </nav>
  );
};
