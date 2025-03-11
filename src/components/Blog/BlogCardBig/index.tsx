import Image, {StaticImageData} from "next/image";

interface BlogCardBigProps {
    category: string;
    title: string;
    subtitle: string;
    date: string;
    theme: string;
    src: StaticImageData;
    alt: string;
}

export const BlogCardBig: React.FC<BlogCardBigProps> = ({category, title, subtitle, date, theme, src, alt}) => {
    return(
        <div className="flex flex-col gap-5 w-[1012px]">
            <div className="overflow-hidden rounded-md relative z-[-1]">
                <Image src={src} alt={alt} width={1012} height={700}></Image>
                <div className="bg-white px-2 py-[5px] absolute z-10 top-3 left-2.5 font-bold text-[11px] text-[#634C9F] rounded-md">{category}</div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="leading-11 font-bold text-[#030712] text-[36px]">{title}</h1>
                <div className="leading-3 text-[12px] text-[#374151] flex gap-5">
                    <p >{date}</p>
                    <p>{theme}</p>
                </div>
            </div>
            <p className="text-[13px] text-[#4B5563]">{subtitle}</p>
            <button type="submit" className="w-[107px] cursor-pointer mt-1.5 mb-15 bg-[#634C9F] py-[11px] text-white text-[14px] rounded-lg overflow-hidden flex relative z-30 justify-center items-center before:scale-150 before:w-[100%] before:bottom-[-100px] hover:before:bottom-0 before:h-[100%] before:bg-[#39245F] before:z-[-1] before:origin-bottom before:transition-all before:duration-500 before:ease-out hover:scale-105 transition ease-in before:absolute">Read More</button>
        </div>

    )
}