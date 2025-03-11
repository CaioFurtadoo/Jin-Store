"use client"
import minus from "../../../../public/assets/icons/Menos.svg"
import plus from "../../../../public/assets/icons/Mais.svg"
import Image from "next/image"
import { useState } from 'react'


export const Count = () => {

    const [count, setCount] = useState(0)

    return(
        <div className="flex border border-[#D1D5DB] rounded-md">
            <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))} className="hover:bg-[#e7e8eb] active:bg-[#dbdee2] transition-all duration-100 w-10 h-[100%] cursor-pointer flex items-center justify-center"><Image src={minus} alt="plus image" width={12} height={1}></Image></button>
            <div className="font-medium text-[15px] text-[#020617] w-10 h-[100%] flex items-center justify-center">{count}</div>
            <button onClick={() => setCount(count + 1)} className="hover:bg-[#e7e8eb] active:bg-[#dbdee2] transition-all duration-100 w-10 cursor-pointer h-[100%] flex items-center justify-center"><Image src={plus} alt="plus image" width={11} height={11}></Image></button>
        </div>
    )
}