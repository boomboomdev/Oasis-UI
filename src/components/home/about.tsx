import { FC } from "react"
// components
import Card from "./about/card";
// assets
import card_img_1 from "../../assets/home/about/card_img_1.png";
import card_img_2 from "../../assets/home/about/card_img_2.png";
import card_img_3 from "../../assets/home/about/card_img_3.png";
import card_img_4 from "../../assets/home/about/card_img_4.png";
import star from "../../assets/home/about/star.png";
interface Props{

}
const About:FC<Props>=()=>{
    return (
        <>
          <img className="absolute left-[15%] top-[-195px] w-[75%]"  src={star}  />
          <p className="text-white text-7xl leading-relaxed pt-28" >About Us</p>
          <p className="text-white text-lg">Discover a vibrant community where artists and collectors meet to create, trade, </p>
          <p className="text-white text-lg mb-8"> and celebrate digital art. Whether you're here to mint your first NFT or t</p>
          <div className="w-full flex space-x-4 mb-4">
            <div className="basis-1/2">
              <Card image={card_img_1} title="Easy to Use" description="We are dedicated to empowering artists and collectors by providing a dynamic space for creating, trading, and celebrating the limitless potential of NFTs. Our mission is to democratize digital art ownership and create a world where creativity is valued."/>
            </div>
            <div className="basis-1/2">
              <Card image={card_img_2} title="Top Rated NFT’s" description="We are dedicated to empowering artists and collectors by providing a dynamic space for creating, trading, and celebrating the limitless potential of NFTs. Our mission is to democratize digital art ownership and create a world where creativity is valued." />
            </div>
          </div>
          <div className="w-full flex space-x-4">
            <div className="basis-1/2">
              <Card active image={card_img_3} title="Streamlined Accessibility" description="We strive to offer a platform where your creative journey is unhindered by complexity. With user-friendly interfaces and step-by-step guidance, accessing the world of NFTs is as simple as a few clicks. Whether you're a digital art novice or a seasoned collector"/>
            </div>
            <div className="basis-1/2">
              <Card active image={card_img_4} title="Curated Excellence" description="Quality is paramount in the world of NFTs. Our platform highlights top-rated digital assets, showcasing exceptional artistry and innovation. Each NFT featured undergoes a rigorous selection process, ensuring that collectors" />
            </div>
          </div>
        </>
    )
}
export default About