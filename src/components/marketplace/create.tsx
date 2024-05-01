import { FC } from "react"
// components
// assets
import back from "../../assets/marketplace/create/back.png";
import avatar from "../../assets/marketplace/create/avatar.png";
import GradientButton from "../common/gradient_button";
import LItem from "./create/LItem";
import TransparentButton from "../common/transparent_button";
import SearchBar from "../common/SearchBar";
interface Props{

}
const Create:FC<Props>=()=>{
    return (
        <>
        <div className="flex">
          <div className="w-full relative flex space-x-8 mb-9">
            <div className="basis-2/3 relative">
              <img className="w-full" src={back} />
              <div className="absolute left-8 top-0 h-full flex flex-col space-y-8 justify-center">
                <h1 className="text-3xl text-white font-bold" >Create Your</h1>
                <h1 className="text-3xl text-[#E73583] font-bold" >Own NFT</h1>
                <GradientButton value="Submit Your NFT" />
              </div>
              <img className="absolute right-0 bottom-0" style={{'width': "44%"}} src={avatar} />
            </div>
            <div className="basis-1/3 bg-[#170F44] rounded-2xl flex flex-col">
              <div className="basis-1/5 flex items-center pl-4">
                <p className="text-white text-xl leading-relaxed" >Overview Stats</p>
              </div>
              <div className="basis-1/5">
                <LItem title="NFTs submitted" value="12" color="text-white" />
              </div>
              <div className="basis-1/5">
                <LItem title="Awaiting approval" value="03" color="text-[#FFB800]" />
              </div>
              <div className="basis-1/5">
                <LItem title="Active competitions" value="05" color="text-[#1D950A]" />
              </div>
              <div className="basis-1/5">
                <LItem title="Cancelled NFTs" value="02" color="text-[#FF2E00]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-9 mt-4">
          <div className="flex space-x-4">
            <TransparentButton value="Approval NFT's" />
            <GradientButton value="Active Competition" />
            <TransparentButton value="Cancelled NFT's" />
          </div>
          <div>
            <SearchBar value="Search nft" />
          </div>
        </div>
        </>
    )
}
export default Create