import { CategoryFilter } from "@/components/Filter/CategoryFilter"
import { BannerHome } from "@/components/Home/BannerHome"
import { PagesText } from "@/components/Pages"
import { Product } from "@/components/Products"
import Image from "next/image"
import banner3 from "../../../../public/assets/Background/Banner3.svg"
import productView from "../../../../public/assets/icons/ProductViews.svg"
import { fetchProducts } from "@/services/api";

interface Entity {
    id: string
    title: string
    valueA: number
    valueB: number
    image: string
    category: string
}

interface SearchParams {
    categories?: string,
    query?: string
}


const filter = async ({ searchParams }: { searchParams: Promise<SearchParams> }) => {
    
    const {categories, query = ""} = await searchParams

    const categoriesFormatted = categories?.split(",") || []

    const data = await fetchProducts();

    const filteredProducts = data.products.filter((product: Entity) => {
        const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase())
        const matchesCategory = categoriesFormatted.length === 0 || categoriesFormatted.includes(product.category)
        return matchesQuery && matchesCategory
    })


    return (
        <>
            <PagesText before="Home" category="" actual="filter"/>
            <div className="flex justify-center items-center mb-44">
                <div className="flex gap-10 w-[1338px]">
                    <CategoryFilter />
                <div>
                    <BannerHome border="rounded-lg" src={banner3} alt="teste" width={1130} height={276} id={3} title="Grocery store with different treasures" subtitle="We have prepared special discounts for you on grocery products..."/>
                    <ul className="my-2.5 px-3.5 py-2.5 flex justify-between rounded-lg items-center bg-[#F3F4F6] w-[1130px]">
                        <li className="text-[12px] text-[#6B7280]">Showing {filteredProducts.length} of 53 results</li>
                        <li className="text-[12px] text-[#6B7280]">
                            <ul className="flex gap-5 items-center">
                                <li className="pr-5 border-r border-[#D1D5DB] font-medium">Sort: <strong className="text-[#020617] font-medium">Sort by latest</strong></li>
                                <li className="pr-5 font-medium">Show: <strong className="text-[#020617] font-medium">{filteredProducts.length} Items</strong></li>
                                <li><Image src={productView} alt="productView" width={0} height={0} className="w-auto h-auto"></Image></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="flex flex-wrap justify">
                        {filteredProducts.map((item: Entity) => (
                            <Product data={data.products} key={item.id} id={item.id} runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border border-[#E5E7EB] rounded-lg"/>
                        ))}
                    </ul>
                </div>
                </div>
            </div>
        </>
    )
}

export default filter
