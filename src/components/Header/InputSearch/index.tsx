import Image from "next/image";
import Form from 'next/form'
import search from "../../../../public/assets/icons/Search.svg";

export const InputSearch = () => {
    return(
        <Form action="/filter" className="relative flex items-center w-[863px]">
            <input 
                className="py-[14.5px] pl-[18px] pr-[62px] bg-[#F3F4F6] rounded-lg max-w-[863px] w-[100%]  focus:outline-1 focus:outline-gray-200"
                placeholder="Search for products, categories or brands..." 
                type="text" 
                name="query"
            />
            <button type="submit" className="absolute right-4 hover:scale-[104%] transition-transform hover:backdrop-blur-xs cursor-pointer">
                <Image src={search} alt="Arrow Down" width={21} height={21} />
            </button> 
        </Form>
    );
}