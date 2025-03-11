import whiteCart from "../../../../public/assets/icons/WhiteCart.svg"
import Image from "next/image"
import Link from "next/link"

export const InStock = () => {
    return(
        <Link href="/cart" className="flex gap-4 group cursor-pointer text-[#16A34A] text-[11px] font-bold items-center relative">
            <div className="group-hover:w-[190px] w-[37px] transition-all duration-500 cursor-pointer p-[9px] bg-[#16A34A] rounded-lg"><Image src={whiteCart} alt="white cart stock" width={18} height={15}></Image></div>
            <p className="group-hover:opacity-0 absolute left-15 transition-all">IN STOCK</p>
            <p className="text-white opacity-0 group-hover:opacity-100 absolute left-5 group-hover:translate-x-11 transition-all duration-300">IN STOCK</p>
        </Link>
    )
}