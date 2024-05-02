import { FC } from "react"
import TabItem from "./TabContainer/TabItem"
// assets
import folder from "../../assets/home/TabContainer/folder.svg";
import collateral from "../../assets/home/TabContainer/collateral.svg";
import borrow from "../../assets/home/TabContainer/borrow.svg";
import staking from "../../assets/home/TabContainer/staking.svg";
// components
import Auction from "../common/svg/Auction";

interface Props {
  active: string;
}
const TabContainer:FC<Props>=(props)=>{
    return (
        <>
          <div className="inline-flex">
            <div className="flex h-fit items-center flex-nowrap bg-transparent dark:bg-transparent gap-2 sm:gap-6 w-full relative rounded-none p-0 border-b border-white border-opacity-15 justify-evenly sm:justify-between">
              <TabItem title="Dashboard" image={folder} active={props.active === "dashboard" ? true : false} />
              <TabItem title="Collateral" image={collateral} />
              <TabItem title="Borrow" image={borrow} active={props.active === "borrow" ? true : false} />
              <TabItem title="Staking" image={staking} />
              <TabItem title="Auctions" svg={<Auction />} isSvg />
            </div>
          </div>
        </>
    )
}
export default TabContainer