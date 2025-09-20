import Link from 'next/link';
import React from 'react';

const data = [
    {
        id: 1,
        name: "Walidur Tanjim",
        description: "I'm a MERN Stack Developer. I'm 25 years old & I wanna be a expert Full Stack Developer"
    },
    {
        id: 2,
        name: "Walidur Rahman",
        description: "I'm a MERN Stack Developer. I'm 25 years old & I wanna be a expert Full Stack Developer"
    },
    {
        id: 3,
        name: "Walidur Rahman Tanjim",
        description: "I'm a MERN Stack Developer. I'm 25 years old & I wanna be a expert Full Stack Developer"
    },
    {
        id: 4,
        name: "MD. Walidur Rahman Tanjim",
        description: "I'm a MERN Stack Developer. I'm 25 years old & I wanna be a expert Full Stack Developer"
    }
]

const ServicesPage = () => {
    return (
        <div className='servicesPage'>
            <div className='container mx-auto w-full px-6 lg:px-8 py-8'>
                <h1 className='text-center text-2xl font-medium text-slate-700'>Services Page</h1>

                <div className='mt-8 grid gap-4 grid-cols-1 sm:gird-cols-2 md:grid-cols-4'>
                    {
                        data?.map(service => {
                            return (
                                <Link href={`/services/${service?.id}`} key={service?.id}>
                                    <div className='border border-gray-300 rounded-md p-2 hover:shadow-md'>
                                        <h1>Name: {service?.name}</h1>
                                        <p>Description: {service?.description}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;