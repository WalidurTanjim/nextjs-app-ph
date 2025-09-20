import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='dashboardLayout'>
            <div className='grid grid-cols-12 w-full'>
                <div className='col-span-3 bg-red-100 py-8'>
                    <h1 className='text-center text-2xl text-slate-700 font-medium'>Side nav</h1>
                </div>

                <div className='col-span-9 bg-green-100'>
                    <h1 className='text-center text-2xl text-slate-700 font-medium'>{children}</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;