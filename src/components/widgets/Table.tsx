import { ReactComponent as EditIcon } from '@assets/icons/edit.svg';
import { ReactComponent as TrashIcon } from '@assets/icons/trash.svg';
import React, { ReactNode } from 'react';
import clsx from 'clsx';

export type TableColumn = {
  field: string;
  label: string;
  render?: () => ReactNode;
};

export type TableProps = {
  columns: TableColumn[];
  data: Array<Record<string, any>>;
};

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="px-2 overflow-auto">
      <table className="w-full hidden md:table">
        <thead>
          <tr className="text-sm font-semibold text-grey-600">
            {columns.map((column, index) => (
              <th
                key={index}
                className={clsx('bg-grey-200 px-6 py-4 text-left', {
                  'rounded-l-lg': index === 0,
                  'rounded-r-lg text-right': index === columns.length - 1
                })}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => {
                if (column.field === 'action') {
                  return (
                    <td
                      key={columnIndex}
                      className="px-6 py-4 text-left text-sm">
                      <div className="flex justify-end gap-3 text-primary-500">
                        <EditIcon className="cursor-pointer hover:opacity-80" />
                        <TrashIcon className="cursor-pointer hover:opacity-80" />
                      </div>
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={columnIndex}
                      className="px-6 py-4 text-left text-sm whitespace-nowrap">
                      {column.render?.() ?? row[column.field]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="block md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="py-3 flex flex-col gap-3 border-t border-t-grey-300 px-4">
            {columns.map((column, columnIndex) => {
              if (column.field === 'action') {
                return (
                  <div
                    key={columnIndex}
                    className="flex justify-end gap-3 text-primary-500">
                    <EditIcon />
                    <TrashIcon />
                  </div>
                );
              } else {
                return (
                  <div
                    key={columnIndex}
                    className="flex justify-between items-center">
                    <span className="text-xs md:text-sm font-semibold">
                      {column.label}
                    </span>
                    <div className="text-xs md:text-sm">
                      {column.render?.() ?? item[column.field]}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
