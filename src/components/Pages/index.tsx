import Image from "next/image"
import sideArrowGray from "../../../public/assets/icons/SideArrowGray.svg"

interface text{
    before: string;
    category: string;
    actual: string;
}

export const PagesText: React.FC<text> = ({before, actual, category}) => {
    return(
        <ul className="flex gap-3.5 text-[12px] ml-[280px] my-[20px]">
            <li className="flex gap-1 text-[#9CA3AF]">{before}{<Image src={sideArrowGray} alt="side arrow gray"></Image>}</li>
            {category != "" ? <li className="flex gap-1 text-[#9CA3AF]">{category}<Image src={sideArrowGray} alt="side arrow gray"></Image></li> : ""}
            <li className="text-[#030712]">{actual}</li>
        </ul>
    )
}