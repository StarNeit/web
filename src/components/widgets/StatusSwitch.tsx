import { useCallback, useState } from 'react';
import { Toggle } from '@components/common';

export const StatusSwitch = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleChangeActive = useCallback((status: boolean) => {
    setActive(status);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Toggle enabled={active} onChange={handleChangeActive} />
      {active ? 'Active' : 'Disabled'}
    </div>
  );
};
