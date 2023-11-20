import { useRef } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import './App.css';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import { Input } from './components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { GpuData } from './gpu-data/columns';

// type ParamsType = {
//     params: string;
// };
function CreateGpu(params: string) {
    const { data, isLoading } = useQuery({
        queryKey: ['gpu'],
        queryFn: async () => {
            const { data } = await axios.post(
                `http://127.0.0.1:8000/api/get-gpu`,
                {
                    gpu_id: params,
                }
            );
            return data as GpuData;
        },
    });

    const { toast } = useToast();

    const gpuRef: any = useRef(null);
    const g3dRef: any = useRef(null);
    const g2dRef: any = useRef(null);
    const priceRef: any = useRef(null);
    const valueRef: any = useRef(null);
    const tdpRef: any = useRef(null);
    const performanceRef: any = useRef(null);
    const dateRef: any = useRef(null);
    const categoryRef: any = useRef(null);
    const companyRef: any = useRef(null);

    function handleSubmit(event: any) {
        event.preventDefault();

        axios.post(`http://127.0.0.1:8000/api/create_data`, {
            gpu_name: gpuRef.current.value,
            G3Dmark: g3dRef.current.value,
            G2Dmark: g2dRef.current.value,
            price: priceRef.current.value,
            gpu_value: valueRef.current.value,
            TDP: tdpRef.current.value,
            power_performance: performanceRef.current.value,
            test_date: dateRef.current.value,
            category: categoryRef.current.value,
            company: companyRef.current.value,
        });
        toast({
            title: 'Item Created',
            description: 'New GPU has added to Database',
            className: 'bg-white border-black border-2 rounded-xl',
        });

        // alert(gpuRef.current.value);
    }

    if (isLoading) {
        return <h1>Loading..</h1>;
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
                    <SecondColHead title='Update GPU'></SecondColHead>

                    <form
                        onSubmit={handleSubmit}
                        className='border-2 rounded-xl p-7 bg-white border-black mt-5 '
                    >
                        <div className='flex justify-between'>
                            <div className='w-[45%]'>
                                <h4 className=''>GPU Name </h4>
                                <Input
                                    placeholder={data?.gpu_name}
                                    ref={gpuRef}
                                    type='text'
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>G3D Mark</h4>
                                <Input
                                    placeholder={data?.G3Dmark}
                                    ref={g3dRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>G2D Mark</h4>
                                <Input
                                    placeholder={data?.G2Dmark}
                                    ref={g2dRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>Price</h4>
                                <Input
                                    placeholder={data?.price}
                                    ref={priceRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>GPU Value</h4>
                                <Input
                                    placeholder={data?.gpu_value}
                                    ref={valueRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                            </div>
                            <div className='w-[45%]'>
                                <h4 className=''>TDP</h4>
                                <Input
                                    placeholder={data?.TDP}
                                    ref={tdpRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>Power Performance</h4>
                                <Input
                                    placeholder={data?.power_performance}
                                    ref={performanceRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>Test Date</h4>
                                <Input
                                    placeholder={data?.test_date}
                                    ref={dateRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>Category</h4>
                                <Input
                                    placeholder={data?.category}
                                    ref={categoryRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                                <h4 className=''>Company</h4>
                                <Input
                                    placeholder={data?.company.toString()}
                                    ref={companyRef}
                                    className=' mt-2'
                                    required
                                ></Input>
                            </div>
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

export default CreateGpu;
