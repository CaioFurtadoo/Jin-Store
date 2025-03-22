import { TitleHome } from "@/components/Home/TitleHome"
import { Product } from "@/components/Products"

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
export const GroupPr1: React.FC<GroupProps> = ({data}) => {
    return(
        <section className="flex flex-col gap-[27px] items-center ">
            <TitleHome title="Editor’s Pick" subtitle="New products with updated stocks." link="/"/>
            <div className="flex justify-center items-center">
                <div className="border border-[#E5E7EB] flex rounded-lg">
                <Product data={data} id="5" runOut={true} bigRunOut={false} inStock={false} timer={false} background="bg-white" border="rounded-l-lg border-r border-[#E5E7EB]"/>
                <div className="flex flex-col">
                    <Product data={data} id="4" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="border-b border-[#E5E7EB]"/>
                    <Product data={data} id="2" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border=""/>
                </div>
                <Product data={data} id="6" runOut={true} bigRunOut={false} inStock={false} timer={false} background="bg-white" border=" border-x border-[#E5E7EB]"/>
                <div className="flex flex-col">
                    <Product data={data} id="3" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="border-b border-[#E5E7EB] rounded-tr-lg"/>
                    <Product data={data} id="1" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="rounded-br-lg"/>
                </div>
            </div>
            </div>
        </section>
    )
}