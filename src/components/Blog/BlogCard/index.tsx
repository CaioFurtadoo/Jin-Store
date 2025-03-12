import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface BlogCardProps{
    title: string;
    subtitle: string;
    by: string;
    date: string;
    category: string;
    src: StaticImageData;
    alt: string;
    id: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({title, id, subtitle, by, date, category, src, alt}) => {
    return(
        <Link  href="/blog" className="hover:scale-105 transition-all duration-300">
            <div id={id} className="flex flex-col gap-2.5 w-[318px] transition-all duration-300">
                <div className="overflow-hidden rounded-md relative z-[-1]">
                    <Image src={src} alt={alt} width={318} height={220}></Image>
                    <div className="bg-white px-2 py-[5px] absolute z-10 top-3 left-2.5 font-bold text-[11px] text-[#634C9F] rounded-md">{category}</div>
                </div>
                <h1 className="leading-6 mt-1.5 font-bold text-[16px] text-[#030712]">{title}</h1>
                <p className="text-[#4B5563] text-[13px]">{subtitle}</p>
                <div className="mt-2 flex gap-[22px] items-center text-[12px]">
                    <p className="italic text-[#6B7280]">by <strong className="not-italic font-semibold text-[#374151]">{by}</strong></p>
                    <p className="text-[#374151]">{date}</p>
                </div>
            </div>
        </Link>
    )
}