"use client"

import Image from "next/image"
import bgPromo from "../../../../public/assets/Background/BgPromo.svg"
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const BgPromo = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`#bgPromo`, {
            opacity: 1,
            scrollTrigger: {
                trigger: `#bgPromo`,
                start: "top 950px",
                end: "bottom 600px",
                scrub: true
            }
        });

        return () => {
            gsap.killTweensOf(`#bgPromo`);
        };
    }, []);

    return (
        <section className="flex justify-center opacity-0 items-center hover:scale-[103%] transition-all duration-300">
            <div id="bgPromo" className="opacity-0">
                <Image src={bgPromo} alt="background promo" width={0} height={0} className="w-auto h-auto" />
            </div>
        </section>
    );
};
