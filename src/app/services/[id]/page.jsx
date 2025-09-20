import React from 'react';

const UserDetailsPage = ({params}) => {
    const id = params?.id;

    return (
        <div className='userDetailsPage container mx-auto w-full px-6 lg:px-8 py-8'>
            <h1 className='text-center text-2xl font-medium text-slate-700'>User Details Page</h1>
            <p>ID: {id}</p>
        </div>
    );
};

export default UserDetailsPage;