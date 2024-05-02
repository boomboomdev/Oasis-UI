import { FC, ReactNode } from "react"
// assets
interface Props {
  active?: boolean;
  isSvg?: boolean;
  image?: string;
  title: string;
  svg?: ReactNode;
  to: string;
}
const TabItem:FC<Props>=(props)=>{
    return (
        <>
          <button className="z-0 py-1 flex group relative justify-center items-center cursor-pointer transition-opacity tap-highlight-transparent outline-none rounded-none text-xs sm:text-xl font-manrope h-8 sm:h-14 w-min sm:w-full px-0.5 sm:px-2">
            {
              props.active &&
              (
                <span className="absolute z-0 h-[2px] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)] rounded-none w-full bg-[#f9d44f]"></span>
              )
            }
            <div className="relative z-10 whitespace-nowrap transition-colors text-default-500">
              <div className="flex items-center space-x-1 sm:space-x-2">
                {props.isSvg ? (
                  props.svg
                ) : (
                  <div className="relative shadow-black/5 shadow-none rounded-large" style={{maxWidth: "32px"}}>
                    <img className="w-[32px] h-[32px] text-transparent relative z-10 shadow-black/5 shadow-none transition-transform-opacity h-3 w-3 sm:h-8 sm:w-8 rounded-none" src={props.image} />
                  </div>
                )}
                <span className={props.active ? "text-[#F9D44F]" : "text-[#A1A1AA]"}>{props.title}</span>
              </div>
            </div>
          </button>
        </>
    )
}
export default TabItem