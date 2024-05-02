import { FC } from "react"
// assets
import Rare from "../common/svg/Rare";
import Rarible from "../common/svg/Rarible";
import XY from "../common/svg/XY";
import Uniswap from "../common/svg/Uniswap";
import Curve from "../common/svg/Curve";
import Telegram from "../common/svg/Telegram";
import Twitter from "../common/svg/Twitter";
import Gitbook from "../common/svg/Gitbook";
import logo from "../../assets/home/logo.png";
// components
import AWrapper from "../common/AWrapper"
interface Props{

}
const Footer:FC<Props>=()=>{
    return (
        <>
          <footer className="w-full flex flex-col justify-center mt-12">
            <div className="container mx-auto flex flex-col sm:flex-row px-6 py-12 sm:py-24 gap-24">
              <div className="flex flex-col gap-2">
                <p className="uppercase font-bold font-manrope">Others</p>
                <hr className="shrink-0 bg-divider border-none w-full h-divider"></hr>
                <AWrapper footer>
                  <Rare />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">LooksRare</p>
                </AWrapper>
                <AWrapper footer>
                  <Rarible />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Rarible</p>
                </AWrapper>
                <AWrapper footer>
                  <XY />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">X2Y2</p>
                </AWrapper>
                <AWrapper footer>
                  <Uniswap />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Uniswap</p>
                </AWrapper>
                <AWrapper footer>
                  <Curve />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Curve</p>
                </AWrapper>
                <a className="relative inline-flex tap-highlight-transparent outline-none no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full text-xl sm:text-2xl gap-3 items-center text-[#a1a1aa]">
                  
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="uppercase font-bold font-manrope">Socials</p>
                <hr className="shrink-0 bg-divider border-none w-full h-divider" />
                <AWrapper footer>
                  <Telegram />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Telegram</p>
                </AWrapper>
                <AWrapper footer>
                  <Twitter />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Twitter</p>
                </AWrapper>
                <AWrapper footer>
                  <Gitbook />
                  <p className="text-xl sm:text-2xl text-[#A1A1AA]">Gitbook</p>
                </AWrapper>
              </div>
            </div>


            <div className="container mx-auto flex flex-wrap items-center justify-between px-6 border-[#ecc63f] py-4 sm:py-8 gap-2" style={{borderTopWidth: '1px'}}>
              <div className="flex items-start sm:items-center justify-center text-lg flex-wrap gap-2">
                <img className="w-[110px]" src={logo} />
                <div className="flex gap-4">
                  <a className="relative inline-flex items-center tap-highlight-transparent outline-none no-underline hover:opacity-80 active:opacity-disabled text-[#a1a1aa] hover:text-[#fedd6a] transition text-sm sm:text-base min-w-max">Shezmu</a>
                  <a className="relative inline-flex items-center tap-highlight-transparent outline-none no-underline hover:opacity-80 active:opacity-disabled text-[#a1a1aa] hover:text-[#fedd6a] transition text-sm sm:text-base min-w-max">Guardian</a>
                  <a className="relative inline-flex items-center tap-highlight-transparent outline-none no-underline hover:opacity-80 active:opacity-disabled text-[#a1a1aa] hover:text-[#fedd6a] transition text-sm sm:text-base min-w-max">ShezUSD</a>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#ecc63f] text-center sm:text-right w-full sm:w-fit">
                © 2024 Shezmu. All rights reserved.
              </p>
            </div>
          </footer>
        </>
    )
}
export default Footer