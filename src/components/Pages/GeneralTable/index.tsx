import Image from "next/image"
import payment from "../../../../public/assets/icons/Payment.svg"
import delivery from "../../../../public/assets/icons/Delivery.svg"
import stock from "../../../../public/assets/icons/StockSale.svg"
import quality from "../../../../public/assets/icons/Quality.svg"


export const GeneralTable = () => {
    return(
        <div className="flex gap-[36px] items-center ">
            <div className="flex gap-5 group">
                <Image className="group-hover:translate-y-[-5px] transition-all duration-300" src={payment} alt="payment image" width={57} height={57}></Image>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-[16px] text-[#030712]">Payment only online</h1>
                    <p className="text-[13px] text-[#6B7280]">Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
            <div className="flex gap-5 group">
                <Image className="group-hover:translate-y-[-5px] transition-all duration-300" src={stock} alt="stock image" width={57} height={57}></Image>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-[16px] text-[#030712]">New stocks and sales</h1>
                    <p className="text-[13px] text-[#6B7280]">Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
            <div className="flex gap-5 group">
                <Image className="group-hover:translate-y-[-5px] transition-all duration-300" src={quality} alt="quality image" width={57} height={57}></Image>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-[16px] text-[#030712]">Quality assurance</h1>
                    <p className="text-[13px] text-[#6B7280]">Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
            <div className="flex gap-5 group">
                <Image className="group-hover:translate-y-[-5px] transition-all duration-300" src={delivery} alt="delivery  image" width={57} height={57}></Image>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-[16px] text-[#030712]">Delivery from 1 hour</h1>
                    <p className="text-[13px] text-[#6B7280]">Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</p>
                </div>
            </div>
        </div>
    )
}