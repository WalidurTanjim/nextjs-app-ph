import NotFoundPage from '@/app/not-found';
import React from 'react';

const UserDetailsPage = ({ params }) => {
    const id = params?.id;

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

    const singleData = data.find(d => d?.id == id);

    if (singleData) {
        return (
            <div className='userDetailsPage container mx-auto w-full px-6 lg:px-8 py-8'>
                <h1 className='text-center text-2xl font-medium text-slate-700'>User Details Page</h1>
                <div className="mt-8">
                    <p>ID: {id}</p>
                    <h1>Name: {singleData?.name}</h1>
                    <p>Description: {singleData?.description}</p>
                </div>
            </div>
        );
    }else{
        return <NotFoundPage />
    }
};

export default UserDetailsPage;