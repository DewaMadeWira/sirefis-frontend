import { useRef } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import './App.css';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import { Input } from './components/ui/input';

function CreateCompanyEmployee() {
    const { toast } = useToast();

    const employee_name: any = useRef(null);
    const employee_email: any = useRef(null);
    const password: any = useRef(null);
    const company: any = useRef(null);

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/create_data_company_employee`, {
            employee_name: employee_name.current.value,
            employee_email: employee_email.current.value,
            password: password.current.value,
            company_id: company.current.value,
        });
        toast({
            title: 'Item Created',
            description: 'New Employee has added to Database',
            className: 'bg-white border-black border-2 rounded-xl',
        });

        // alert(gpuRef.current.value);
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
                    <SecondColHead title='Create Company'></SecondColHead>

                    <form
                        onSubmit={handleSubmit}
                        className='border-2 rounded-xl p-7 bg-white border-black mt-5 '
                    >
                        <div className='w-[45%]'>
                            <h4 className=''>Employee Name</h4>
                            <Input
                                ref={employee_name}
                                type='text'
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Employee Email</h4>
                            <Input
                                ref={employee_email}
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Password</h4>
                            <Input
                                ref={password}
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Company</h4>
                            <Input
                                ref={company}
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

export default CreateCompanyEmployee;
