import Image from "next/image"
import { BlogHome } from "@/components/Home/BlogHome";
import { Carousel } from "@/components/Home/Carousel.tsx";
import { CategoryGroup } from "@/components/Home/CategoryImg/CategoryGroup";
import { TitleHome } from "@/components/Home/TitleHome";
import { Product } from "@/components/Products";
import bgPromo from "../../public/assets/Background/BgPromo.svg"
import banner2 from "../../public/assets/Background/Banner2.svg"
import banner1 from "../../public/assets/Background/Banner1.svg"
import mini1 from "../../public/assets/Background/MiniBg1.svg"
import mini2 from "../../public/assets/Background/MiniBg2.svg"
import mini3 from "../../public/assets/Background/MiniBg3.svg"
import { BannerHome } from "@/components/Home/BannerHome";
import { BgPromo } from "@/components/Home/BgPromo";


export const Home = () => {
  return (
    <div>
      <Carousel/>
      <div className="flex flex-col gap-[70px]">
        <CategoryGroup/>
        <div className="bg-gradient-to-b from-0% from-[#ECEBEE] to-100% to-[#FFFFFF]  py-[70px]">
          <div className=" flex flex-col gap-[25px]">
            <section className="flex flex-col gap-[27px] items-center ">
              <TitleHome title="Editor’s Pick" subtitle="New products with updated stocks." link="/"/>
                <div className="flex justify-center items-center">
                  <div className="border border-[#E5E7EB] flex rounded-lg">
                    <Product id="5" runOut={true} bigRunOut={false} inStock={false} timer={false} background="bg-white" border="rounded-l-lg border-r border-[#E5E7EB]"/>
                    <div className="flex flex-col">
                      <Product id="4" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="border-b border-[#E5E7EB]"/>
                      <Product id="2" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border=""/>
                    </div>
                    <Product id="6" runOut={true} bigRunOut={false} inStock={false} timer={false} background="bg-white" border=" border-x border-[#E5E7EB]"/>
                    <div className="flex flex-col">
                      <Product id="3" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="border-b border-[#E5E7EB] rounded-tr-lg"/>
                      <Product id="1" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-white" border="rounded-br-lg"/>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-[27px] items-center">
              <TitleHome title="Category Products" subtitle="Do not miss the current offers until the end of March." link="/"/>
              <div className="flex justify-center items-center flex-col">
                <div className="flex justify-center items-center flex-col border border-[#E5E7EB] rounded-lg">
                  <div className="flex">
                    <BannerHome border="border-b border-[#E5E7EB] rounded-tl-lg" src={banner1} alt="teste" width={678} height={240} id={1} title="Make your grocery shopping easy with us" subtitle="Feed your family the best"/>
                    <BannerHome border="border-b border-[#E5E7EB] rounded-tr-lg" src={banner2} alt="teste" width={678} height={240} id={1} title="Get your everyday needs here with us" subtitle="A different kind of grocery store"/>
                  </div>
                  <div className="flex">
                    <Product id="38" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="rounded-bl-lg"/>
                    <Product id="7" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB]"/>
                    <Product id="8" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border=""/>
                    <Product id="9" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB]"/>
                    <Product id="10" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border=""/>
                    <Product id="11" runOut={false} bigRunOut={false} inStock={true} timer={false} background="bg-white" border="border-x border-[#E5E7EB] rounded-br-lg"/>
                  </div>
                </div>
              </div>
            </section>
            <BgPromo/>
            <section className="flex flex-col gap-[27px] items-center">
              <TitleHome title="BEST SELLERS" subtitle="Dont miss this opportunity at a special discount just for this week." link="/"/>
              <div className="flex gap-[30px] justify-center">
                <div>
                  <Product id="18" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-t-lg"/>
                  <Product id="23" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-x-2 border-[#E5E7EB]"/>
                  <Product id="12" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-b-lg"/>
                </div>
                <Product id="13" runOut={false} bigRunOut={true} inStock={false} timer={false} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-lg"/>
                <div>
                  <Product id="14" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-t-lg"/>
                  <Product id="16" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-x-2 border-[#E5E7EB]"/>
                  <Product id="28" runOut={false} bigRunOut={false} inStock={false} timer={true} background="bg-transparent" border="border-2 border-[#E5E7EB] rounded-b-lg"/>
                </div>
              </div>
            </section>
            <section className="flex gap-[30px] justify-center">
                <BannerHome border="rounded-lg" src={mini1} alt="teste" width={432} height={220} id={2} title="We provide you the best quality products" subtitle="A family place for grocery"/>
                <BannerHome border="rounded-lg" src={mini2} alt="teste" width={433} height={220} id={2} title="We make your grocery shopping more exciting" subtitle="Shine the morning..."/>
                <BannerHome border="rounded-lg" src={mini3} alt="teste" width={433} height={220} id={2} title="The one supermarket that saves your money" subtitle="Breakfast made better"/>              
            </section>
            <section className="flex flex-col gap-[27px] items-center">
              <TitleHome title="Our News" subtitle="Some of the new posts this week" link="/blog"/>
              <BlogHome/>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;