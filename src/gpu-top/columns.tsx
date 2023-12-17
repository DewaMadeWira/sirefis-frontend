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

export type GpuRank = {
    gpu_id: number;
    gpu_name: string;
    alternative: string;
    score: string;
    price: string;
};

export const columns: ColumnDef<GpuRank>[] = [
    {
        accessorKey: 'gpu_id',
        // header: 'GPU ID',
        header: ({ column }) => {
            return (
                <div className='text-right'>
                    <Button
                        variant='ghost'
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        GPU <br /> ID
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const id = parseFloat(row.getValue('gpu_id'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{id}</div>;
        },
    },
    {
        accessorKey: 'gpu_name',
        header: 'GPU Name',
    },
    {
        accessorKey: 'score',
        header: ({ column }) => {
            return (
                <div className='text-right'>
                    <Button
                        variant='ghost'
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Score
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const score = parseFloat(row.getValue('score'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{score}</div>;
        },
    },
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
                <div className='text-right'>
                    <Button
                        variant='ghost'
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Price
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const price = parseFloat(row.getValue('price'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{price}</div>;
        },
    },

    // {
    //     accessorKey: 'company',
    //     header: 'Company',
    // },
    // {
    //     accessorKey: 'amount',
    //     header: ({ column }) => {
    //         return (
    //             <div className='text-right'>
    //                 <Button
    //                     variant='ghost'
    //                     onClick={() =>
    //                         column.toggleSorting(column.getIsSorted() === 'asc')
    //                     }
    //                 >
    //                     Amount
    //                     <ArrowUpDown className='ml-2 h-4 w-4' />
    //                 </Button>
    //             </div>
    //         );
    //     },
    //     cell: ({ row }) => {
    //         const amount = parseFloat(row.getValue('amount'));
    //         const formatted = new Intl.NumberFormat('en-US', {
    //             style: 'currency',
    //             currency: 'USD',
    //         }).format(amount);

    //         return <div className='text-right font-medium'>{formatted}</div>;
    //     },

    //     // header: 'Amount',
    // },
];
