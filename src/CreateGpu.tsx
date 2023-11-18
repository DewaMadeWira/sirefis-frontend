import LeftSideBar from './components/ui/left-sidebar';
import SecondColHead from './components/ui/second-col-head';

function CreateGpu() {
    return (
        <div className='h-screen bg-gray-200'>
            <nav className='bg-green-400'>
                <h1 className='font-bold text-2xl p-2'>SIREFIS</h1>
            </nav>
            <div className='px-14 py-5 flex justify-between'>
                {/* 1st Column */}
                <LeftSideBar></LeftSideBar>
                {/* 2nd Column */}
                <div className='ml-5 w-full'>
                    <SecondColHead title='Create GPU'></SecondColHead>
                </div>
            </div>
        </div>
    );
}

export default CreateGpu;
