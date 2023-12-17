import { useEffect, useState } from 'react';
import { GpuRank, columns } from './columns';
import { DataTable } from './data-table';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { apiLink } from '@/Link';

// async function getData(): Promise<Payment[]> {
//     // Fetch data from your API here.
//     return [
//         {
//             id: '728ed52f',
//             amount: 100,
//             status: 'pending',
//             email: 'm@example.com',
//         },
//         // ...
//     ];
// }

// const getData = (): Promise<Payment[]> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('http://127.0.0.1:8000/api/gpu');
//             // resolve([
//             //     {
//             //         id: '123',
//             //         amount: 100,
//             //         status: 'pending',
//             //         email: 'm@example.com',
//             //     },
//             //     {
//             //         id: '123',
//             //         amount: 200,
//             //         status: 'pending',
//             //         email: 'm@example.com',
//             //     },
//             // ]);
//         }, 1000);
//     });
// };

export default function GpuFilter(props: {
    company: string;
    type: string;
    min: string;
    max: string;
}) {
    let amd = 'false';
    let nvidia = 'true';
    let dekstop = 'false';
    let workstation = 'false';

    if (props.company == 'AMD') {
        nvidia = 'false';
        amd = 'true';
    }
    if (props.type == 'Workstation') {
        workstation = 'true';
    }
    if (props.type == 'Desktop') {
        dekstop = 'true';
    }

    const { data, isLoading } = useQuery({
        queryKey: ['gpu-rank'],
        queryFn: async () => {
            const { data } = await axios.post(`${apiLink}/api/gpu-rank`, {
                amd: amd,
                nvidia: nvidia,
                workstation: workstation,
                desktop: dekstop,
                priceMin: props.min,
                priceMax: props.max,
            });
            return data as GpuRank[];
        },
    });
    // const [data, setData] = useState<Payment[]>([]);

    // useEffect(() => {
    //     // Async operation, for example, fetching data from an API
    //     getData().then((result) => {
    //         setData(result);
    //     });
    // }, []);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-1/2'>
                <h2 className='text-2xl'>Loading..</h2>
            </div>
        );
    }

    if (data != null) {
        return (
            <div className='bg-white border-2 border-black rounded-2xl p-3 mt-5'>
                {/* <h1>Hello</h1> */}
                <DataTable columns={columns} data={data!} />
            </div>
        );
    }
}
