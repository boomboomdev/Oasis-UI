import { FC } from "react";
// components
import Card from "./ongoing/card";
// assets
import card_img_1 from "../../assets/home/ongoing/card_img_1.png";
import card_img_2 from "../../assets/home/ongoing/card_img_2.png";
import card_img_3 from "../../assets/home/ongoing/card_img_3.png";
import star from "../../assets/home/ongoing/star.png";

interface Props{

}
const Ongoing:FC<Props>=()=>{
    return (
        <>
          <img className="absolute left-[6%] top-[-240px] w-[75%]"  src={star}  />
          <p className="text-white text-7xl leading-relaxed mt-28" >Ongoing Competition</p>
          <p className="text-white text-lg">Discover a vibrant community where artists and collectors meet to create, trade, </p>
          <p className="text-white text-lg mb-8"> and celebrate digital art. Whether you're here to mint your first NFT or t</p>

          <div className="flex w-full space-x-9 mt-9">
            <div className="basis-1/3">
              <Card image={card_img_1} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img_2} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img_3} />
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <div className="w-[50px] h-[50px] bg-transparent text-[#E73583] text-3xl border-[#E73583] rounded-full border-2 flex justify-center items-center">
              <p>&lt;</p>
            </div>
            <div className="w-[50px] h-[50px] bg-[#E73583] text-white text-3xl border-[#E73583] rounded-full border-2 flex justify-center items-center">
              <p>&gt;</p>
            </div>
          </div>
        </>
    )
}
export default Ongoing