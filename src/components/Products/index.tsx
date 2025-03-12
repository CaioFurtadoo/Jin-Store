import { TimerPr } from "./TimerPr";
import Image from "next/image"
import rating from "../../../public/assets/icons/rating.svg"
import shoppingCart from "../../../public/assets/icons/ShoppingCart.svg"
import plusCart from "../../../public/assets/icons/PlusCart.svg"
import plusCartW from "../../../public/assets/icons/PlusWhite.svg"
import { barlow } from "../../app/fonts";
import { InStock } from "./InStock";
import { RunOut } from "./RunOut";
import Link from "next/link";

interface productProps {
    id: string;
    inStock: boolean;
    runOut: boolean;
    bigRunOut: boolean;
    timer: boolean;
    border: string;
    background: string;
}

interface entity{
    id: string
    title: string
    valueA: number
    valueB: number
    image: string
    category: string
}

export const Product: React.FC<productProps> = async ({ id, inStock, runOut, bigRunOut, border, timer, background }) => {
    
    const response = await fetch(`${process.env.BASE_URL}/api`, {
        cache: "force-cache",
    });

    const data = await response.json();

    const produto = data.products.find((product: entity) => product.id === id);

    if (!produto) {
        return <p>Produto não encontrado</p>;
    }

    const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const avaliacoes = getRandomNumber(0, 9);
    const desconto = Math.round(100 - (produto.valueA * 100) / produto.valueB);

    const size = timer ? "w-[170px] h-[170px]" : runOut ? "w-[200px] h-[200px]" : bigRunOut ? "w-[345px] h-[345px]" : inStock ? "w-[175px] h-[175px]" : ""

    return(
        <div className={` ${border} flex flex-col justify-evenly hover:border-4 hover:scale-[103%] hover:rounded-lg hover:border-[#DC2626] hover:inset-shadow-sm hover:inset-shadow-[#a3a4a7]  transition-all duration-50 ${background} gap-5 j ${timer ? "p-[15px] pl-5 w-[429px] h-[259px]" : runOut ? "h-[518px] w-[250px] px-[15px] pt-[25px] pb-10" : inStock ? "h-[410px] w-[226px] px-4 pb-4 py-[25px]" : bigRunOut ? "h-[777px] w-[433px] px-[34px] pb-[34px] py-[44px]" : ""}`}>
            <div className={`flex ${timer ? "gap-[25px]" : "flex-col gap-5" }`}>
                <Link href={`/product/${id}`} className="cursor-pointer relative flex justify-center">
                    <Image src={produto.image} alt={`${produto.title} image`} width={0} height={0} className={size}></Image>
                    <div className="bg-[#DC2626] text-[#FEF2F2] text-[10px] font-extrabold py-1.5 px-2 w-[38px] rounded-[12px] absolute top-0 left-0 flex justify-center items-center">{desconto}%</div>
                </Link>
                <div className="flex flex-col">
                    <Link href={`/product/${id}`}>
                        <div className={`mb-[8px] flex flex-col ${runOut || bigRunOut ? "flex-col-reverse gap-[7.5px]" : "gap-[9"}`}>
                            <p className={`text-[#030712] text-[14px] font-medium] line-clamp-2`}>{produto.title}</p>
                            <div className="flex gap-2 items-center text-[#6B7280] text-[12px]"><Image src={rating} alt="rating" width={67} height={11}></Image>{avaliacoes}</div>
                        </div>
                        <div className={`flex flex-col ${bigRunOut ? "flex-col-reverse" : ""}`}>
                            {runOut || bigRunOut ? <p className={`my-[6px] text-[#4B5563] text-[12px] ${bigRunOut ? "py-[12'px]" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor corrupti dolore mollitia.</p> : ""}
                            <p className={` leading-7 tracking-tight font-bold text-[28px] ${barlow.className} text-[#DC2626]  ${bigRunOut ? " py-[6px] text-[26px]" : inStock ? "py-2" : "text-[22px]" }`}>${produto.valueA}<strong className={`line-through text-[#111827] font-medium text-[20px] ml-[7px] ${bigRunOut ? "text-[19px]" : "text-[16px]" }`}>${produto.valueB}</strong></p>
                        </div>
                    </Link>
                    <div className={`flex flex-col gap-5 ${runOut || bigRunOut ? "mt-[10px] pt-[12px] border-t border-[#E5E7EB]" : "mt-[12px]"}`}>
                        {timer ?
                        <Link href="/cart" className="cursor-pointer group hover:bg-[#634C9F] hover:inset-shadow-xs  hover:inset-shadow-[#302d3a] hover:text-white transition-all duration-200 font-medium text-[#634C9F] text-[13px] flex justify-between rounded-full border border-[#634C9F] px-[15px] py-[7px]">
                            Add to cart
                            <Image className="group-hover:hidden" src={plusCart} alt="plus cart" width={15} height={15}></Image>
                            <Image className="hidden  group-hover:flex" src={plusCartW} alt="plus cart" width={15} height={15}></Image>
                        </Link> 
                        : inStock ? <InStock/> : <RunOut/>}
                        
                        {bigRunOut ? 
                        <Link href="/cart" className="text-white pl-[18px] pr-[49px] font-bold text-[14px] rounded-lg overflow-hidden flex relative z-30 items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 cursor-pointer before:h-[100%] before:bg-[#0F7133] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute mt-2   gap-1.5  py-3 bg-[#16A34A]">
                            <Image src={shoppingCart} alt="shoppingCart Image" width={14} height={14}></Image>
                            Add to cart
                        </Link> : ""}
                    </div>                  
                </div>
            </div>
            {timer ? <TimerPr sizeText="text-[12px]" sizeTextMid="text-[16px]" size="w-[26px] h-[26px]" border="border-[#E5E7EB]" bg="bg-[#F3F4F6]"/> : ""}
        </div>
    )
}