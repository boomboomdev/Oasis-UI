import { FC } from "react"
// assets
import divider from "../../assets/common/SHeader/divider.png";
import bell from "../../assets/common/SHeader/bell.png";
import dotted from "../../assets/common/SHeader/dotted.png";
import avatar from "../../assets/common/SHeader/avatar.png";
import SearchBar from "../common/SearchBar";

const SHeader:FC=()=>{
    return (
        <>
          <div className="flex justify-between mt-9 mb-9">
            <div className="flex items-center">
              <SearchBar value="Search here..." />
            </div>
            <div className="flex items-center space-x-4">
              <img src={bell} />
              <img src={divider} />
              <div className="flex space-x-4">
                <div className="flex flex-col items-end justify-center">
                  <p className="text-[#E73583] text-lg leading-relaxed" >@Ronin_45</p>
                  <p className="text-[#1D950A] text-sm leading-relaxed" >Active</p>
                </div>
                <div className="w-[70px] h-[70px] flex justify-center items-center" style={{backgroundImage: `url(${dotted})`}}>
                  <img src={avatar} />
                </div>
              </div>
            </div>
          </div>
        </>    
    )
}
export default SHeader;