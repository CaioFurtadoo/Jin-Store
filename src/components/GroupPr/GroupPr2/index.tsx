import { BannerHome } from "@/components/Home/BannerHome";
import { TitleHome } from "@/components/Home/TitleHome";
import { Product } from "@/components/Products";
import banner2 from "../../../../public/assets/Background/Banner2.svg"
import banner1 from "../../../../public/assets/Background/Banner1.svg"

interface entity{
    id: string
    title: string
    valueA: number
    valueB: number
    image: string
    category: string
}

interface GroupProps {
    data: entity[];
}

export const GroupPr2: React.FC<GroupProps> = ({data}) => {
    return(
        <section className="flex flex-col gap-[27px] items-center">
            <TitleHome title="Category Products" subtitle="Do not miss the current offers until the end of March." link="/"/>
            <div className="flex justify-center items-center flex-col">
                <div className="flex justify-center items-center flex-col border border-[#E5E7EB] rounded-lg">
                    <div className="flex">
                    <BannerHome border="border-b border-[#E5E7EB] rounded-tl-lg" src={banner1} alt="teste" width={678} height={240} id={1} title="Make your grocery shopping easy with us" subtitle="Feed your family the best"/>
                    <BannerHome border="border-b border-[#E5E7EB] rounded-tr-lg" src={banner2} alt="teste" width={678} height={240} id={1} title="Get your everyday needs here with us" subtitle="A different kind of grocery store"/>
                    </div>
                    <div className="flex">
                    <Product data={data} id="38" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="rounded-bl-lg"/>
                    <Product data={data} id="7" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB]"/>
                    <Product data={data} id="8" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border=""/>
                    <Product data={data} id="9" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB]"/>
                    <Product data={data} id="10" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border=""/>
                    <Product data={data} id="11" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB] rounded-br-lg"/>
                    </div>
                </div>
            </div>
        </section>
    );
}