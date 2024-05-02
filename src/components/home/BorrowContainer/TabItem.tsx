import { FC } from "react"
// assets
interface Props {
  active?: boolean;
  title: string;
}
const TabItem:FC<Props>=(props)=>{
    return (
        <>
          <button className="z-0 py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent outline-none rounded-sm text-xs sm:text-lg h-8 w-min sm:w-full px-0.5 sm:px-2">
            {props.active ? (
              <span className="absolute z-0 inset-0 rounded-md shadow-sm w-full bg-[#3F3F46]"></span>
            ) : (
              <></>
            )}
            <div className={`relative z-10 whitespace-nowrap transition-colors ${props.active ? "text-[#f9d44f]" : "text-[#A1A1AA]"}`}>
              <div className="flex items-center space-x-1 sm:space-x-2 px-4">
                <span>{props.title}</span>
              </div>
            </div>
          </button>
        </>
    )
}
export default TabItem