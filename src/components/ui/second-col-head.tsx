import { FC } from 'react';

interface SecondColHeadType {
    title: string;
}

const SecondColHead: FC<SecondColHeadType> = (props): JSX.Element => {
    return (
        <div className='bg-white border-2 border-black rounded-xl p-4'>
            <div className=''>
                <h2 className='text-xl font-bold'>{props.title}</h2>
            </div>
        </div>
    );
};

export default SecondColHead;
