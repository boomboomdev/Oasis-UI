import { FC } from "react"
// assets
import bayc from "../../../assets/home/DashboardContainer/TableContainer/bayc.png";
import pharaoh from "../../../assets/home/DashboardContainer/TableContainer/pharaoh.jpg";
import pudgy from "../../../assets/home/DashboardContainer/TableContainer/pudgy.jpg";
import usdc from "../../../assets/home/DashboardContainer/TableContainer/usdc.png";
import wstETH from "../../../assets/home/DashboardContainer/TableContainer/wstETH.png";
import weeth from "../../../assets/home/DashboardContainer/TableContainer/weeth.svg";
import ptEzeth from "../../../assets/home/DashboardContainer/TableContainer/ptEzeth.svg";
import sUSDE from "../../../assets/home/DashboardContainer/TableContainer/sUSDE.svg";
import ptRsETH from "../../../assets/home/DashboardContainer/TableContainer/ptRsETH.svg";
import ptRsweth from "../../../assets/home/DashboardContainer/TableContainer/ptRsweth.svg";
// component
import RowItem from "./TableContainer/RowItem"

interface Props {
}
const TableContainer:FC<Props>=()=>{
    return (
        <>
          <table className="min-w-full h-auto table-auto w-full min-h-[200px]">
            <thead className="[&>tr]:first:rounded-lg">
              <tr className="group outline-none">
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none min-w-[190px]">
                  Collection
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Deposits
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Oracle floor price
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Interest rate
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Available borrow
                </th>
              </tr>
            </thead>
            <tbody>
              <RowItem image={bayc} collection="Bored Ape Yacht Club" deposit="0" oracle="11.77 ETH" interest={2} available="50.00K" percent={100.00}/>
              <RowItem image={pharaoh} collection="Pharaoh" deposit="11" oracle="3651.23 USD" interest={5} available="254.06" percent={0.51} />
              <RowItem image={pudgy} collection="Pudgy Penguins" deposit="0" oracle="10.33 ETH" interest={2} available="50.00K" percent={100.00} />
              <RowItem image={usdc} collection="USDC" deposit="2.61K" oracle="1.00 USD" interest={1} available="97.65K" percent={97.65} />
              <RowItem image={wstETH} collection="wstETH" deposit="0.5" oracle="3411.11 USD" interest={5} available="48.59K" percent={97.18} />
              <RowItem image={weeth} collection="weETH" deposit="0.5" oracle="3027.91 USD" interest={5} available="48.82K" percent={97.65} />
              <RowItem image={ptEzeth} collection="PT-ezETH" deposit="1" oracle="2880.50 USD" interest={5} available="47.91K" percent={95.82} />
              <RowItem image={sUSDE} collection="sUSDe" deposit="45.39K" oracle="1.06 USD" interest={5} available="17.21K" percent={34.43} />
              <RowItem image={ptRsETH} collection="PT-rsETH" deposit="0" oracle="2797.23 USD" interest={5} available="100.00K" percent={100.00} />
              <RowItem image={ptRsweth} collection="PT-rswETH" deposit="3.178" oracle="2836.49 USD" interest={5} available="93.97K" percent={93.97} />
            </tbody>
          </table>
        </>
    )
}
export default TableContainer