import { useRef, useState } from 'react';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

import './App.css';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import { Input } from './components/ui/input';
import { Redirect } from 'wouter';

import { Link } from 'wouter';

function RecommendationForm() {
    const { toast } = useToast();

    const [company, setCompany] = useState('');
    const [type, setType] = useState('');
    // let company: any = useRef(null);
    // let type: any = useRef(null);
    const hargaMinimum: any = useRef(null);
    const hargaMaksimum: any = useRef(null);

    function handleSubmit(event: any) {
        event.preventDefault();
        // alert('ello');
        <Redirect to={`/gpu-rank/`} />;

        // axios.post(`http://127.0.0.1:8000/gpu-mabac`, {
        //     company_name: company_name.current.value,
        //     ceo: ceo.current.value,
        //     location: location.current.value,
        // });
        // toast({
        //     title: 'Item Created',
        //     description: 'New Company has added to Database',
        //     className: 'bg-white border-black border-2 rounded-xl',
        // });

        // alert(gpuRef.current.value);
    }

    const onCompanyChange = (e: any) => {
        setCompany(e.target.value);
    };
    const onTypeChange = (e: any) => {
        setType(e.target.value);
    };

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
                    <SecondColHead title='Find Recommendation'></SecondColHead>

                    <form
                        onSubmit={handleSubmit}
                        className='border-2 rounded-xl p-7 bg-white border-black mt-5 '
                    >
                        <div className='w-[45%]'>
                            <h4 className=''>Company</h4>
                            <div className='flex gap-5 mt-5 mb-5'>
                                <div className=''>
                                    <input
                                        type='radio'
                                        id='NVIDIA'
                                        name='company'
                                        value='NVIDIA'
                                        onChange={(e) =>
                                            setCompany(e.target.value)
                                        }
                                        // checked={company.current === 'NVIDIA'}
                                    ></input>
                                    <label htmlFor='NVIDIA'>NVIDIA</label>
                                </div>
                                <div className=''>
                                    <input
                                        type='radio'
                                        id='AMD'
                                        name='company'
                                        value='AMD'
                                        onChange={(e) =>
                                            setCompany(e.target.value)
                                        }
                                    ></input>
                                    <label htmlFor='AMD'>AMD</label>
                                </div>
                            </div>
                            <h4 className=''>Tipe</h4>
                            <div className='flex gap-5 mt-5 mb-5'>
                                <div className=''>
                                    <input
                                        type='radio'
                                        id='Default'
                                        name='type'
                                        value='Default'
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    ></input>
                                    <label htmlFor='Default'>Default</label>
                                </div>
                                <div className=''>
                                    <input
                                        type='radio'
                                        id='Desktop'
                                        name='type'
                                        value='Desktop'
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    ></input>
                                    <label htmlFor='Desktop'>Desktop</label>
                                </div>
                                <div className=''>
                                    <input
                                        type='radio'
                                        id='Workstation'
                                        name='type'
                                        value='Workstation'
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    ></input>
                                    <label htmlFor='Workstation'>
                                        Workstation
                                    </label>
                                </div>
                            </div>
                            <h4 className=''>Harga Minimum</h4>
                            <Input
                                ref={hargaMinimum}
                                className=' mt-2'
                                required
                            ></Input>
                            <h4 className=''>Harga Maksimum</h4>
                            <Input
                                ref={hargaMaksimum}
                                className=' mt-2'
                                required
                            ></Input>
                        </div>
                        <Link
                            href={`/gpu-rank/${company}/${type}`}
                            className='active'
                        >
                            <button
                                type='submit'
                                className='mt-5 bg-green-400 px-4 p-2 rounded-xl border-black border-2'
                            >
                                Submit
                            </button>
                        </Link>
                        ;
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecommendationForm;
