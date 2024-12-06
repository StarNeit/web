import React, { ReactElement, useCallback, useState } from 'react';
import {
  ConfirmDialog,
  EditPractiseDialog,
  StatisticCard,
  Table
} from '@components/widgets';
import { ReactComponent as ArrowRightIcon } from '@assets/icons/arrow_right.svg';
import { CircleProgress } from '@components/common';
import { STATISTICS, PRACTICES_COLUMNS, PRACTICES } from '@constants';
import { Link } from 'react-router-dom';

const Dashboard = (): ReactElement => {
  const [isOpenDeleteConfirmDialog, setIsOpenDeleteConfirmDialog] =
    useState<boolean>(false);
  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false);

  const handleConfirmDialog = useCallback((status: boolean) => {
    setIsOpenDeleteConfirmDialog(status);
  }, []);

  const handleEditDialog = useCallback((status: boolean) => {
    setIsOpenEditDialog(status);
  }, []);

  return (
    <>
      <div className="mb-6 md:mb-10">
        <h2 className="font-bold text-lg md:text-xl mb-1 md:mb-3">
          Welcome Andrew!
        </h2>
        <p className="text-sm md:text-sm font-light">
          Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel
          risus eleifend laoreet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-[26px]">
        {STATISTICS.map((item, index) => (
          <StatisticCard key={index} {...item} />
        ))}
      </div>

      <div className="shadow-paper rounded-2xl flex flex-col gap-4 md:gap-0 md:flex-row justify-between pl-6 pr-6 md:pl-[38px] xl:pl-[82px] md:pr-[51px] py-6 md:py-[38px] mb-6 md:mb-8">
        <div className="flex items-center gap-6 lg:gap-10">
          <CircleProgress variant="warning" value={24} />
          <div>
            <h5 className="text-xl md:text-2xl font-bold mb-1">24%</h5>
            <div className="text-xs md:text-sm font-light text-grey-600">
              Pending
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <CircleProgress variant="success" value={56} />
          <div>
            <h5 className="text-xl md:text-2xl font-bold mb-1">56%</h5>
            <div className="text-xs md:text-sm font-light text-grey-600">
              Registered
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <CircleProgress variant="info" value={20} />
          <div>
            <h5 className="text-xl md:text-2xl font-bold mb-1">20%</h5>
            <div className="text-xs md:text-sm font-light text-grey-600">
              Post Treatment
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-paper rounded-2xl">
        <div className="px-6 py-4 md:p-6">
          <h5 className="text-lg font-bold">Newest Practises</h5>
        </div>
        <Table
          columns={PRACTICES_COLUMNS}
          data={PRACTICES}
          onEdit={() => handleEditDialog(true)}
          onDelete={() => handleConfirmDialog(true)}
        />
        <div className="border-t border-t-grey-300 px-4 pt-5 pb-6 flex justify-end">
          <Link
            to="/practises"
            className="flex items-center gap-2 text-primary-600 hover:opacity-80">
            <span className="text-sm font-semibold">See All</span>
            <ArrowRightIcon />
          </Link>
        </div>

        <ConfirmDialog
          isOpen={isOpenDeleteConfirmDialog}
          onClose={() => handleConfirmDialog(false)}
        />
        <EditPractiseDialog
          isOpen={isOpenEditDialog}
          onClose={() => handleEditDialog(false)}
        />
      </div>
    </>
  );
};

export default Dashboard;
