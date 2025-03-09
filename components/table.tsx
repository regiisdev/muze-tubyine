'use client'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import {
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Table as TremorTable,
} from '@tremor/react';
import React, { useState } from 'react';
import EmptyStateIndicator from './empty-state-indicator';

export interface ITableProps<T> {
    columns: {
        key: string,
        label: string
    }[],
    data: T[],
    paginate?: boolean,
    noHeader?: boolean,
}

export interface IRow { [key: string]: string }

export function Table<T>({ columns, data, paginate = false, noHeader = false }: ITableProps<T>) {
    const [sortConfig, setSortConfig] = useState<{ key: string | null, direction: string }>({ key: null, direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = paginate ? 12 : data.length;

    const sortedData = React.useMemo(() => {
        if (sortConfig.key != null && sortConfig.direction != undefined) {
            return [...data].sort((a: any, b: any) => {
                if (a[(sortConfig.key as string)] < b[(sortConfig.key as string)]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[(sortConfig.key as string)] > b[(sortConfig.key as string)]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    }, [data, sortConfig]);

    const handleSort = (columnKey: string) => {
        let direction = 'ascending';
        if (sortConfig.key === columnKey && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: columnKey, direction });
    };

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const paginatedData = React.useMemo(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        return sortedData.slice(startIndex, startIndex + rowsPerPage);
    }, [currentPage, rowsPerPage, sortedData]);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    if (data.length == 0) return <EmptyStateIndicator />
    return (
        <div className='p- rounded-l-md transition-all duration-700'>
            <TremorTable>
                <TableHead className={noHeader ? 'hidden' : ''}>
                    <TableRow className={`text-start `}>
                        {columns.map((column) => (
                            <TableHeaderCell
                                key={column.key}
                                className="py-3 text-left px-4 cursor-pointer md:max-w-md"
                                onClick={() => handleSort(column.key)}
                            >
                                <span className='text-black'>{column.label}</span>
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {paginatedData.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            className={`${(row as IRow)['id'] == '#highlight' && 'ring-2  ring-brand bg-brand/5 rounded-lg overflow-hidden'} hover:bg-slate-50/5`}
                        >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.key}
                                    className={`py-3 ${rowIndex === paginatedData.length - 1 ? '' : 'border-b border-slate-100'}`}
                                >
                                    <span className='w-full'>
                                        {(row as IRow)[column.key] == '#highlight' ? '' : (row as IRow)[column.key]}
                                    </span>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </TremorTable>

            {paginate && data.length > 0 &&
                <div className="flex gap-2 items-center mt-4 py-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="py-2 px-4 rounded-lg hover:opacity-80 disabled:opacity-50"
                    >
                        <ArrowLeftIcon className='w-4 stroke-black-lighter-100' />
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="py-2 px-4 rounded-lg hover:opacity-80 disabled:opacity-50"
                    >
                        <ArrowRightIcon className='w-4 stroke-black-lighter-100' />
                    </button>
                </div>}
        </div>
    );
}