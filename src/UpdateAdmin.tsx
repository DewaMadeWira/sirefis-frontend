import { useRef } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import './App.css';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import { Input } from './components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { AdminData } from './admin-data/columns';

function UpdateAdmin(params: string) {
    const { toast } = useToast();

    const { data, isLoading } = useQuery({
        queryKey: ['gpu'],
        queryFn: async () => {
            const { data } = await axios.post(
                `http://127.0.0.1:8000/api/admin`,
                {
                    admin_id: params,
                }
            );
            return data as AdminData;
        },
    });

    const admin_name: any = useRef(null);
    const admin_email: any = useRef(null);
    const password: any = useRef(null);

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/create_admin`, {
            admin_name: admin_name.current.value,
            admin_email: admin_email.current.value,
            password: password.current.value,
        });
        toast({
            title: 'Item Created',
            description: 'New Admin has added to Database',
            className: 'bg-white border-black border-2 rounded-xl',
        });

        // alert(gpuRef.current.value);
    }

    if (isLoading) {
        return 'loading..';
    }

    return (
        <div className='min-h-screen bg-gray-200'>
            <nav className='bg-green-400'>
                <h1 className='font-bold text-2xl p-2'>SIREFIS</h1>
            </nav>
            <div className='px-14 py-5 flex justify-between'>
                {/* 1st Column */}
                <LeftSideBar></LeftSideBar>
                {/* 2nd Column */}
                <div className='ml-5 w-[90%]'>
                    <SecondColHead title='Update Admin'></SecondColHead>

                    <form
                        onSubmit={handleSubmit}
                        className='border-2 rounded-xl p-7 bg-white border-black mt-5 '
                    >
                        <div className='w-[45%]'>
                            <h4 className=''>Admin Name</h4>
                            <Input
                                placeholder={data?.admin_name}
                                ref={admin_name}
                                type='text'
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Admin Email</h4>
                            <Input
                                placeholder={data?.admin_email}
                                ref={admin_email}
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Password</h4>
                            <Input
                                // placeholder={data?.password}
                                ref={password}
                                className=' mt-2'
                                required
                            ></Input>
                        </div>

                        <button
                            type='submit'
                            className='mt-5 bg-green-400 px-4 p-2 rounded-xl border-black border-2'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateAdmin;
