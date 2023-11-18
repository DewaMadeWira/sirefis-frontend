import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Route } from 'wouter';
import CreateGpu from './CreateGpu.tsx';

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
        <Route path='/tambah-gpu' component={CreateGpu}></Route>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <App /> */}
        <Router></Router>
    </React.StrictMode>
);
