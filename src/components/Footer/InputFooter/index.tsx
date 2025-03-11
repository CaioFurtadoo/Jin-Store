import email from "../../../../public/assets/icons/Email.svg"
import Image from "next/image";


export const InputFooter = () => {
    return(
        <div className="flex relative">
            <input className="border-y border-l text-[#9CA3AF] border-[#D1D5DB] rounded-l-lg py-4 pl-[40px] pr-[150px] bg-white focus:outline-0" placeholder="Enter your email address" type="email"/>
            <div className="flex items-center px-[18px] bg-[#634C9F] text-white font-bold text-[14px] rounded-r-lg focus:outline-0 focus:border-0">SEND</div>
            <Image className="w-auto h-auto absolute left-4 top-[22.5px]" src={email} alt="email" width={0} height={0} />
        </div>
    );
}