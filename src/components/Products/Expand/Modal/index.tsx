import Image, {StaticImageData} from "next/image";
import shoppingCart from "../../../../../public/assets/icons/ShoppingCart.svg"
import close from "../../../../../public/assets/icons/close.png"
import Link from "next/link";
import { useState } from 'react'
import { barlow } from "../../../../app/fonts";



interface propsModal{
    title: string
    src: string
    alt: string
    isOpen: boolean
    setOpenModal: any
    valueA: number
    valueB: number
}


export const Modal: React.FC<propsModal> = ({title, src, alt, isOpen, setOpenModal, valueA, valueB}) => {

    const [open, setOpen] = useState(isOpen)

    if(isOpen === true){
            return(
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-30 flex justify-center items-center">
                    <div className=" bg-white rounded-lg fixed flex flex-col shadow-[#0d0d0e] shadow-2xl p-9 px-24">
                        <ul className="pb-6 border-b-2 flex justify-between items-center border-[#E5E7EB]">
                            <li className="max-w-[640px] font-bold text-[26px] line-clamp-1">{title}</li>
                            <li><button onClick={setOpenModal} className="cursor-pointer hover:scale-105 transition-all duration-300"><Image src={close} alt="shopping image" width={24} height={24}></Image></button></li>
                        </ul>
                        <Image src={src} alt={alt} width={700} height={700}></Image>
                        <div className="flex justify-between items-center pt-10 border-t-2 border-[#E5E7EB]">
                            <div className="flex gap-3">
                                <Link href="/cart" className="hover:mx-[10px] hover:scale-[103%] hover:inset-shadow-sm hover:inset-shadow-[#3f5c49] transition-all duration-300 py-[15px] bg-[#16A34A] w-[180px] justify-center items-center gap-2 rounded-lg font-bold text-white flex">
                                    {<Image src={shoppingCart} alt="shopping image" width={16} height={16}></Image>}Add to cart
                                </Link>
                                <div className="hover:mx-[10px] hover:scale-[103%] hover:inset-shadow-sm cursor-pointer hover:inset-shadow-[#000000] transition-all duration-300 py-[15px] bg-[#212529] w-[180px] justify-center items-center gap-2 rounded-lg  font-bold text-white flex">{<Image src={shoppingCart} alt="shopping image" width={16} height={16}></Image>}Buy Now</div>
                            </div>
                            <div className="py-[12px] px-5 border border-[#E5E7EB] hover:inset-shadow-[#949699] inset-shadow-sm inset-shadow-[#babcbe] bg-[#f2f4f7] rounded-lg hover:scale-[103%] transition-all duration-300">
                                <p className={`leading-7 font-bold text-[30px] ${barlow.className} text-[#DC2626] `}>${valueA}<strong className={`line-through text-[#111827] font-medium text-[22px] ml-[7px]`}>${valueB}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}