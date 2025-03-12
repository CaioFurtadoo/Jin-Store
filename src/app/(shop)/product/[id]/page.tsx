import { PagesText } from "@/components/Pages";
import Image from "next/image";
import rating from "../../../../../public/assets/icons/ratingPr.svg"
import payCard from "../../../../../public/assets/icons/PayCard.svg"
import security from "../../../../../public/assets/icons/Security.svg"
import shoppingCart from "../../../../../public/assets/icons/ShoppingCart.svg"
import heart from "../../../../../public/assets/icons/Heart.svg"
import compare from "../../../../../public/assets/icons/Compare.svg"
import share from "../../../../../public/assets/icons/Share.svg"
import { barlow } from "../../../fonts";
import { TimerPr } from "@/components/Products/TimerPr";
import { Count } from "@/components/Products/Counter";
import { Product } from "@/components/Products";
import Link from "next/link";
import { Expand } from "@/components/Products/Expand";


interface entity{
    id: string
    title: string
    valueA: number
    valueB: number
    image: string
    category: string
}

const ProductPage = async ({params,}: {
    params: Promise<{ id: string }>
    }) => {

    const { id } = await params

    const response = await fetch(`${process.env.BASE_URL}/api`, {
        cache: "force-cache"
    });
    const products = await response.json();

    const produto = products.products.find((product: entity) => product.id === id);

    if (!produto) {
        return <p>Produto não encontrado</p>;
    }

    const pfilter = products.products.filter((product: entity) => product.category === produto.category)

    const randomizeArr = <T,>(arr: T[]): void => {
        for (let i = 0; i < arr.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };

    randomizeArr(pfilter)

    const desconto = Math.round(100 - (produto.valueA * 100) / produto.valueB);
    return(
        <>
        <PagesText before="Home" category={produto.category} actual={produto.title}/>
        <div className="flex justify-center items-center">
            <div className="w-[1338px] flex justify-between gap-[160px]  flex-col">
                <div className="w-[100%] flex justify-between gap-12 items-start">
                    <div className="relative">
                        <Image  src={produto.image} alt={`${produto.title} image`} width={660} height={660}></Image>
                        <div className="bg-[#DC2626] text-[#FEF2F2] text-[12px] font-extrabold py-1.5 px-2 w-[45px] rounded-[12px] absolute top-3 flex justify-center items-center">{desconto}%</div>
                        <Expand valueA={produto.valueA} valueB={produto.valueB} src={produto.image} alt={`${produto.title} image`} title={produto.title}/>
                    </div>
                    <div className="flex flex-col gap-5 w-[700px]">
                        <div className="flex flex-col gap-5 border-b border-[#E5E7EB] pb-3.5">
                            <p className="leading-12 text-[#030712] text-[38px] font-bold">{produto.title}</p>
                            <div className="flex gap-[14px] items-center text-[13px]">
                                <div className="flex gap-2 items-center">
                                    <Image src={rating} alt="rating product stars image" width={66} height={11}></Image>
                                    <div className="border border-[#D1D5DB] rounded-md px-[5px] py-[1.5px] font-semibold text-[#030712]">3.00</div>
                                    <p className="text-[12px] text-[#6B7280]">2</p>
                                </div>
                                <p className="border-l border-[#E5E7EB]  pl-3.5 text-[#6B7280]">SKU: <strong className="font-medium text-[#030712]">E7F8G9H0</strong></p>
                            </div>
                        </div>
                        <p className="text-[14px] text-[#4B5563]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta doloremque repellat cum deleniti doloribus, eos provident aliquid ab animi nulla sint quam dolorum.</p>
                        <p className={`leading-7 font-bold text-[30px] ${barlow.className} text-[#DC2626] `}>${produto.valueA}<strong className={`line-through text-[#111827] font-medium text-[22px] ml-[7px]`}>${produto.valueB}</strong></p>
                        <div className=" overflow-hidden flex relative z-20 items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 cursor-pointer before:h-[100%] before:bg-[#0F7133] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute px-[18px] bg-[#16A34A] max-w-[192px] rounded-lg py-[15px] font-bold text-white">Order on WhatsApp</div>
                        <div className="my-1 items-center rounded-md text-[#EA580C] text-[13px] font-bold bg-[#FFF7ED] border border-[#FFEDD5] p-4 flex gap-5">Special Offer:{<TimerPr sizeText="text-[13px]" sizeTextMid="text-[16px]" size="w-[34px] h-[34px]" border="border-[#FED7AA]" bg="bg-[#FFEDD5]"/>}</div>
                        <div className="flex gap-2.5">
                            <Count/>
                            <Link href="/cart" className="hover:scale-[103%] hover:mx-[10px] hover:inset-shadow-sm hover:inset-shadow-[#3f5c49] transition-all duration-300 py-[15px] bg-[#16A34A] w-[180px] justify-center items-center gap-2 rounded-lg font-bold text-white flex">{<Image src={shoppingCart} alt="shopping image" width={16} height={16}></Image>}Add to cart</Link>
                            <div className="hover:scale-[103%] hover:mx-[10px] hover:inset-shadow-sm cursor-pointer hover:inset-shadow-[#000000] transition-all duration-300 py-[15px] bg-[#212529] w-[180px] justify-center items-center gap-2 rounded-lg  font-bold text-white flex">{<Image src={shoppingCart} alt="shopping image" width={16} height={16}></Image>}Buy Now</div>
                        </div>
                        <div className="mt-2.5 border rounded-md border-[#E5E7EB]">
                            <div className="px-5 py-3.5 border-b flex gap-[30px] border-[#E5E7EB]">
                                <Image src={payCard} alt="payCard Image" width={23} height={17}></Image>
                                <p className="text-[13px] text-[#6B7280]"><strong>Payment.</strong> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment</p>
                            </div>
                            <div className="px-5 py-3.5 flex gap-[30px] items-center">
                                <Image src={security} alt="security Image" width={23} height={17}></Image>
                                <p className="text-[13px] text-[#6B7280]"><strong>Warranty.</strong> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                            </div>
                        </div>
                        <ul className="flex gap-7">
                            <li className="hover:scale-105 transition-all duration-300 cursor-pointer text-[#030712] font-medium text-[13px] flex items-center gap-2"><div className="w-9 h-9 border border-[#E5E7EB] rounded-md flex items-center justify-center">{<Image src={heart} alt="security Image" width={17} height={17}></Image>}</div>Add to wishlist</li>
                            <li className="hover:scale-105 transition-all duration-300 cursor-pointer text-[#030712] font-medium text-[13px] flex items-center gap-2"><div className="w-9 h-9 border border-[#E5E7EB] rounded-md flex items-center justify-center">{<Image src={share} alt="security Image" width={17} height={17}></Image>}</div>Share this Product</li>
                            <li className="hover:scale-105 transition-all duration-300 cursor-pointer text-[#030712] font-medium text-[13px] flex items-center gap-2"><div className="w-9 h-9 border border-[#E5E7EB] rounded-md flex items-center justify-center">{<Image src={compare} alt="security Image" width={17} height={17}></Image>}</div>Compare</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-[60px]">
                    <ul className="flex flex-col">
                        <li className=" text-[#030712] flex gap-[30px] text-[16px]">
                            <p className="cursor-pointer border-b-2 border-[#030712] pb-5 w-[87px]">Description</p>
                            <p className="cursor-pointer w-[87px]">Reviews</p>
                        </li>
                        <li className="pt-5 text-[#030712] text-[16px] border-t border-[#E5E7EB]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente reiciendis dolorum cupiditate dignissimos laboriosam nesciunt, voluptas fuga libero quibusdam saepe enim nostrum error aut molestiae qui sequi nemo iste assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam autem quasi exercitationem fuga, magni quam aliquam. Beatae reiciendis, magnam corrupti odio maxime fugiat sit illum doloremque necessitatibus ut tempora!</li>
                        <li className="pt-5 text-[#030712] text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente reiciendis dolorum cupiditate dignissimos laboriosam nesciunt, voluptas fuga libero quibusdam saepe enim nostrum error aut molestiae qui sequi nemo iste assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam autem quasi exercitationem fuga, magni quam aliquam. Beatae reiciendis, magnam corrupti odio maxime fugiat sit illum doloremque necessitatibus ut tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda dicta quo suscipit ut.</li>
                    </ul>
                    <div className="flex flex-col gap-5">
                        <h1 className="font-bold text-[#030712] text-[18px]">Related products</h1>
                        <ul className=" mb-[60px] flex border-y border-l shadow-lg shadow-[#e8e9eb] border-[#E5E7EB] rounded-lg ">
                                {pfilter.slice(0, 6).map((item: entity) => (
                                <Product key={item.id} id={item.id} runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-r border-[#E5E7EB] rounded-lg"/>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage