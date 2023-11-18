import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function LeftSideBar() {
    // const [count, setCount] = useState(0);

    return (
        <div className='w-1/4  '>
            <div className='bg-white border-2 border-black rounded-xl p-4'>
                <div className=''>
                    <h2 className='text-xl '>Admin #1</h2>
                </div>
            </div>
            <div className='bg-white border-2 border-black rounded-xl p-4 mt-5'>
                <div className=''>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>
                                <h3 className='text-lg font-bold'>GPU</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul
                                    className='flex flex-col gap-4 ml-10 '
                                    style={{ fontSize: '25' }}
                                >
                                    <li className='cursor-pointer hover:underline'>
                                        List GPU
                                    </li>
                                    <a href='/tambah-gpu'>
                                        <li className='cursor-pointer hover:underline'>
                                            Tambah GPU
                                        </li>
                                    </a>
                                    <li className='cursor-pointer hover:underline'>
                                        Update GPU
                                    </li>
                                    <li className='cursor-pointer hover:underline'>
                                        Delete GPU
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-2'>
                            <AccordionTrigger>
                                <h3 className='text-lg font-bold'>Company</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul
                                    className='flex flex-col gap-4 ml-10 '
                                    style={{ fontSize: '25' }}
                                >
                                    <li className='cursor-pointer hover:border-b-2'>
                                        List Company
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Tambah Company
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Update Company
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Delete Company
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-3'>
                            <AccordionTrigger>
                                <h3 className='text-lg font-bold'>Admin</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul
                                    className='flex flex-col gap-4 ml-10 '
                                    style={{ fontSize: '25' }}
                                >
                                    <li className='cursor-pointer hover:border-b-2'>
                                        List Admin
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Tambah Admin
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Update Admin
                                    </li>
                                    <li className='cursor-pointer hover:border-b-2'>
                                        Delete Admin
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
