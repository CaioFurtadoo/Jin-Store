"use client"

import Image, {StaticImageData} from "next/image";
import sideArrow from "../../../../public/assets/icons/SideArrowTitleW.svg"
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BannerProps {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    id: number;
    title: string;
    subtitle: string;
    border: string;
}

export const BannerHome: React.FC<BannerProps> = ({src, alt, width, height, id, title, subtitle, border}) => {
    const uniqueId = `container-${title.toLowerCase().replace(/\s+/g, '-')}`; 

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`#${uniqueId}`, {
            opacity: 1,
            scrollTrigger: {
                trigger: `#${uniqueId}`,
                start: "top 950px",
                end: "bottom 600px",
                scrub: true
            }
        });

        return () => {
            gsap.killTweensOf(`#${uniqueId}`);
        };
    }, [uniqueId]);


    return(
        <div id={uniqueId} className={` opacity-0 relative ${border}`}>
            <div className={`absolute ${id === 1 ? "px-[30px] py-[27px] w-[370px]" : id === 2 ? "px-[20px] py-[32px] w-[300px]" : "p-7 w-[470px]" }`}>
                <div className={`mb-[10px] text-[12px] ${id === 1 || 3 ? "font-semibold text-[#7C2D12] py-[3.5px] px-2 bg-[#FFEDD5] w-[108px] rounded-full" : "text-[#EA580C] font-medium"}`}>Only This Week</div>
                <h1 className={`mb-[9px] text-[#111827] font-extrabold ${id === 1 ? "leading-[35px] text-[28px]" : id === 2 ? "leading-[30px] text-[22px]" : "leading-[40px] text-[30px]"}`}>{title}</h1>
                <p className={`text-[#6B7280] mb-[18px] text-[13px] ${id === 3 ? "w-[400px]" : ""}`}>{subtitle}</p>
                <div className="shadow-sm shadow-[#d3d0ca] cursor-pointer group hover:w-[110px] w-[80px]  hover:bg-[#634C9F] transition-all hover:text-white flex  font-bold text-[#212529] text-[12px] pl-[15px] py-[8px] items-center duration-300 bg-white rounded-full ">View All<Image className=" translate-x-[-5px] opacity-0 group-hover:opacity-100 transition duration-700 group-hover:translate-x-4" src={sideArrow} alt="side arrow button title" width={16} height={16}></Image></div>
            </div>
            <Image className={`${border}`} src={src} alt={alt} width={width} height={height}></Image>
        </div>
    )
}