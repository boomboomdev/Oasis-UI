import { FC } from "react"
import TabItem from "./BorrowContainer/TabItem"
import TableContainer from "./BorrowContainer/TableContainer"
// assets
// components

interface Props {
}
const BorrowContainer:FC<Props>=()=>{
    return (
        <>
          <div className="py-3 px-1 outline-none w-full flex items-center justify-center">
            <div className="w-full flex items-center justify-center pt-4 pb-4">
              <div className="w-full max-w-6xl flex flex-col gap-6 text-xl sm:px-2">
                <div className="w-full max-w-6xl flex flex-col gap-6 sm:text-xl sm:px-2">
                  <p>Borrow shezUSD or shezETH against approved collaterals.</p>
                </div>
                <div className="my-4">
                  <div className="w-full flex items-center justify-center">
                    <div className="flex p-1 h-fit gap-2 items-center flex-nowrap bg-[#27272A] rounded-md">
                      <TabItem title="ERC20" />
                      <TabItem title="ERC721" active />
                      <TabItem title="ERC1155" />
                    </div>
                  </div>

                  <div className="py-3 outline-none px-0">
                    <div className="flex flex-col gap-4 overflow-x-auto py-4 max-w-[95vw]">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col relative gap-4 w-full">
                          <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                            <TableContainer />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col relative gap-4 w-full">
                          <div className="p-4 z-0 flex flex-col relative justify-between gap-4 bg-[#18181B] overflow-auto rounded-lg shadow-sm w-full">
                            <TableContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default BorrowContainer