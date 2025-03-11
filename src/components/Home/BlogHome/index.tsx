'use client'

import { BlogCard } from "@/components/Blog/BlogCard"
import blog1 from "../../../../public/assets/Blog/Blog1.svg"
import blog2 from "../../../../public/assets/Blog/Blog2.svg"
import blog3 from "../../../../public/assets/Blog/Blog3.svg"
import blog4 from "../../../../public/assets/Blog/Blog4.svg"
import Link from "next/link"
import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const BlogHome = () => {

    const el = useRef(null)
    const tl = useRef<gsap.core.Timeline | null>(null); 

    useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
    tl.current = gsap.timeline({
        scrollTrigger: {
            trigger: el.current,
            scrub: true,
            start: "top 800px",
            end: "bottom 900px",
        }
    }).fromTo("#blog1",
        { opacity: 0, y: 160 }, 
        { opacity: 1, y: 0 }
    ).fromTo("#blog2",
        { opacity: 0, y: 160 }, 
        { opacity: 1, y: 0 }
    ).fromTo("#blog3",
        { opacity: 0, y: 160 }, 
        { opacity: 1, y: 0 }
    ).fromTo("#blog4",
        { opacity: 0, y: 160 }, 
        { opacity: 1, y: 0 }
    )
}, el)

        return () => {
            gsap.killTweensOf(el.current)
        }
    }, [])

    return(
        <section ref={el}className="z-10 flex gap-[30px] mx-[280px]">
            <BlogCard id="blog1" src={blog1} alt="blog1 image" category="UNCATEGORIZED" title="How grocers are approaching delivery as the market evolves" subtitle="Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass" by="sinan" date="3 Nov 2023"/>
            <BlogCard id="blog2" src={blog2} alt="blog2 image" category="UNCATEGORIZED" title="The Friday Checkout: Food insecurity keeps retailers off balance" subtitle="Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass" by="sinan" date="3 Nov 2023"/>
            <BlogCard id="blog3" src={blog3} alt="blog3 image" category="UNCATEGORIZED" title="Consumer want grocer to use AI to help them save money Dunnhumby" subtitle="Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass" by="sinan" date="3 Nov 2023"/>
            <BlogCard id="blog4" src={blog4} alt="blog4 image" category="UNCATEGORIZED" title="Order up! How grocers are replicating the restaurant experience in retail" subtitle="Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass" by="sinan" date="3 Nov 2023"/>
        </section>
    )
}