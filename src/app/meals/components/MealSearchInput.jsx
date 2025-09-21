"use client";
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();
    
    useEffect(() => {
        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParams}`;
        router.push(url);
    }, [search]);

    return (
        <div className="mt-8 text-center">
            <input type="search" name="" id="" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search meal' className='w-full outline-none border border-gray-300 rounded-md px-5 py-1 focus:ring-2 ring-slate-300 text-slate-700' />
        </div>
    );
};

export default MealSearchInput;