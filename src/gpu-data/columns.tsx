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
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

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
        accessorKey: 'G3Dmark',
        header: 'G3Dmark',
    },
    {
        accessorKey: 'G2Dmark',
        header: 'G2Dmark',
    },
    {
        accessorKey: 'price',
        // header: 'Price',
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
            const amount = parseFloat(row.getValue('price'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className='text-right font-medium'>{formatted}</div>;
        },
    },
    {
        accessorKey: 'gpu_value',
        header: 'GPU Value',
    },
    {
        accessorKey: 'TDP',
        header: 'TDP',
    },
    {
        accessorKey: 'power_performance',
        header: 'Power Performance',
    },
    {
        accessorKey: 'test_date',
        header: ({ column }) => {
            return (
                <div className='text-right'>
                    <Button
                        variant='ghost'
                        onClick={() =>
                            column.toggleSorting(column.getIsSorted() === 'asc')
                        }
                    >
                        Test <br /> Date
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const test_date = parseFloat(row.getValue('test_date'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{test_date}</div>;
        },
    },
    {
        accessorKey: 'category',
        header: 'Category',
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
    {
        accessorKey: 'gpu_id',
        header: 'Actions',
        cell: ({ row }) => {
            const { toast } = useToast();
            const gpu = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end' className='bg-white'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <a href={`update-gpu/${gpu.gpu_id}`}>
                            <DropdownMenuItem>Update GPU</DropdownMenuItem>
                        </a>
                        <DropdownMenuItem
                            onClick={() => {
                                axios.post(
                                    `http://127.0.0.1:8000/api/delete_data`,
                                    {
                                        gpu_id: gpu.gpu_id,
                                    }
                                );
                                toast({
                                    title: 'GPU Deleted',
                                    description:
                                        'A GPU has deleted from Database',
                                    className:
                                        'bg-white border-black border-2 rounded-xl',
                                });
                            }}
                        >
                            Delete GPU
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    gpu.gpu_id.toString()
                                )
                            }
                        >
                            Copy GPU ID {gpu.gpu_id.toString()}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>
                            View payment details
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
