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

export type AdminData = {
    admin_id: number;
    admin_name: string;
    admin_email: string;
    // password: string;
};

export const columns: ColumnDef<AdminData>[] = [
    {
        accessorKey: 'admin_id',
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
                        Admin <br /> ID
                        <ArrowUpDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            );
        },
        cell: ({ row }) => {
            const id = parseFloat(row.getValue('admin_id'));
            // const formatted = new Intl.NumberFormat('en-US', {
            //     style: 'currency',
            //     currency: 'USD',
            // }).format(amount);

            return <div className='text-right font-medium'>{id}</div>;
        },
    },
    {
        accessorKey: 'admin_name',
        header: 'Admin Name',
    },
    {
        accessorKey: 'admin_email',
        header: 'Admin Email',
    },
    {
        accessorKey: 'gpu_id',
        header: 'Actions',
        cell: ({ row }) => {
            const { toast } = useToast();
            const admin = row.original;
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
                        <a href={`/update-admin/${admin.admin_id}`}>
                            <DropdownMenuItem>
                                Update Admin {admin.admin_name}
                            </DropdownMenuItem>
                        </a>
                        <DropdownMenuItem
                            onClick={() => {
                                axios.post(
                                    `http://127.0.0.1:8000/api/delete_admin`,
                                    {
                                        admin_id: admin.admin_id,
                                    }
                                );
                                toast({
                                    title: 'Admin Deleted',
                                    description:
                                        'An Admin has deleted from Database',
                                    className:
                                        'bg-white border-black border-2 rounded-xl',
                                });
                            }}
                        >
                            Delete Admin
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
