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
import { apiLink } from '@/Link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string;
//     amount: number;
//     status: 'pending' | 'processing' | 'success' | 'failed';
//     email: string;
// };

export type CompanyData = {
    company_id: number;
    company_name: string;
    ceo: string;
    location: string;
};

export const columns: ColumnDef<CompanyData>[] = [
    {
        accessorKey: 'company_id',
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
                        Company <br /> ID
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const id = parseFloat(row.getValue('company_id'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{id}</div>;
        },
    },
    {
        accessorKey: 'company_name',
        header: 'Company Name',
    },
    {
        accessorKey: 'ceo',
        header: 'Ceo',
    },
    {
        accessorKey: 'location',
        header: 'Location',
    },
    {
        accessorKey: 'company_id',
        header: 'Actions',
        cell: ({ row }) => {
            const { toast } = useToast();
            const company = row.original;

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
                        <a href={`/update-company/${company.company_id}`}>
                            <DropdownMenuItem>
                                Update Company {company.company_name}
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuItem
                            onClick={() => {
                                axios.post(
                                    `${apiLink}/api/delete_data_company`,
                                    {
                                        company_id: company.company_id,
                                    }
                                );
                                toast({
                                    title: 'Company Deleted',
                                    description:
                                        'A Company has deleted from Database',
                                    className:
                                        'bg-white border-black border-2 rounded-xl',
                                });
                            }}
                        >
                            Delete Company
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
