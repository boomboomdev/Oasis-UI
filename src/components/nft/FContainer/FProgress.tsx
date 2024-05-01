import { FC } from "react"
// components
// assets
import png from "../../../assets/nft/FContainer/FProgress/png.png";
interface Props{
  label: string;
}
const FProgress:FC<Props>=(props)=>{
    return (
        <>
          <div className="mt-4">
            <p className="text-lg text-white mb-2">{props.label}</p>
            <div className="bg-[#1F1D5B] rounded-md w-full h-[100px] flex justify-center items-center pl-4 pr-4">
              <div className="bg-black rounded-md w-full h-[70px] flex items-center space-x-4 p-4">
                <div className="flex-none">
                  <img src={png} />
                </div>
                <div className="flex-1 relative flex flex-col justify-end">
                  <div className="flex justify-between">
                    <p className="text-white text-lg">File Name.png</p>
                    <p className="text-white text-lg">89%</p>
                  </div>
                  <div>
                    <div className="h-[10px] w-full bg-[#D9D9D9] rounded-full"></div>
                    <div className="h-[10px] w-4/5 bg-[#50B4FF] rounded-full absolute bottom-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default FProgress