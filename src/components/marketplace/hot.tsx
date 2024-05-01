import { FC } from "react"
// components
import Card from "./hot/card";
// assets
import fire from "../../assets/marketplace/fire.png";
import card_image from "../../assets/marketplace/hot/card-image.png";
interface Props{

}
const Hot:FC<Props>=()=>{
    return (
        <>
          <div className="flex space-x-4 mb-9">
            <div>
              <img src={fire} />
            </div>
            <div>
              <h1 className="text-3xl text-white" >HOT NFT's Competition</h1>
            </div>
          </div>
          <div className="flex space-x-4 mb-9">
            <div className="basis-1/2">
              <Card image={card_image} />
            </div>
            <div className="basis-1/2">
              <Card image={card_image} />
            </div>
          </div>
        </>
    )
}
export default Hot