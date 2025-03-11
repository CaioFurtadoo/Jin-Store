import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  animation: boolean;
  link: string;
}


export const CountIcons: React.FC<ImageProps> = ({src, alt, width, height, animation, link}) => {
    return(
        <Link href={link} className="relative cursor-pointer">
            <Image className="hover:scale-[105%]" src={src} alt={alt} width={width} height={height}></Image>
            <div className={`absolute top-[-6] right-[-7] flex items-center justify-center w-[17px] h-[17px] rounded-full bg-[#DC2626] text-[#FEF2F2] font-semibold text-[10px] ${animation === true ? "animate-bounce" : ""}`}>0</div>
        </Link>
    )
}