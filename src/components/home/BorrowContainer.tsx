import { FC, useState } from "react"
// assets
// components
import TabItem from "./BorrowContainer/TabItem"
import TabContentFirst from "./BorrowContainer/TabContentFirst";
import TabContentSecond from "./BorrowContainer/TabContentSecond";
import TabContentThird from "./BorrowContainer/TabContentThird";

interface Props {
}
const BorrowContainer:FC<Props>=()=>{
    const [tabIndex, setTabIndex] = useState(1);
    const handleSetTabIndex = (index : number) => {
      setTabIndex(index);
    }
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
                      <TabItem title="ERC20" active={0} tabIndex={tabIndex} handleSetTabIndex={handleSetTabIndex} />
                      <TabItem title="ERC721" active={1} tabIndex={tabIndex} handleSetTabIndex={handleSetTabIndex} />
                      <TabItem title="ERC1155" active={2} tabIndex={tabIndex} handleSetTabIndex={handleSetTabIndex} />
                    </div>
                  </div>

                  {tabIndex === 0 && <TabContentFirst />}
                  {tabIndex === 1 && <TabContentSecond />}
                  {tabIndex === 2 && <TabContentThird />}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default BorrowContainer