import { getBlogData } from "@/app/libs/api";
import Link from "next/link";
import React from "react";

const Page = async ({ params: { id } }) => {
  const blog = await getBlogData(`blog-post/${id}`);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt-10">
        <div className="container w-full md:max-w-3xl mx-auto">
          <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
            <div className="font-sans">
              <Link href="/">
                Back</Link>
              <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                {blog.title}
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-600">
              Posted by {blog.author} on {new Date(blog.createdAt * 1000).toLocaleDateString()}
              </p>
              <div className="py-6">
                <img className="images" src={blog.img} />
              </div>
              <p className=" text-wrap">{blog.desc}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
