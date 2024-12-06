import { useState } from 'react';
import { ReactComponent as LogoIcon } from '@assets/icons/logo.svg';
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '@assets/icons/xmark.svg';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { SIDEBAR_ROUTES } from '@constants';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const location = useLocation();

  const isActivePath = (pathname: string) => {
    return location.pathname.startsWith(pathname);
  };

  return (
    <div
      className={clsx(
        'bg-white w-[280px] border-r border-r-gray-200 fixed top-0 bottom-0 left-0 transition-transform ease-in z-10',
        {
          '-translate-x-0': !isTablet || (isTablet && expanded),
          'drop-shadow-popover': isTablet && expanded,
          '-translate-x-[280px]': isTablet && !expanded
        }
      )}>
      <div className="relative w-full block lg:hidden">
        <span
          className="absolute -right-10 top-12 w-10 h-10 p-3 bg-white rounded-r-2xl shadow-paper cursor-pointer hover:opacity-80"
          onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <CloseIcon className="text-grey-700 -translate-y-0.5" />
          ) : (
            <MenuIcon className="text-grey-700" />
          )}
        </span>
      </div>

      <div className="h-[76px] px-5 flex items-center pt-1">
        <LogoIcon />
      </div>

      <div className="p-5 px-4 flex flex-col gap-1">
        {SIDEBAR_ROUTES.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className={clsx(
              'h-12 px-4 flex items-center gap-4 text-sm font-semibold w-full rounded-lg hover:bg-primary-500/[8%] hover:text-primary-600',
              isActivePath(route.path) && 'text-primary-600 bg-primary-500/[8%]'
            )}>
            <route.icon
              className={clsx(
                'text-primary group-hover:text-primary-600',
                isActivePath(route.path) && 'text-primary-600'
              )}
            />
            {route.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
