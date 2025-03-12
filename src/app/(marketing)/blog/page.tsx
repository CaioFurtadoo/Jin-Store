import { BlogCardBig } from "@/components/Blog/BlogCardBig";
import { PagesText } from "@/components/Pages";
import blog3 from "../../../../public/assets/Blog/BigBlog3.svg"
import blog2 from "../../../../public/assets/Blog/BigBlog2.svg"
import blog1 from "../../../../public/assets/Blog/BigBlog1.svg"
import blogMini3 from "../../../../public/assets/Blog/MiniBlog3.svg"
import blogMini2 from "../../../../public/assets/Blog/MiniBlog2.svg"
import blogMini1 from "../../../../public/assets/Blog/MiniBlog1.svg"
import blogMini4 from "../../../../public/assets/Blog/MiniBlog4.svg"
import twitter from "../../../../public/assets/Blog/Twitter.svg"
import linkedin from "../../../../public/assets/Blog/Linkedin.svg"
import facebook from "../../../../public/assets/Blog/Facebook.svg"
import instragram from "../../../../public/assets/Blog/Instagram.svg"
import Image from "next/image"


const Blog = () => {
    return(
        <>
            <PagesText category="" before="Home" actual="Blog"/>
            <div className="mx-[280px] mb-[150px] flex gap-[45px]">
                <div className="flex flex-col gap-[60px]">
                    <BlogCardBig src={blog1} alt="foto blog 1" title="How grocers are approaching delivery as the market evolves" category="UNCATEGORIZED" date="November 3, 2023" theme="Klbtheme, store, themeforest" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum eum vitae doloribus quis illo doloremque corrupti eaque optio. Qui quod ipsum iusto, illum enim eligendi odit perferendis? Tenetur, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam aspernatur at odit dolorum corrupti error."/>
                    <BlogCardBig src={blog2} alt="foto blog 2" title="The Friday Checkout: Food insecurity keeps retailers off balance" category="UNCATEGORIZED" date="November 3, 2023" theme="Klbtheme, store" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum eum vitae doloribus quis illo doloremque corrupti eaque optio. Qui quod ipsum iusto, illum enim eligendi odit perferendis? Tenetur, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam aspernatur at odit dolorum corrupti error."/>
                    <BlogCardBig src={blog3} alt="foto blog 3" title="Consumer want grocer to use AI to help them save money Dunnhumby" category="UNCATEGORIZED" date="November 3, 2023" theme="Klbtheme, themeforest" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, earum eum vitae doloribus quis illo doloremque corrupti eaque optio. Qui quod ipsum iusto, illum enim eligendi odit perferendis? Tenetur, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsam aspernatur at odit dolorum corrupti error."/>
                </div>
                <div className="flex flex-col gap-[25px]">
                    <div className="flex flex-col gap-5 pb-[25px] border-b border-[#E5E7EB]">
                        <h1 className="font-semibold text-[#030712] text-[14px]">Blog Post List</h1>
                        <div className="hover:scale-105 transition-all duration-500 cursor-pointer flex gap-5 items-center">
                                <Image className="rounded-full" src={blogMini1} alt="blog 1 image rounded" width={56} height={56}></Image>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#030712] font-bold text-[14px] leading-5">How grocers are approaching delivery as the market evolves</p>
                                <p className="text-[11px] text-[#374151]">November 3, 2023</p>
                            </div>
                        </div>
                        <div className="hover:scale-105 transition-all duration-500 cursor-pointer flex gap-5 items-center">
                                <Image className="rounded-full" src={blogMini2} alt="blog 2 image rounded" width={56} height={56}></Image>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#030712] font-bold text-[14px] leading-5">The Friday Checkout: Food insecurity keeps retailers off balance</p>
                                <p className="text-[11px] text-[#374151]">November 3, 2023</p>
                            </div>
                        </div>
                        <div className="hover:scale-105 transition-all duration-500 cursor-pointer flex gap-5 items-center">
                                <Image className="rounded-full" src={blogMini3} alt="blog 3 image rounded" width={56} height={56}></Image>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#030712] font-bold text-[14px] leading-5">Consumer want grocer to use AI to help them save money Dunnhumby</p>
                                <p className="text-[11px] text-[#374151]">November 3, 2023</p>
                            </div>
                        </div>
                        <div className="hover:scale-105 transition-all duration-500 cursor-pointer flex gap-5 items-center">
                                <Image className="rounded-full" src={blogMini4} alt="blog 4 image rounded" width={56} height={56}></Image>
                            <div className="flex flex-col gap-2">
                                <p className="text-[#030712] font-bold text-[14px] leading-5">Order up! How grocers are replicating the restaurant experience in retail</p>
                                <p className="text-[11px] text-[#374151]">November 3, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-semibold text-[14px] text-[#030712]">Social Media Widget</h1>
                        <ul className="flex flex-col gap-3">
                            <li className="bg-[#1877F2] hover:translate-x-[-5px] transition-all duration-300 cursor-pointer rounded-md p-3 text-white font-bold text-[12px] flex gap-2.5"><Image src={facebook} alt="Icone facebook"></Image>facebook</li>
                            <li className="bg-[#1DA1F2] hover:translate-x-[-5px] transition-all duration-300 cursor-pointer rounded-md p-3 text-white font-bold text-[12px] flex gap-2.5"><Image src={twitter} alt="Icone twitter"></Image>twitter</li>
                            <li className="bg-[#FD1D1D] hover:translate-x-[-5px] transition-all duration-300 cursor-pointer rounded-md p-3 text-white font-bold text-[12px] flex gap-2.5"><Image src={instragram} alt="Icone instagram"></Image>instagram</li>
                            <li className="bg-[#0077B5] hover:translate-x-[-5px] transition-all duration-300 cursor-pointer rounded-md p-3 text-white font-bold text-[12px] flex gap-2.5"><Image src={linkedin} alt="Icone facebook"></Image>linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;