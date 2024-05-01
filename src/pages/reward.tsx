import { FC } from "react";
import Sidebar from "../components/layouts/sidebar";
import SHeader from "../components/layouts/SHeader";
import Distribution from "../components/reward/Distribution";
import Pool from "../components/reward/Pool";
import Transaction from "../components/reward/Transaction";
interface Props{

}
const Reward:FC<Props>=()=>{
  return (
    <>
      <div className="flex">
        <Sidebar active="reward" />
        <div className="flex-1">
          <div className="md:container mx-auto px-4 py-3">
            <SHeader />
            
            <div className="flex flex-col items-center mb-8">
              <p className="text-white text-4xl leading-relaxed" >Rewards & Payout</p>
              <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              <p className="text-white text-lg">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            </div>

            <div className="flex space-x-4">
              <div className="basis-2/3">
                <Pool />
              </div>
              <div className="basis-1/3">
                <Distribution />
              </div>
            </div>
            <Transaction />
          </div>
        </div>
      </div>
    </>
  )
}
export default Reward