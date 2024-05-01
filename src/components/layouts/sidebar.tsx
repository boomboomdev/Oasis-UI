import { FC } from "react"
// components
import Item from "./sidebar/item"
// assets
import home from "../../assets/common/sidebar/home.png";
import dashboard from "../../assets/common/sidebar/dashboard.png";
import dashboard_active from "../../assets/common/sidebar/dashboard-active.png";
import profile from "../../assets/common/sidebar/profile.png";
import profile_active from "../../assets/common/sidebar/profile-active.png";
import nft from "../../assets/common/sidebar/nft.png";
import nft_active from "../../assets/common/sidebar/nft-active.png";
import moderator from "../../assets/common/sidebar/moderator.png";
import moderator_active from "../../assets/common/sidebar/moderator-active.png";
import reward from "../../assets/common/sidebar/reward.png";
import reward_active from "../../assets/common/sidebar/reward-active.png";
import voting from "../../assets/common/sidebar/voting.png";
import logout from "../../assets/common/sidebar/logout.png";
interface Props{
    active: string;
}
const Sidebar:FC<Props>=(props)=>{
  return (
    <>
      <div className="w-[250px] bg-[#170F44] min-h-screen">
        <h1 className="text-3xl text-white mt-12 ml-12 mb-16" >LOGO</h1>
        <div className="flex flex-col">
          <Item image={home} title="Home Page" />
          <Item image={dashboard} active_image={dashboard_active} title="NFT Marketplace" active={props.active === "dashboard"} />
          <Item image={profile} active_image={profile_active} title="My Profile" active={props.active === "profile"} />
          <Item image={nft} active_image={nft_active} title="NFT Submission" active={props.active === "nft"} />
          <Item image={moderator} active_image={moderator_active} title="Moderator Panel" active={props.active === "moderator"} />
          <Item image={reward} active_image={reward_active} title="Rewards & Payout" active={props.active === "reward"} />
          <Item image={voting} title="Voting & Competition" />
          <Item image={logout} title="Log Out" />
        </div>
      </div>
    </>
  )
}
export default Sidebar