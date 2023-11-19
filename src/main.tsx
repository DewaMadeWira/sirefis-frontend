import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route } from 'wouter';
import { DataTable } from './gpu-data/data-table.tsx';
import DemoPage from './gpu-data/page.tsx';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AdminPage from './AdminPage.tsx';
import CompanyPage from './CompanyPage.tsx';
import CompanyEmployeePage from './CompanyEmployeePage.tsx';
import GpuRank from './GpuRank.tsx';
import CreateGpu from './CreateGpu.tsx';

const queryClient = new QueryClient();

const Router = () => (
    <div>
        {/* <Link href='/users/1'>
            <a className='link'>Profile</a>
        </Link> */}
        {/* <Route path='/:link'>
            {(params) => <App params={params.link}></App>}
        </Route> */}
        <Route path='/users/:name'>
            {(params) => <div>Hello, {params.name}!</div>}
        </Route>
        <Route path='/' component={App}></Route>
        <Route path='/admin' component={AdminPage}></Route>
        <Route path='/company' component={CompanyPage}></Route>
        <Route path='/company-employee' component={CompanyEmployeePage}></Route>
        <Route path='/gpu-rank' component={GpuRank}></Route>
        <Route path='/create-gpu' component={CreateGpu}></Route>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
            <Router></Router>
        </QueryClientProvider>
    </React.StrictMode>
);
