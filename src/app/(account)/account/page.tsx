import { PagesText } from "@/components/Pages";
import user from "../../../../public/assets/icons/User.svg"
import compare from "../../../../public/assets/icons/Compare.svg"
import Image from "next/image";
import { use } from "react";
import { GeneralInput } from "@/components/Pages/GeneralInput";
import { GeneralCheckbox } from "@/components/Pages/GeneralCheckbox";

export const account = () => {

    const handleCheckboxChange = (category: string, checked: boolean) => {
    }

    return(
        <div>
            <PagesText category="" before="Home" actual="My account"/>      
            <div className="mx-[280px] border-t border-[#E5E7EB] mb-[80px]">
                <div className="flex gap-[15px] items-center mt-[26px] mb-[45px]">
                    <div className="rounded-full bg-[#F3F4F6] p-3">
                        <Image src={user} alt="user image" width={18} height={20}></Image>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <p className="font-medium text-[12px] text-[#9CA3AF]">Welcome back,</p>
                        <p className="font-bold text-[14px] text-[#030712]">name@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-10 ">
                    <ul className="font-bold text-[14px] min-w-[300px] border border-[#E5E7EB] rounded-md max-h-[420px]">
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff]  hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100 rounded-t-md">Dashboard</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">Orders</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">Downloads</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">Addresses</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">Account details</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">Wishlist</li>
                        <li className="cursor-pointer p-[15px] border-b border-[#E5E7EB] flex gap-1.5 items-center hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-100">{<Image src={compare} alt="compare image" width={17} height={18}></Image>}Compare</li>
                        <li className="cursor-pointer p-[15px] border-t border-[#E5E7EB] hover:bg-[#fefeff] hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] rounded-b-md transition-all duration-100">Log out</li>
                    </ul>
                    <div className="flex flex-col gap-2.5 w-[100%]">
                        <h1 className="font-medium text-[20px] text-[#030712]">Update account to Vendor</h1>
                        <form action="vendor" className="flex flex-col gap-5">
                            <GeneralInput forLabel="vendor" inputType="text" padding="p-2" labelText="First Name *"/>
                            <GeneralInput forLabel="vendor" inputType="text" padding="p-2" labelText="Last Name *"/>
                            <GeneralInput forLabel="vendor" inputType="text" padding="p-2" labelText="Shop Name *"/>
                            <div className="flex flex-col gap-1">
                                <GeneralInput forLabel="vendor" inputType="url" padding="p-2" labelText="Shop URL *"/>
                                <p className="text-[12px] text-[#030712]">https://klbtheme.com/grogin/store/</p>
                            </div>
                            <GeneralInput forLabel="vendor" inputType="text" padding="p-2" labelText="Phone Number*"/>
                            <div className="flex gap-1 items-center text-[#030712] text-[14px]">
                                <GeneralCheckbox text=""/>
                                <p>I have read and agree to the <strong className="font-medium text-[#1D4ED8]">Terms & Conditions.</strong></p>
                            </div>
                            <button type="submit" className="px-[13px] py-[9px] rounded-[3px] border border-[#CCCCCC] w-[163px] shadow-md hover:bg-[#fefeff]  hover:inset-shadow-sm hover:inset-shadow-[#c4c4c5] transition-all duration-300 cursor-pointer hover:shadow-none">Become a Vendor</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default account;