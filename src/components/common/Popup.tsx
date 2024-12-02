import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import React, { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren & {
  anchor: ReactNode;
};

export const Popup: React.FC<Props> = ({ anchor, children }) => {
  return (
    <Popover>
      <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none">
        {anchor}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={{ to: 'bottom end', gap: '34px' }}
        className="relative !overflow-visible rounded-xl drop-shadow-popover bg-white transition duration-200 translate-x-1 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 popup-narrow">
        {children}
      </PopoverPanel>
    </Popover>
  );
};
