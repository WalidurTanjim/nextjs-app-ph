import React from 'react';

export const getSinglePost = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const PostPage = async({ params }) => {
    const p = await params;
    const post = await getSinglePost(p?.id);
    // console.log("Post:", post)

    return (
        <div className='post'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Single Post</h1>

                <div className="mt-8">
                    <p><span className='text-slate-700 font-medium'>Id:</span> {post?.id}</p>
                    <p><span className='text-slate-700 font-medium'>Title:</span> {post?.title}</p>
                    <p><span className='text-slate-700 font-medium'>Body:</span> {post?.body}</p>
                </div>
            </div>
        </div>
    );
};

export default PostPage;