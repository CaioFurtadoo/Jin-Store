import cartpresent from "../../../../public/assets/icons/CartPresent.svg";
import Image from "next/image";
import Link from "next/link"
import { PagesText } from "@/components/Pages";

export const Cart = () => {
    return(
        <>
        <PagesText category="" before="Home" actual="Cart"/>
        <div className="flex flex-col justify-center items-center h-[70vh] gap-6">

            <Image className="animate-bounce" src={cartpresent} alt="cart present" width={160} height={160}></Image>

            <div className=" mt-10 py-5 font-bold text-[18px] text-[#F03E3E] border border-[#E5E7EB] w-[760px] flex items-center justify-center">Your cart is currently empty.</div>

            <Link href="/" className="text-white relative bg-[#212529] rounded-lg font-bold text-[14px] py-3 px-[18px] before:scale-150 overflow-hidden before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 cursor-pointer before:h-[100%] before:bg-[#303030] before:z-[-1] before:origin-bottom before:transition-all before:duration-700 before:ease-out hover:scale-105 transition ease-in before:absolute">Return to shop</Link>

        </div>
        </>
    )
}

export default Cart;