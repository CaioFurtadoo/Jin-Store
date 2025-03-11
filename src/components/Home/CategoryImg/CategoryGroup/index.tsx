'use client'

import fruit from "../../../../../public/assets/icons/Fruit.svg";
import baby from "../../../../../public/assets/icons/Baby.svg";
import beverages from "../../../../../public/assets/icons/Beverages.svg";
import meat from "../../../../../public/assets/icons/Meat.svg";
import biscuits from "../../../../../public/assets/icons/Biscuits.svg";
import breads from "../../../../../public/assets/icons/Breads.svg";
import breakfast from "../../../../../public/assets/icons/Breakfast.svg";
import frozen from "../../../../../public/assets/icons/Frozen.svg";
import grocery from "../../../../../public/assets/icons/Grocerys.svg";
import { CategoryImg } from "..";
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";




export const CategoryGroup = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("section", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: "section",
                start: "top 750px",
                end: "bottom 400px",
                scrub: true
            }
        })

        return () => {
            gsap.killTweensOf("section")
        }
    }, [])

    return(
        <section  className="flex translate-y-[-100px] opacity-0 gap-[30px] justify-center mt-[70px]">
            <CategoryImg link="/filter?categories=Fruits" src={fruit} alt="Fruits & Vegetables Category" text="Fruits & Vegetables"/>
            <CategoryImg link="/filter?categories=Baby" src={baby} alt="Baby & Pregnancy Category" text="Baby & Pregnancy"/>
            <CategoryImg link="/filter?categories=Beverages" src={beverages} alt="Beverages Category" text="Beverages"/>
            <CategoryImg link="/filter?categories=Meats" src={meat} alt="Meats & Seafood Category" text="Meats & Seafood"/>
            <CategoryImg link="/filter?categories=Biscuits" src={biscuits} alt="Biscuits & Snacks Category" text="Biscuits & Snacks"/>
            <CategoryImg link="/filter?categories=Breads" src={breads} alt="Breads & Bakery Category" text="Breads & Bakery"/>
            <CategoryImg link="/filter?categories=BreakFast" src={breakfast} alt="Breaksfast & Dairy Category" text="Breaksfast & Dairy"/>
            <CategoryImg link="/filter?categories=Frozen%20Foods" src={frozen} alt="Frozen Foods Category" text="Frozen Foods"/>
            <CategoryImg link="/filter?categories=Grocery" src={grocery} alt="Grocery & Staples Category" text="Grocery & Staples"/>
        </section>
    )
}