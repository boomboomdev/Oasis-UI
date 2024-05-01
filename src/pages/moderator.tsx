import { FC } from "react";
// components
import Sidebar from "../components/layouts/sidebar";
import SHeader from "../components/layouts/SHeader";
import Footer from "../components/layouts/footer";
import TContainer from "../components/moderator/TContainer";
import Card from "../../src/components/moderator/card";
import GradientButton from "../components/common/gradient_button";
// assets
import card_img_3 from "../assets/home/ongoing/card_img_3.png";
interface Props{

}
const Moderator:FC<Props>=()=>{
  return (
    <>
      <div className="flex">
        <Sidebar active="moderator" />
        <div className="flex-1">
          <div className="md:container mx-auto px-4 py-3">
            <SHeader />
            
            <div className="flex flex-col items-center mb-8">
              <p className="text-white text-4xl leading-relaxed" >Moderator Panel</p>
              <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              <p className="text-white text-lg">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

            <TContainer />

            <div className="flex space-x-4">
              <div className="basis-1/3">
                <Card image={card_img_3} />
              </div>
              <div className="basis-1/3">
                <Card image={card_img_3} />
              </div>
              <div className="basis-1/3">
                <Card image={card_img_3} />
              </div>
            </div>
            
            <div className="flex justify-center mt-12 mb-12">
              <GradientButton value="See More" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Moderator