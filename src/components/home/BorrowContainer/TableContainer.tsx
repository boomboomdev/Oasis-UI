import { FC } from "react"
// assets
//component

interface Props {
  description: string;
}
const TableContainer:FC<Props>=(props)=>{
    return (
        <>
          <table className="min-w-full h-auto table-auto w-full min-h-[200px]">
            <thead className="[&>tr]:first:rounded-lg">
              <tr className="group outline-none">
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none min-w-[190px]">
                  Collection
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Collateral
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Debt
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Interest
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Credit Limit
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Liquidation Limit
                </th>
                <th className="group px-3 h-10 text-left align-middle bg-[#27272A] whitespace-nowrap text-[#9E9EA7] text-xs font-semibold first:rounded-l-lg last:rounded-r-lg outline-none ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="text-[#71717A] align-middle text-center h-40">{props.description}</td>
              </tr>
            </tbody>
          </table>
        </>
    )
}
export default TableContainer