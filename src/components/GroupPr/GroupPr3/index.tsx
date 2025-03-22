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
export const GroupPr3: React.FC<GroupProps> = ({data}) => {
    return(
            <section className="flex flex-col gap-[27px] items-center">
              <TitleHome title="BEST SELLERS" subtitle="Dont miss this opportunity at a special discount just for this week." link="/"/>
              <div className="flex gap-[30px] justify-center">
                <div>
                  <Product data={data} id="18" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-t-lg"/>
                  <Product data={data} id="23" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-x-2 border-[#E5E7EB]"/>
                  <Product data={data} id="12" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-b-lg"/>
                </div>
                <Product data={data} id="13" runOut={false} bigRunOut={true} inStock={false} timer={false} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-lg"/>
                <div>
                  <Product data={data} id="14" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-t-lg"/>
                  <Product data={data} id="16" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-x-2 border-[#E5E7EB]"/>
                  <Product data={data} id="28" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-b-lg"/>
                </div>
              </div>
            </section>
    )
}