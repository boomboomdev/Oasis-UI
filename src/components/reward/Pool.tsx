
import { FC } from "react"
import GradientButton from "../common/gradient_button"
// components
// assets
import coin from "../../assets/reward/Pool/coin.png";
import present from "../../assets/reward/Pool/present.png";
import hourglass from "../../assets/reward/Pool/hourglass.png";

interface Props{

}
const Pool:FC<Props>=()=>{
  return (
    <>
      <div className="flex">
        <div className="bg-[#170F44] rounded-s-2xl flex flex-col py-4 pl-4 pr-8 basis-2/3">
          <div className="flex">
            <p className="text-white text-xl leading-relaxed" >Total Prize Pool: &nbsp;</p>
            <p className="text-[#E73583] text-xl leading-relaxed" >$0.789ETH</p>
          </div>
          <p className="text-white text-sm w-full mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="list-disc pl-8">
            <li className="text-white">
              <div className="text-white mb-2" >1st Price: 0.789</div>
            </li>
            <li className="text-white">
              <div className="text-white mb-2" >2st Price: 0.789</div>
            </li>
            <li className="text-white">
              <div className="text-white mb-4" >3st Price: 0.789</div>
            </li>
          </ul>
          <GradientButton value="Claim Reward" />
        </div>
        <div className="bg-[#1D1454] rounded-e-2xl flex flex-col py-4 pl-4 pr-4 basis-1/3">
          <div className="basis-1/3 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex space-x-2 items-end">
                  <p className="text-white text-2xl leading-relaxed font-bold" >1,957</p>
                  <p className="text-white text-sm leading-relaxed font-bold" >PTS</p>
                </div>
              </div>
              <div>
                <p className="text-[#8E8AAA] text-sm w-full">Referral Earnings</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={coin} />
            </div>
          </div>
          <div className="basis-1/3 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex space-x-2 items-end">
                  <p className="text-white text-2xl leading-relaxed font-bold" >19</p>
                  <p className="text-white text-sm leading-relaxed font-bold" >PTS</p>
                </div>
              </div>
              <div>
                <p className="text-[#8E8AAA] text-sm w-full">User Referred</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={present} />
            </div>
          </div>
          <div className="basis-1/3 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex space-x-2 items-end">
                  <p className="text-white text-2xl leading-relaxed font-bold" >03</p>
                  <p className="text-white text-sm leading-relaxed font-bold" >PTS</p>
                </div>
              </div>
              <div>
                <p className="text-[#8E8AAA] text-sm w-full">Rewards Pending</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={hourglass} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pool