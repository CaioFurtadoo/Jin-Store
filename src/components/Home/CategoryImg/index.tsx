import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  text: string;
  link: string;
}

export const CategoryImg: React.FC<ImageProps> = ({src, alt, text, link}) => {
    return(
        <Link href={link} className="flex flex-col  gap-[7px] items-center group cursor-pointer">
            <button className="cursor-pointer rounded-full bg-[#F3F4F6] transition-all duration-500 group-hover:bg-[#dddfe2]">
                <Image className=" transition-all duration-500 group-hover:rotate-y-180" src={src} alt={alt} width={122} height={122}></Image>
            </button>
            <p className="font-bold text-[13px] text-[#030712] transition group-hover:scale-105">{text}</p>
        </Link>
    )
}