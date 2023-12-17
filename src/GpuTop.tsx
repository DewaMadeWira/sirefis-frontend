import './App.css';
import AdminTable from './admin-data/admin-page';
import CompanyTable from './company-data/page';
import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';
import GpuRankTable from './gpu-rank/page';
import GpuTopTable from './gpu-top/page';

function GpuTop() {
    // const [count, setCount] = useState(0);

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
                    <SecondColHead title='List GPU Rank'></SecondColHead>
                    <GpuTopTable></GpuTopTable>
                </div>
            </div>
        </div>
    );
}

export default GpuTop;
