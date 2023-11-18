'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string;
//     amount: number;
//     status: 'pending' | 'processing' | 'success' | 'failed';
//     email: string;
// };

export type GpuData = {
    gpu_id: number;
    gpu_name: string;
    G3Dmark: string;
    G2Dmark: string;
    price: string;
    gpu_value: string;
    TDP: string;
    power_performance: string;
    test_date: string;
    category: string;
    company: number;
};

export const columns: ColumnDef<GpuData>[] = [
    {
        accessorKey: 'gpu_id',
        header: 'GPU ID',
    },
    {
        accessorKey: 'G3Dmark',
        header: 'G3Dmark',
    },
    {
        accessorKey: 'G2Dmark',
        header: 'G2Dmark',
    },
    {
        accessorKey: 'amount',
        header: ({ column }) => {
            return (
                <div className='text-right'>
                    <Button
                        variant='ghost'
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Amount
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('amount'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className='text-right font-medium'>{formatted}</div>;
        },

        // header: 'Amount',
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const gpu = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    gpu.gpu_id.toString()
                                )
                            }
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
