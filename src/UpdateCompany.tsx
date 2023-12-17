import { useRef } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import './App.css';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import { Input } from './components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { CompanyData } from './company-data/columns';
import { apiLink } from './Link';

function UpdateCompany(params: string) {
    const { data, isLoading } = useQuery({
        queryKey: ['gpu'],
        queryFn: async () => {
            const { data } = await axios.post(`${apiLink}/api/company`, {
                company_id: params,
            });
            return data as CompanyData;
        },
    });
    const { toast } = useToast();

    const company_name: any = useRef(null);
    const ceo: any = useRef(null);
    const location: any = useRef(null);

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.post(`${apiLink}/api/create_data_company`, {
            company_name: company_name.current.value,
            ceo: ceo.current.value,
            location: location.current.value,
        });
        toast({
            title: 'Item Created',
            description: 'New Company has added to Database',
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
                    <SecondColHead title='Update Company'></SecondColHead>

                    <form
                        onSubmit={handleSubmit}
                        className='border-2 rounded-xl p-7 bg-white border-black mt-5 '
                    >
                        <div className='w-[45%]'>
                            <h4 className=''>Company Name</h4>
                            <Input
                                placeholder={data?.company_name}
                                ref={company_name}
                                type='text'
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>CEO</h4>
                            <Input
                                placeholder={data?.ceo}
                                ref={ceo}
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Location</h4>
                            <Input
                                placeholder={data?.location}
                                ref={location}
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

export default UpdateCompany;
