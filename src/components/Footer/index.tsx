import { InputFooter } from "./InputFooter"
import Image from "next/image";
import mail from "../../../public/assets/icons/Mail2.svg"
import cellphone from "../../../public/assets/icons/Cellphone.svg"
import playstore from "../../../public/assets/icons/PlayStore.svg"
import applestore from "../../../public/assets/icons/AppleStore.svg"
import facebook from "../../../public/assets/icons/Facebook.svg"
import instragram from "../../../public/assets/icons/Instagram.svg"
import x from "../../../public/assets/icons/X1.svg"
import linkedin from "../../../public/assets/icons/Linkedin1.svg"
import visa from "../../../public/assets/icons/Visa.svg"
import mastercard from "../../../public/assets/icons/Mastercard.svg"
import klarna from "../../../public/assets/icons/Klarna.svg"
import paypal from "../../../public/assets/icons/Paypal.svg"
import skrill from "../../../public/assets/icons/Skrill.svg"

export const Footer = () => {
    return(
        <div className="bg-[#F3F4F6] px-[280px]">
            <div className=" h-[190px] flex justify-between items-center">
                <div className="flex flex-col gap-1.5 w-[305px]">
                    <h1 className="font-bold text-[20px] text-[#111827]">Join our newsletter for £10 offs</h1>
                    <p className="text-[13px] text-[#6B7280]">Register now to get latest updates on promotions &coupons.Don't worry, we not spam!</p>
                </div>
                <div className="flex flex-col gap-[11px]">
                    <InputFooter/>
                    <p className="text-[11px] text-[#6B7280]">By subscribing you agree to our <strong className="font-medium text-[#634C9F]">Terms & Conditions and Privacy & Cookies Policy.</strong></p>
                </div>
            </div>
            <div className="flex justify-between text-[#6B7280] py-[50px] items-start border-t-[1px] border-b-[1px] border-[#D1D5DB]">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col w-[270px] gap-5">
                        <p className="text-[#111827] text-[14px] font-semibold">Do You Need Help ?</p>
                        <p className="text-[13px]">Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
                    </div>
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex gap-4">
                            <Image className="w-auto h-auto hover:scale-105 transition-all duration-300" src={cellphone} alt="cellphone" width={0} height={0}></Image>
                            <div className="flex flex-col gap-[1px]">
                                <p className="text-[12px] text-[#111827]">Monday-Friday: 08am-9pm</p>
                                <p className="font-bold text-[20px] text-[#111827]">0 800 300-353</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image className="w-auto h-auto hover:scale-105 transition-all duration-300" src={mail} alt="mail" width={0} height={0}></Image>
                            <div className="flex flex-col gap-[1px]">
                                <p className="text-[#111827] text-[12px]">Need help with your order?</p>
                                <p className="text-[#111827] font-semibold text-[14px]">info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[75px] text-[14px]">
                    <ul className="flex flex-col gap-1 hover:scale-[102%] transition-all duration-500">
                        <li className="py-1.5 text-[#111827] font-semibold text-[14px]">Make Money with Us</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Sell on Grogin</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Sell Your Services on Grogin</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Sell on Grogin Business</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Sell Your Apps on Grogin</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Become an Affilate</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Advertise Your Products</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Sell-Publish with Us</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Become an Blowwe Vendor</li>
                    </ul>
                    <ul className="flex flex-col gap-1 hover:scale-[102%] transition-all duration-500">
                        <li className="py-1.5 text-[#111827] font-semibold text-[14px]">Let Us Help You</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Accessibility Statement</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Your Orders</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Returns & Replacements</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Shipping Rates & Policies</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Refund and Returns Policy</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Privacy Policy</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Terms and Conditions</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Cookie Settings</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Help Center</li>
                    </ul>
                    <ul className="flex flex-col gap-1 hover:scale-[102%] transition-all duration-500">
                        <li className="py-1.5 text-[#111827] font-semibold text-[14px]">Get to Know Us</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Careers for Grogin</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">About Grogin</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Inverstor Relations</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Grogin Devices</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Customer reviews</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Social Responsibility</li>
                        <li className="hover:text-[#030712] cursor-pointer scale-[102%] transition-all duration-300">Store Locations</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#111827] font-semibold text-[14px]">Download our app</p>
                    <div className="flex flex-col gap-[10px] text-[11px] font-medium">
                        <div className="flex gap-[15px] pt-5 items-center">
                            <Image className="w-auto h-auto hover:scale-105 transition-all duration-300 cursor-pointer" src={playstore} alt="playstore" width={0} height={0}></Image>
                            <p className="w-[100px]">Download App Get -10% Discount</p>
                        </div>
                        <div className="flex gap-[15px] pb-12 items-center">
                            <Image className="w-auto h-auto hover:scale-105 transition-all duration-300 cursor-pointer" src={applestore} alt="playstore" width={0} height={0}></Image>
                            <p className="w-[100px]">Download App Get -20% Discount</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        Follow us on social media:
                        <ul className="flex gap-1">
                            <li className="hover:mr-1.5 transition-all duration-300 cursor-pointer"><Image src={facebook} alt="facebook" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:mx-1.5 transition-all duration-300 cursor-pointer"><Image src={x} alt="x" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:mx-1.5 transition-all duration-300 cursor-pointer"><Image src={instragram} alt="instagram" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:ml-1.5 transition-all duration-300 cursor-pointer"><Image src={linkedin} alt="linkedin" width={0} height={0} className="w-auto h-auto"></Image></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-[50px] flex justify-between">
                <div className="flex flex-col gap-[23px]">
                    <p className="text-[12px] text-[#6B7280]">All right reserved. Powered by <strong className="font-semibold text-[#634C9F]">BlackRise Themes</strong> and developed by <strong className="font-semibold text-[#634C9F]">Caio Furtado.</strong></p>
                        <ul className="flex gap-[10px]">
                            <li className="hover:translate-y-[-3px] transition-all duration-300"><Image src={visa} alt="visa" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:translate-y-[-3px] transition-all duration-300"><Image src={mastercard} alt="mastercard" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:translate-y-[-3px] transition-all duration-300"><Image src={paypal} alt="paypal" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:translate-y-[-3px] transition-all duration-300"><Image src={skrill} alt="skrill" width={0} height={0} className="w-auto h-auto"></Image></li>
                            <li className="hover:translate-y-[-3px] transition-all duration-300"><Image src={klarna} alt="klarna" width={0} height={0} className="w-auto h-auto"></Image></li>
                        </ul>
                </div>
                <ul className="flex text-[#11182] gap-2 text-[12px] h-[18px]">
                    <li className="hover:border-b border-[#11182] cursor-pointer">Terms and Conditions</li>
                    <li className="hover:border-b border-[#11182] cursor-pointer">Privacy Policy</li>
                    <li className="hover:border-b border-[#11182] cursor-pointer">Order Tracking</li>
                </ul>
            </div>
        </div>
    )
}