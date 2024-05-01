import { FC } from "react"
// components
// assets
import twitter from "../../assets/home/footer/twitter.png";
import discord from "../../assets/home/footer/discord.png";
import telegram from "../../assets/home/footer/telegram.png";
interface Props{

}
const Footer:FC<Props>=()=>{
    return (
        <>
          <div className="flex flex-col items-center">
            <hr className="bg-[#D9D9D9] w-full opacity-50 mb-4" />
            <p className="text-[#D9D9D9] text-3xl leading-relaxed flex-none" >Brand Name © 2024 | All Rights Reserved</p>
            <div className="flex space-x-4 m-4">
              <div>
                <img className=""  src={twitter}  />
              </div>
              <div>
                <img className=""  src={discord}  />
              </div>
              <div>
                <img className=""  src={telegram}  />
              </div>
            </div>
          </div>
        </>
    )
}
export default Footer