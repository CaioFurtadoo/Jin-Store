"use client"

import expand from "../../../../public/assets/icons/Expand.svg"
import Image from "next/image";
import { Modal } from "./Modal";
import { useState } from 'react'



interface propsExpand{
    title: string
    src: string
    alt: string
    valueA: number
    valueB: number
}


export const Expand: React.FC<propsExpand> = ({title, src, alt, valueA, valueB}) => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div>
            <button onClick={() => setIsOpen(!isOpen)}  className="hover:scale-105 transition-all duration-300  hover:shadow-[#6a6b6e] absolute bottom-6 p-3 rounded-full bg-[#fffff] shadow-sm shadow-[#c0c2c7] cursor-pointer">
                <Image src={expand} alt="button expand image" width={26} height={26}></Image>
            </button>
                <Modal src={src} alt={alt} title={title} isOpen={isOpen} valueA={valueA} valueB={valueB} setOpenModal={() => setIsOpen(!isOpen)}/>
        </div>
    )
}