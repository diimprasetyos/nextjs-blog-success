import Link from 'next/link'
import React from 'react'

const BlogList = ({api}) => {
  return (
    <div>
        {api.map((blog,index) => {
            return (
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                <Link key={index} href={`/blog/${blog.id}`} className="bg-white overflow-hidden cursor-pointer">
                    <img src={blog.img} className="w-full h-64 object-cover"/>
                    <div className='py-4'>
                    <h3 className="text-sm py-2">Posted by {blog.author} on {new Date(blog.createdAt * 1000).toLocaleDateString()}</h3>
                    <p className="font-bold text-3xl py-2">{blog.title}</p>
                    <p className="text-base py-2">{blog.desc.length > 500 ? `${blog.desc.slice(0, 500)}...` : blog.desc}</p>
                    </div>
                </Link>
                </div>
            )
        })}
    </div>
  )
}

export default BlogList