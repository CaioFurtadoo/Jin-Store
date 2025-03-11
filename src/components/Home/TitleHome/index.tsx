"use client"

import Link from "next/link";
import Image from "next/image";
import sideArrowTitle from "../../../../public/assets/icons/SideArrowTitleW.svg"
import sideArrowTitleW from "../../../../public/assets/icons/SideArrowTitle.svg"
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TitleHomeProps {
    title: string;
    subtitle: string;
    link: string;
}

export const TitleHome: React.FC<TitleHomeProps> = ({title, subtitle, link}) => {
    const uniqueId = `container-${title.toLowerCase().replace(/\s+/g, '-')}`; 

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`#${uniqueId}`, {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: `#${uniqueId}`,
                start: "top 1050px",
                end: "bottom 500px",
                scrub: true
            }
        });

        return () => {
            gsap.killTweensOf(`#${uniqueId}`);
        };
    }, [uniqueId]);

    return(
        <div id={uniqueId} className="flex translate-x-[-50px]  opacity-0 justify-between w-[1352px] items-center">
            <div className="flex gap-4 items-center">
                <h1 className="text-[18px] font-bold text-[#030712] leading-0">{title}</h1>
                <p className="text-[13px] text-[#9CA3AF] font-light">{subtitle}</p>
            </div>
            <Link href={link} className="shadow-sm shadow-[#ccced1] cursor-pointer group hover:w-[110px] w-[80px] hover:bg-[#634C9F] transition-all hover:text-white flex font-bold text-[#212529] text-[12px] pl-[15px] py-[8px] items-center duration-300 bg-white rounded-full">
                View All
                <Image className="translate-x-[-5px] opacity-0 group-hover:opacity-100 transition duration-700 group-hover:translate-x-4" src={sideArrowTitle} alt="side arrow button title" width={16} height={16} />
            </Link>
        </div>
    );
}