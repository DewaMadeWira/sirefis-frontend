import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <div className=''>Menu bar</div>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>GPU</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type='single' collapsible>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger className='pl-10'>
                                    Create GPU
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design
                                    pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default App;
