import { FC } from "react"
// assets
import bayc from "../../assets/home/DashboardContainer/TableContainer/bayc.png";
// components
import Vault from "../common/svg/Vault"
import VaultItem from "./DashboardContainer/VaultItem"
import AWrapper from "../common/AWrapper"
import GoTo from "../common/svg/GoTo"
import TableContainer from "./DashboardContainer/TableContainer"
import DashboardItem from "./DashboardContainer/DashboardItem";

interface Props {
}
const DashboardContainer:FC<Props>=()=>{
    return (
        <>
          <div className="py-3 px-1 outline-none">
            <div className="w-full flex items-center justify-center pt-4 pb-4">
              <div className="w-full max-w-6xl flex flex-col gap-6 text-xl sm:px-2">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <Vault />

                    <div className="font-bold text-2xl">ALL VAULTS</div>
                  </div>

                  <div className="flex flex-col">
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <VaultItem title="TVL" content="105.24K USD" />
                      </div>
                      <div>
                        <VaultItem title="NFTs Deposited" content="11" />
                      </div>
                      <div>
                        <VaultItem title="Total Debt" content="113.05K USD" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="font-semibold text-lg text-[#fbd654]">
                        GET CREDIT ON YOUR DIGITAL ASSETS
                      </div>
                      <div className="text-base text-gray-400 font-light flex space-x-1">
                        <p>Borrow</p>

                        <AWrapper className="text-[#FBD654]">
                          <div className="flex">
                            <p>ShezUSD</p>
                            <GoTo />
                          </div>
                        </AWrapper>

                        <p>at the lowest rate on the market and farm in the OASIS pools</p>
                      </div>
                    </div>

                    <div className="flex flex-col relative gap-4 w-full">
                      <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-content1 overflow-auto rounded-large shadow-small w-full">
                        <TableContainer />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="shrink-0 border-none w-full h-[1px]" style={{backgroundColor: "hsl(0 0% 100%)"}} />

                <div className="w-full flex items-start">
                  <button className="group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal overflow-hidden tap-highlight-transparent outline-none border-medium px-4 min-w-20 h-10 text-small gap-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent text-foreground z-10 subpixel-antialiased capitalize border-[#3F3F46] border-2 rounded-xl" style={{color: "hsl(210 6% 93%)"}}>
                    <div className="relative shadow-black/5 shadow-none rounded-large max-w-[50px]">
                      <img className="relative z-10 shadow-black/5 opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 w-8 h-8 rounded-full object-cover" src={bayc} />
                    </div>
                    <p>Bored Ape Yacht Club</p>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                  <div>
                    <DashboardItem title="pETH Oracle Floor" content="11.77 ETH" />
                  </div>
                  <div>
                    <DashboardItem title="Deposited" content="0" />
                  </div>
                  <div>
                    <DashboardItem title="LTV" content="60%" />
                  </div>
                  <div>
                    <DashboardItem title="Liq. Threshold" content="70%" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <DashboardItem title="Available" content="50.00K shezUSD" />
                  </div>
                </div>

                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 overflow-auto rounded-large shadow-small w-full" style={{backgroundColor: "hsl(240 6% 10%)"}}>
                    <table className="min-w-full h-auto table-auto w-full min-h-[200px]">
                      <thead className="[&>tr]:first:rounded-lg sticky top-0 z-20 [&>tr]:first:shadow-small">
                        <tr className="group outline-none">
                          <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#A1A1AA] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none space-x-2 min-w-[190px]">
                            <p className="inline-block">Name ID</p>
                          </th>
                          <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#A1A1AA] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none space-x-2">
                            <p className="inline-block">NFT Value</p>
                          </th>
                          <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#A1A1AA] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none space-x-2">
                            <p className="inline-block">Credit limit</p>
                          </th>
                          <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#A1A1AA] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none space-x-2">
                            <p className="inline-block">Outstanding debt</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default DashboardContainer