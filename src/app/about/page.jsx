"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter();
    const isLoggedIn = true;
    const handleNavigation = () => {
        if(isLoggedIn){
            router.push('/about/address');
        }else{
            router.push('/');
        }
    }

    return (
        <div className='aboutPage'>
            <div className='container mx-auto w-full px-6 lg:px-8 py-8'>
                <h1 className='text-center text-2xl font-medium text-slate-700'>About Page</h1>

                <div className='flex gap-5 items-center justify-center w-full mt-8'>
                    <Link href={`/about/address`}><button className='px-5 py-1 border border-gray-500 rounded'>Address</button></Link>
                    <button className='px-5 py-1 border border-gray-500 rounded' onClick={handleNavigation}>Address</button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;