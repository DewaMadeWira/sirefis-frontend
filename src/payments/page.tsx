import { useEffect, useState } from 'react';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';

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

const getData = (): Promise<Payment[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '123',
                    amount: 100,
                    status: 'pending',
                    email: 'm@example.com',
                },
                {
                    id: '123',
                    amount: 200,
                    status: 'pending',
                    email: 'm@example.com',
                },
            ]);
        }, 1000);
    });
};

export default function DemoPage() {
    const [data, setData] = useState<Payment[]>([]);

    useEffect(() => {
        // Async operation, for example, fetching data from an API
        getData().then((result) => {
            setData(result);
        });
    }, []);

    return (
        <div className='container mx-auto py-10'>
            {/* <h1>Hello</h1> */}
            <DataTable columns={columns} data={data!} />
        </div>
    );
}
