import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as UserIcon } from '@assets/icons/user-square.svg';
import { ReactComponent as TrunkIcon } from '@assets/icons/medkit.svg';
import { ReactComponent as FileIcon } from '@assets/icons/file-info-alt.svg';

const PATHS = {
  dashboard: '/dashboard',
  profile: '/profile',
  practises: '/practises',
  logs: '/logs'
};

export const SIDEBAR_ROUTES = [
  {
    icon: HomeIcon,
    title: 'Dashboard',
    path: PATHS.dashboard
  },
  {
    icon: UserIcon,
    title: 'My Profile',
    path: PATHS.profile
  },
  {
    icon: TrunkIcon,
    title: 'Manage Practises',
    path: PATHS.practises
  },
  {
    icon: FileIcon,
    title: 'Logs',
    path: PATHS.logs
  }
];
