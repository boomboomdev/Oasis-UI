import { FC } from "react"
// components
import Card from "../home/ongoing/card";
import GradientButton from "../common/gradient_button";
// assets
import card_img from "../../assets/home/ongoing/card_img_3.png";
interface Props{

}
const All:FC<Props>=()=>{
    return (
        <>
          <div className="flex space-x-9 mb-9">
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
          </div>
          <div className="flex space-x-9 mb-9">
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
          </div>
          <div className="flex space-x-9 mb-9">
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
            <div className="basis-1/3">
              <Card image={card_img} />
            </div>
          </div>

          <div className="flex justify-center mb-9">
            <GradientButton value="See More" />
          </div>
        </>
    )
}
export default All