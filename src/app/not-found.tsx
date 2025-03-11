import Link from "next/link";
import Image from "next/image";
import error404 from "../../public/assets/icons/404erro.svg"


export default function NotFoundPage() {
  return (
    <div className="flex justify-center flex-col items-center h-[80vh]">
        <Image src={error404} alt="error404" width={873} height={376}></Image>
        <h1 className="font-bold text-[#030712] text-[56px]">This Page Cant Be Found</h1>
        <p className=" text-[#6B7280] mt-[11px] mb-[33px] w-[480px] text-center">It looks like nothing was found at this location. Maybe try to search for what you are looking for?</p>

      <Link href="/" className="rounded-[8px] text-white bg-[#634C9F] px-[18px] text-[14px] font-bold py-[13px]">
        Go to Homepage
      </Link>
    </div>
  );
}