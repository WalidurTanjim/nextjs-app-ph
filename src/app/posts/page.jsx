import React from 'react';

export const getPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const PostsPage = async() => {
    const posts = await getPosts();

    return (
        <div className='posts'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl text-slate-800 font-medium">All Posts</h1>

                <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        posts?.map(post => {
                            return (
                                <div key={post?.id} className='border rounded-md border-gray-300 p-2 hover:shadow-md hover:cursor-pointer'>
                                    <p><span className='text-slate-700 font-medium'>ID:</span> {post?.id}</p>
                                    <p><span className='text-slate-700 font-medium'>Title:</span> {post?.title}</p>
                                    <p><span className='text-slate-700 font-medium'>Body:</span> {post?.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default PostsPage;