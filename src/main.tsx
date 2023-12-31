import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route } from 'wouter';

import { Toaster } from '@/components/ui/toaster';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import AdminPage from './AdminPage.tsx';
import CompanyPage from './CompanyPage.tsx';
import CompanyEmployeePage from './CompanyEmployeePage.tsx';
import GpuRank from './GpuRank.tsx';
import CreateGpu from './CreateGpu.tsx';
import CreateAdmin from './CreateAdmin.tsx';

import CreateCompany from './CreateCompany.tsx';
import CreateCompanyEmployee from './CreateCompanyEmployee.tsx';
import UpdateAdmin from './UpdateAdmin.tsx';
import UpdateCompany from './UpdateCompany.tsx';
import RecommendationForm from './RecommendationForm.tsx';
import GpuTop from './GpuTop.tsx';
import GpuFilter from './gpu-filter/page.tsx';
import GpuFilterRank from './GpuFilterRank.tsx';
import UpdateGpu from './UpdateGpu.tsx';

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
        {/* <Route path='/gpu-rank' component={GpuRank}></Route> */}
        <Route path='/gpu-rank' component={RecommendationForm}></Route>
        <Route path='/top-rank' component={GpuTop}></Route>
        <Route
            path='/update-gpu/:id'
            component={(params) => UpdateGpu(params.params.id)}
        ></Route>
        <Route
            path='/update-admin/:id'
            component={(params) => UpdateAdmin(params.params.id)}
        ></Route>
        <Route
            path='/gpu-rank/:company/:type/:minimum/:maksimum'
            // component={(params) => (
            //     <div>
            //         Hello,{' '}
            //         {params.params.company +
            //             ' ' +
            //             params.params.type +
            //             ' ' +
            //             params.params.minimum +
            //             ' ' +
            //             params.params.maksimum}
            //         !
            //     </div>
            // )}
            component={(params) =>
                GpuFilterRank(
                    params.params.company,
                    params.params.type,
                    params.params.minimum,
                    params.params.maksimum
                )
            }
        ></Route>
        <Route
            path='/update-company/:id'
            component={(params) => UpdateCompany(params.params.id)}
        ></Route>
        <Route path='/create-gpu' component={CreateGpu}></Route>
        <Route path='/create-admin' component={CreateAdmin}></Route>
        <Route path='/create-company' component={CreateCompany}></Route>
        <Route
            path='/create-company-employee'
            component={CreateCompanyEmployee}
        ></Route>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
            <Toaster />
            <Router></Router>
        </QueryClientProvider>
    </React.StrictMode>
);
