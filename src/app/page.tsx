import { BlogHome } from "@/components/Home/BlogHome";
import { Carousel } from "@/components/Home/Carousel.tsx";
import { CategoryGroup } from "@/components/Home/CategoryImg/CategoryGroup";
import { TitleHome } from "@/components/Home/TitleHome";
import { fetchProducts } from "@/services/api";
import mini1 from "../../public/assets/Background/MiniBg1.svg"
import mini2 from "../../public/assets/Background/MiniBg2.svg"
import mini3 from "../../public/assets/Background/MiniBg3.svg"
import { BannerHome } from "@/components/Home/BannerHome";
import { BgPromo } from "@/components/Home/BgPromo";
import { GroupPr1 } from "@/components/GroupPr/GroupPr1";
import { GroupPr2 } from "@/components/GroupPr/GroupPr2";
import { GroupPr3 } from "@/components/GroupPr/GroupPr3";



const Home = async () => {

    const data = await fetchProducts();
    const products = data.products

  return (
    <div>
      <Carousel/>
      <div className="flex flex-col gap-[70px]">
        <CategoryGroup/>
        <div className="bg-gradient-to-b from-0% from-[#ECEBEE] to-100% to-[#FFFFFF]  py-[70px]">
          <div className=" flex flex-col gap-[25px]">
            <GroupPr1 data={products}/>
            <GroupPr2 data={products}/>
            <BgPromo/>
            <GroupPr3 data={products}/>
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