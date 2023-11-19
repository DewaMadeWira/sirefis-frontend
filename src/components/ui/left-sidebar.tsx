import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function LeftSideBar() {
    // const [count, setCount] = useState(0);

    return (
        <div className='min-w-[16%] '>
            <div className='bg-white border-2 border-black rounded-xl p-4'>
                <div className=''>
                    <h2 className='text-xl '>Admin #1</h2>
                </div>
            </div>
            <div className='bg-white border-2 border-black rounded-xl p-4 mt-5'>
                <div className=''>
                    <ul className='flex flex-col gap-8'>
                        <Accordion type='single' collapsible className=''>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>
                                    <h3 className=' font-bold'>GPU</h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul
                                        className='flex flex-col gap-4 ml-10 '
                                        style={{ fontSize: '25' }}
                                    >
                                        <a href='/'>
                                            <li className=' hover:underline '>
                                                GPU Data
                                            </li>
                                        </a>
                                        <a href='/gpu-rank'>
                                            <li className=' hover:underline '>
                                                GPU Recommendation
                                            </li>
                                        </a>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>
                                    <h3 className=' font-bold'>Company</h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul
                                        className='flex flex-col gap-4 ml-10 '
                                        style={{ fontSize: '25' }}
                                    >
                                        <a href='company'>
                                            <li className='cursor-pointer hover:underline'>
                                                Company List
                                            </li>
                                        </a>
                                        <a href='/company-employee'>
                                            <li className='cursor-pointer hover:underline'>
                                                Company Employee List
                                            </li>
                                        </a>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <a href='/admin'>
                            <li className='font-bold hover:underline '>
                                Admin Data
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;
