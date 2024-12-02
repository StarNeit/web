import { Switch } from '@headlessui/react';
import React from 'react';

type Props = {
  enabled: boolean;
  onChange: (value: boolean) => void;
};

export const Toggle: React.FC<Props> = ({ enabled, onChange }) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className="group relative flex h-[14px] w-[34px] cursor-pointer rounded-full bg-grey-500/80 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary/[32%]">
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block w-5 h-5 -translate-y-1.5 -translate-x-2 rounded-full bg-grey-200 ring-0 transition duration-200 ease-in-out group-data-[checked]:bg-primary group-data-[checked]:translate-x-3"
      />
    </Switch>
  );
};
