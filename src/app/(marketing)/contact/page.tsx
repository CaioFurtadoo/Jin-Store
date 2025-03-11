import { GeneralInput } from "@/components/Pages/GeneralInput";
import Image from "next/image";
import local from "../../../../public/assets/icons/Local.svg"
import twitter from "../../../../public/assets/icons/TwitterContact.svg"
import facebook from "../../../../public/assets/icons/FacebookContact.svg"
import linkedin from "../../../../public/assets/icons/LinkedinContact.svg"
import instagram from "../../../../public/assets/icons/InstagramContact.svg"
import { GeneralTable } from "@/components/Pages/GeneralTable";



export const Contact = () => {
    return(
        <div className="mx-[280px] flex flex-col gap-[45px] justify-center items-center mb-[75px]">
            <div className="py-[60px] flex flex-col items-center text-[#030712] border-b border-[#E5E7EB] w-[100%]">
                <p className="text-[13px] font-bold">Contact With Us</p>
                <h1 className="font-bold text-[56px]">You can ask us questions</h1>
                <p className="text-[15px]">Contact us for all your questions and opinions, or you can solve your</p>
                <p className="text-[15px]">problems in a shorter time with our contact offices.</p>
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="flex flex-col gap-16 text-[#030712] w-[630px] ">
                    <div className="flex flex-col gap-2.5">
                        <h1 className="font-semibold text-[22px]">Our Offices</h1>
                        <p className="text-[#4B5563] text-[13px]">On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>
                    </div>
                    <div className="flex gap-[90px] justify-center border-b border-[#E5E7EB] pb-13">
                        <div className="flex gap-5 items-start">
                            <Image className="mt-1.5" src={local} alt="local image" width={13} height={16}></Image>
                            <ul className="flex flex-col text-[#030712]">
                                <li className="leading-3 text-[12px]">United States</li>
                                <li className="mb-1 text-[18px] font-medium">United States Office</li>
                                <li className="mb-3 text-[13px] text-[#4B5563]">205 Middle Road, 2nd Floor, New York</li>
                                <li className="mb-0.5 font-semibold text-[16px]">+02 1234 567 88</li>
                                <li className="text-[#2563EB] text-[14px] hover:translate-y-1.5 transition-all duration-300 cursor-pointer">info@example.com</li>
                            </ul>
                        </div>
                     <div className="flex gap-5 items-start">
                            <Image className="mt-1.5" src={local} alt="local image" width={13} height={16}></Image>
                            <ul className="flex flex-col text-[#030712]">
                                <li className="leading-3 text-[12px]">Munich</li>
                                <li className="mb-1 text-[18px] font-medium">Munich States Office</li>
                                <li className="mb-3 text-[13px] text-[#4B5563]">205 Middle Road, 2nd Floor, New York</li>
                                <li className="mb-0.5 font-semibold text-[16px]">+5 456 123 22</li>
                                <li className="text-[#2563EB] text-[14px] hover:translate-y-1.5 transition-all duration-300 cursor-pointer">contact@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex gap-2.5 items-center text-[#4B5563] text-[12px]">
                        Follow us:
                        <ul className="flex gap-1.5">
                            <li className="hover:mr-1.5 transition-all duration-300 cursor-pointer"><Image src={facebook} alt="facebook" width={32} height={32}></Image></li>
                            <li className="hover:mx-1.5 transition-all duration-300 cursor-pointer"><Image src={twitter} alt="twitter" width={32} height={32}></Image></li>
                            <li className="hover:mx-1.5 transition-all duration-300 cursor-pointer"><Image src={instagram} alt="instagram" width={32} height={32}></Image></li>
                            <li className="hover:ml-1.5 transition-all duration-300 cursor-pointer "><Image src={linkedin} alt="linkedin" width={32} height={32}></Image></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-[560px] gap-5">
                    <p className="text-[#6B7280] text-[13px]">On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                    <form action="contact" className="flex flex-col gap-4">
                        <div  className="flex gap-[30px]">
                            <GeneralInput forLabel="contact" inputType="text" padding="p-3" labelText="Your name *"/>
                            <GeneralInput forLabel="contact" inputType="email" padding="p-3" labelText="Your email *"/>
                        </div>
                        <GeneralInput forLabel="contact" inputType="text" padding="p-3" labelText="Subject *"/>
                        <GeneralInput forLabel="contact" inputType="text" padding="py-10 px-3" labelText="Your message"/>
                        <button type="submit" className="font-medium cursor-pointer mt-1.5 mb-15 bg-[#634C9F] py-[14px] text-white text-[14px] rounded-lg overflow-hidden flex relative z-30 justify-center items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 before:h-[100%] before:bg-[#39245F] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute w-[140px]">Send Message</button>
                    </form>
                </div>
            </div>
            <GeneralTable/>
        </div>
    )
}

export default Contact;