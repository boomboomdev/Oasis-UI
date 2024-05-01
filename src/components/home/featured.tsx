import { FC } from "react";
// components
import GradientButton from "../common/gradient_button";
import TransparentButton from "../common/transparent_button";
import Card from "./featured/card";
// assets
import card_img from "../../assets/home/featured/card_img.png";
import SearchBar from "../common/SearchBar";
import star from "../../assets/home/featured/star.png";
interface Props{

}
const Featured:FC<Props>=()=>{
    return (
        <>
          <img className="absolute left-[15%] top-[-240px] w-[75%]"  src={star}  />
          <div className="flex mt-28">
            <p className="text-white text-7xl leading-relaxed" >Featured&nbsp;</p>
            <p className="text-7xl leading-relaxed" style={{"background": "-webkit-linear-gradient(top, #E73583, #7C65FF, #50B4FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>NFT</p>
          </div>
          <p className="text-white text-lg">Discover a vibrant community where artists and collectors meet to create, trade, </p>
          <p className="text-white text-lg mb-16"> and celebrate digital art. Whether you're here to mint your first NFT or t</p>

          <div className="flex justify-between w-full">
            <div className="flex space-x-4">
              <TransparentButton value="Most Recent" />
              <GradientButton value="Gaming NFT" />
              <TransparentButton value="Top Rated" />
            </div>
            <div className="flex">
              <SearchBar value="Search nft" />
            </div>
          </div>

          <div className="flex w-full space-x-9 mb-9 mt-9">
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
          </div>
          <div className="flex w-full space-x-9 mb-9">
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
            <div className="basis-1/4">
              <Card image={card_img} />
            </div>
          </div>

          <GradientButton value="See All" />
        </>
    )
}
export default Featured