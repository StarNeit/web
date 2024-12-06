import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ConfirmDialog: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
            <DialogTitle as="h3" className="text-2xl font-medium">
              Delete Confirm Dialog
            </DialogTitle>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
