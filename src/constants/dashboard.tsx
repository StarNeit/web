import {
  StatisticCardProps,
  StatusSwitch,
  TableColumn
} from '@components/widgets';
import { ReactComponent as PracticeIcon } from '@assets/icons/statistic_practice.svg';
import { ReactComponent as SubscriberIcon } from '@assets/icons/statistic_subscriber.svg';
import { ReactComponent as TreatmentIcon } from '@assets/icons/statistic_treatment.svg';
import { ReactComponent as ConsentIcon } from '@assets/icons/statistic_consents.svg';
import { ReactComponent as FactIcon } from '@assets/icons/statistic_fact.svg';
import React from 'react';
import { Notification, User } from '@types';

export const STATISTICS: StatisticCardProps[] = [
  {
    title: 'Total Practices',
    icon: <PracticeIcon />,
    value: 11,
    changes: 15
  },
  {
    title: 'Total Subscribers',
    icon: <SubscriberIcon />,
    value: 261,
    changes: 15
  },
  {
    title: 'Total Practices',
    icon: <TreatmentIcon />,
    value: 135,
    changes: 15
  },
  {
    title: 'Total Practices',
    icon: <ConsentIcon />,
    value: 135,
    changes: 15
  },
  {
    title: 'Total Practices',
    icon: <ConsentIcon />,
    value: 2159,
    changes: 15
  },
  {
    title: 'Total Practices',
    icon: <FactIcon />,
    value: 2159,
    changes: 15
  }
];

export const PRACTICES_COLUMNS: TableColumn[] = [
  {
    field: 'name',
    label: 'Practise Name'
  },
  {
    field: 'tel',
    label: 'Tel No'
  },
  {
    field: 'email',
    label: 'Email'
  },
  {
    field: 'date',
    label: 'Date Created'
  },
  {
    field: 'status',
    label: 'Status',
    render: () => <StatusSwitch />
  },
  {
    field: 'action',
    label: 'Action'
  }
];

export const PRACTICES = [
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    status: 'active'
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    status: 'active'
  },
  {
    name: 'Cape Fertility Clinic',
    tel: '+21 794 3956',
    email: 'info@capefertility.co.za',
    date: '04/10/2021',
    status: 'active'
  }
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    image: '/user.png',
    title: 'New Registration',
    description: 'Alex Fredricks',
    date: '07 Oct 2022'
  },
  {
    id: '2',
    image: '/user.png',
    title: 'New Constent Added',
    description: 'Blake Robertson',
    date: '07 Oct 2022'
  }
];

export const USER: User = {
  id: '1',
  name: 'Adrian Stefan',
  email: 'adrian@mrfertility.co.za'
};
