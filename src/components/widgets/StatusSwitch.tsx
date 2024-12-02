import { useState } from 'react';
import { Toggle } from '@components/common';

export const StatusSwitch = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2">
      <Toggle enabled={active} onChange={setActive} />
      {active ? 'Active' : 'Disabled'}
    </div>
  );
};
