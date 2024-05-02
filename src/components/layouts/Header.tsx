import { FC } from "react"
// assets
import logo from "../../assets/home/logo.png";
// components
import AWrapper from "../common/AWrapper";
import DropButton from "./header/DropButton";

const Header:FC=()=>{
    return (
      <nav className="flex z-40 w-full h-auto items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70 h-16">
        <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-16 max-w-6xl">
          <AWrapper>
            <img src={logo} />
          </AWrapper>
          <ul className="h-full flex-row flex-nowrap items-center hidden sm:flex gap-4 text-white">
              <DropButton title="dApp" />
              <DropButton title="Socials" />
              <DropButton title="Others" />
              <button className="!p-2 rounded-2xl bg-white text-black/90 hover:bg-[#fff055] hover:text-black/90 text-xs sm:text-base tw-connect-wallet" style={{ fontSize: '16px', fontWeight: '500', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', boxSizing: 'border-box', lineHeight: 'normal', gap: 0, background: 'hsl(256, 6.0%, 93.2%)', color: 'hsl(230deg 11.63% 8.43%)', minWidth: '140px'}}>Connect Wallet</button>
          </ul>
        </header>
      </nav>
    )
}
export default Header;