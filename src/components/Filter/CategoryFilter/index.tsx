"use client"

import { FilterCheckbox } from "@/components/Pages/FilterCheckbox"
import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

    const categories = [
    "Fruits",
    "Baby",
    "Beverages",
    "Meats",
    "Biscuits",
    "Breads",
    "Breakfast",
    "Frozen Foods",
    "Grocery"
]

export const CategoryFilter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    
    const currentCategories = searchParams.get("categories")?.split(",") || []
    
    const [selectedCategories, setSelectedCategories] = useState<string[]>(currentCategories)

    useEffect(() => {
        const query = selectedCategories.length > 0 ? `?categories=${selectedCategories.join(",")}` : ""
        router.push(`/filter${query}`)
    }, [selectedCategories, router])

    const handleCheckboxChange = (category: string, checked: boolean) => {
        setSelectedCategories((prev) =>
            checked ? [...prev, category] : prev.filter((c) => c !== category)
        )
    }

    return (
        <div className="min-w-[160px] flex gap-3 flex-col">
            <h1 className="font-semibold gap-3.5 mb-2.5 text-[#030712] text-[14px]">Product Categories</h1>
            {categories.map((category) => (
                <FilterCheckbox
                    key={category}
                    text={category}
                    checked={selectedCategories.includes(category)}
                    onChange={(checked) => handleCheckboxChange(category, checked)}
                />
            ))}
        </div>
    )
}
