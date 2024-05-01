import { FC } from "react"
// components
// assets
import avatar from "../../assets/profile_other/ICard/avatar.png";
import check from "../../assets/profile_other/ICard/check.png";
import location from "../../assets/profile_other/ICard/location.png";
import link from "../../assets/profile_other/ICard/link.png";
import date from "../../assets/profile_other/ICard/date.png";
interface Props{

}
const ICard:FC<Props>=()=>{
    return (
        <>
          <div className="bg-[#170F44] flex-none p-4 rounded-lg flex flex-col w-[300px] h-[540px] mt-[-75px]">
            <img src={avatar} />
            
            <div className="">
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-3xl text-white " >Kallaban Joy</h1>
                <img src={check} />
              </div>
              <div>
                <p className="text-[#E73583] text-base w-full mt-2">@Kallaban_Joy35</p>
                <p className="text-[#AEA9A9] text-sm w-full mt-2">My name is Justin Baker & change my occupation after five years of working in sales. I still like drawing. </p>
                <div className="flex items-center space-x-2 mt-4">
                  <div>
                    <img src={location} />
                  </div>
                  <div>
                    <p className="text-[#AEA9A9] text-sm w-full">Bran Street New York, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <div>
                    <img src={link} />
                  </div>
                  <div>
                    <p className="text-[#AEA9A9] text-sm w-full">bit.ly/yte89k6</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <div>
                    <img src={date} />
                  </div>
                  <div>
                    <p className="text-[#AEA9A9] text-sm w-full">Joined March 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default ICard