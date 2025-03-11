import Image, {StaticImageData} from "next/image";

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

export const ImageCarousel: React.FC<ImageProps> = ({src, alt}) => {
    return(
        <div>
            <Image src={src} alt={alt} fill></Image>
        </div>
    )
}