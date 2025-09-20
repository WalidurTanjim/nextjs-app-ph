import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='notFound'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <div className='text-center'>
                    <h1 className='text-2xl text-slate-700 font-medium'>Page Not Found</h1>
                    <div className='mt-5'>
                        <Link href={`/`} className='border border-gray-300 px-5 py-1 rounded-md hover:shadow-md'>Go home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;