import { FC } from "react"
// components
// assets
import divider from "../../assets/profile_other/Info/divider.png";
import bottom_divider from "../../assets/profile_other/TContainer/divider.png"

interface Props{

}
const TContainer:FC<Props>=()=>{
    return (
        <>
          <div className="bg-[#170F44] p-4 rounded-lg flex justify-between pl-8 pr-8 flex relative mb-4">
            <div className="flex space-x-2 items-center relative">
              <p className="text-white text-xl leading-relaxed" >Created ART</p>
              <p className="text-[#E73583] text-xl">16</p>

              <div className="absolute top-16">
                <img src={bottom_divider} />
              </div>
            </div>
            <div>
              <img src={divider} />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-[#C5C3D0] text-xl leading-relaxed" >Approval NFT's</p>
              <p className="text-[#E73583] text-xl">16</p>
            </div>
            <div>
              <img src={divider} />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-[#C5C3D0] text-xl leading-relaxed opacity-60" >Active Competition</p>
              <p className="text-[#E73583] text-xl">16</p>
            </div>
            <div>
              <img src={divider} />
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-[#C5C3D0] text-xl leading-relaxed opacity-60" >Rejected NFT's</p>
              <p className="text-[#E73583] text-xl">16</p>
            </div>
          </div>
        </>
    )
}
export default TContainer