import React from 'react';

const AboutSlugPages = async({params}) => {
    const URLParams = await params;
    // console.log(URLParams?.slugs)

    return (
        <div className='aboutSlugPages'>
            <div className='container mx-auto w-full px-6 lg:px-8 py-8'>
                <h1 className='text-center text-2xl font-medium text-slate-700'>About Slug Page</h1>
            </div>
        </div>
    );
};

export default AboutSlugPages;