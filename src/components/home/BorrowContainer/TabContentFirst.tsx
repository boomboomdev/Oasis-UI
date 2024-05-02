import { FC } from "react"
// assets
// components
import TableContainer from "./TableContainer"
interface Props {
}
const TabContentFirst:FC<Props>=()=>{
    return (
        <>
          <div className="py-3 outline-none px-0">
            <div className="flex flex-col gap-4 overflow-x-auto py-4 max-w-[95vw]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No USDC deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No wstETH deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No weETH deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No sUSDe deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No ptEzETH deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No ptRsETH deposited." />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col relative gap-4 w-full">
                  <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                    <TableContainer description="No ptRsweth deposited." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default TabContentFirst