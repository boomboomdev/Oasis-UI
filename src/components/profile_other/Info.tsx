import { FC } from "react"
// components
// assets
import divider from "../../assets/profile_other/Info/divider.png";
import follow from "../../assets/profile_other/Info/follow.png";
import copy from "../../assets/profile_other/Info/copy.png";

interface Props{
  active?: boolean;
}
const Info:FC<Props>=(props)=>{
    return (
        <>
          <div className="bg-[#170F44] p-4 rounded-lg flex justify-between pl-8 pr-8 mb-4">
            <div className="flex space-x-8">
              <div className="flex flex-col">
                <p className="text-white text-xl leading-relaxed" >Created ART</p>
                <p className="text-[#E73583] text-sm">16</p>
              </div>
              <div>
                <img src={divider} />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-xl leading-relaxed" >Like</p>
                <p className="text-[#E73583] text-sm">879,502</p>
              </div>
              <div>
                <img src={divider} />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-xl leading-relaxed" >Followers</p>
                <p className="text-[#E73583] text-sm">5,870</p>
              </div>
              <div>
                <img src={divider} />
              </div>
              <div className="flex flex-col">
                <p className="text-white text-xl leading-relaxed" >Followed</p>
                <p className="text-[#E73583] text-sm">360</p>
              </div>
              {
                props.active ? (
                  <div>
                    <img src={follow} />
                  </div>
                ) : (
                  <></>
                )
              }
            </div>
            <div className="border-2 border-[#848383] rounded-full w-[200px] h-[55px] flex justify-between items-center pl-4 pr-4">
              <div>
                <p className="text-white text-sm">13b9ebda0178...</p>
              </div>
              <div>
                <img src={copy} />
              </div>
            </div>
          </div>
        </>
    )
}
export default Info