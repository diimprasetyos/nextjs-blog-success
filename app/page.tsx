import Image from "next/image";
import { getBlogData } from "./libs/api";
import BlogList from "@/components/BlogList";
import Header from "@/components/BlogList/Header";

const Page = async () => {
  const blogData = await getBlogData("/blog-post");
  console.log(blogData);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-10">
      <div className="container w-full md:max-w-3xl mx-auto">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">   
            <section>
              <Header title={"Newest Blogs"} subTitle={"Blog ini saya tulis berdasarkan mood"}/>
              <BlogList api={blogData} />
            </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
