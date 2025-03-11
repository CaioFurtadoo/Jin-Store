import { CountdownTimer } from "./CountDownHeader/index";
import arrowDown from "../../../public/assets/icons/ArrowDown.svg"
import arrowDown2 from "../../../public/assets/icons/ArrowDown2.svg"
import Image from "next/image";
import logo from "../../../public/assets/icons/Logo.svg"
import local from "../../../public/assets/icons/Local.svg"
import { InputSearch } from "./InputSearch";
import user from "../../../public/assets/icons/User.svg"
import { CountIcons } from "./CountIcons";
import heart from "../../../public/assets/icons/Heart.svg"
import cart from "../../../public/assets/icons/Cart.svg"
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex flex-col">
        <div className="flex justify-evenly h-10 bg-[#634C9F] text-white items-center text-[12px] px-[280px]">
            <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
            <div className="flex gap-3 items-center font-extralight ">
                <p className="opacity-75">Until the end of the sale:</p>
                <CountdownTimer targetDate="2025-05-06T23:59:59" />
            </div>
        </div>
        <div className="h-[41px] border-b-[1px] border-[#E5E7EB]  text-[#6B7280] text-[15px]">
            <div className="px-[280px] flex justify-between items-center h-[100%]">
                <div className="flex gap-3.5">
                    <ul className="flex gap-3.5 items-center font-medium">
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer hover:backdrop-blur-xs transition-all duration-150"><Link href="/contact">About us</Link></li>
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer hover:backdrop-blur-xs transition-all duration-150"><Link href="/account">My account</Link></li>
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer hover:backdrop-blur-xs transition-all duration-150">Wishlist</li>
                    </ul>
                    <p className="pl-3.5 border-l-[1px] border-[#E5E7EB] font-light">We deliver to you every day from <strong className="font-bold text-[#EA580C]">7:00 to 23:00</strong></p>
                </div>
                <div>
                    <ul className="flex gap-3.5 items-center">
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer flex gap-1.5 hover:backdrop-blur-xs transition-all duration-150">English{<Image src={arrowDown} alt="Arrow Down" width={8} height={10} />}</li>
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer flex gap-1.5 hover:backdrop-blur-xs transition-all duration-150">USD{<Image src={arrowDown} alt="Arrow Down" width={8} height={10} />}</li>
                        <li className="hover:text-[#030712] hover:scale-[102%] cursor-pointer hover:backdrop-blur-xs transition-all duration-150">Order Tracking</li>
                    </ul>
                </div>
            </div>
            <div className="h-[78] flex items-center justify-between px-[280px]">
                <div className="flex gap-[21px] items-center">
                    <Link href="/">
                        <Image className="hover:scale-[101%] cursor-pointer" src={logo} alt="Logo image" width={154} height={38} />
                    </Link>
                    <Image src={local} alt="Local image" width={19} height={23} />
                    <div className="flex flex-col text-[#030712]">
                        <p className="text-[11px] opacity-75">Deliver to</p>
                        <p className="text-[13px] font-semibold">all</p>
                    </div>
                </div>
                <InputSearch/>
                <div className="flex gap-[14px] ">
                    <Link href="/account" className="pl-1 pr-1.5 hover:scale-[110%] cursor-pointer transition-transform duration-500 hover:backdrop-blur-xs flex items-center">
                        <Image src={user} alt="User image" width={19} height={25} />
                    </Link>
                    <Link href="/login" className="flex flex-col text-[#030712] hover:scale-[102%] cursor-pointer">
                        <p className="text-[11px] opacity-75">Sing in</p>
                        <p className="text-[13px] font-semibold">Account</p>
                    </Link>
                    <div className="flex items-center gap-6 nth-2:animation-bounce">
                        <CountIcons src={heart} alt="wishlist" width={24} height={20} animation={false} link="/" />
                        <CountIcons src={cart} alt="cart" width={24} height={20} animation={true} link="/cart" />
                    </div>
                </div>
            </div>
            <div className="h-[48px] border-t-[1px] border-b-[1px] border-[#E5E7EB] ">
                <nav className="flex justify-between px-[280px] text-[#030712] items-center h-[100%] text-[15px] font-semibold">
                    <ul className="flex gap-[25px]">
                        <li className="flex gap-1.5 hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300">Home{<Image src={arrowDown2} alt="Arrow Down" width={10} height={5} />}</li>
                        <li className="flex gap-1.5 hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300">Shop{<Image src={arrowDown2} alt="Arrow Down" width={10} height={5} />}</li>
                        <li className="hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300"><Link href="/filter?categories=Fruits">Fruits & Vegetables</Link></li>
                        <li className="hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300"><Link href="/filter?categories=Beverages">Beverages</Link></li>
                        <li className="hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300"><Link href="/blog">Blog</Link></li>
                        <li className="hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300"><Link href="/contact">Contact</Link></li>
                    </ul>
                    <ul className="flex gap-[25px]">
                        <li className="flex gap-1.5 hover:text-[#39245F] hover:scale-[103%] cursor-pointer transition-all duration-300">
                            Trending Products
                            {<Image src={arrowDown2} alt="Arrow Down" width={10} height={5} />}
                        </li>
                        <li className="group flex gap-2 text-[#DC2626] cursor-pointer transition-all duration-300 hover:scale-105">
                            Almost Finished 
                            <div className="text-white font-semibold text-[10px] py-1 px-[6.5px] bg-gradient-to-r from-[#DC2626] to-[#EA580C] rounded-[4px] transition-transform duration-1000 ease-in-out group-hover:animate-bounce group-hover:scale-105">
                                SALE
                            </div>
                            {<Image src={arrowDown2} alt="Arrow Down" width={10} height={5} />}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  );
}