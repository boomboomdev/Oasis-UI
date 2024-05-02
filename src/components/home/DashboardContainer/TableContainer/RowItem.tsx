import { FC } from "react"
// assets
interface Props {
  image: string;
  collection: string;
  deposit: string;
  oracle: string;
  interest: number;
  available: string;
  percent: number;
}
// component
import TdItem from "./RowItem/TdItem";

const RowItem:FC<Props>=(props)=>{
    return (
        <>
          <tr className="group outline-none">
            <TdItem>
              <div className="min-w-[190px] w-max justify-start flex items-center gap-2">
                <div className="relative shadow-black/5 shadow-none rounded-large">
                  <img className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 h-10 w-10 rounded-2xl object-cover" src={props.image} />
                </div>
                <div className="text-sm">
                  {props.collection}
                </div>
              </div>
            </TdItem>
            <TdItem>
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">
                  {props.deposit}
                </p>
              </div>
            </TdItem>
            <TdItem>
              <div className="flex flex-col w-full">
                <p className="text-bold text-sm capitalize w-full">
                  {props.oracle}
                </p>
              </div>
            </TdItem>
            <TdItem>
              <div className="flex flex-col w-full">
                <p className="text-bold text-sm capitalize w-full">
                  ShezUSD: {props.interest}%
                </p>
              </div>
            </TdItem>
            <TdItem>
              <div className="flex flex-col max-w-[450px] min-w-max">
                <div className="grid grid-cols-6 gap-2 items-center">
                  <p className="col-span-2 text-sm">
                    {props.available} shezUSD
                  </p>
                  <div className="flex flex-col gap-2 w-full max-w-[200px] col-span-3">
                    <div className="z-0 relative overflow-hidden h-3 rounded-full bg-[#52525B] bg-opacity-50">
                      <div className="h-full rounded-full transition-transform !duration-500 bg-[#18C964] opacity-100" style={{transform: `translateX(-${(100.00-props.percent)}%)`}}></div>
                    </div>
                  </div>
                  <div className="text-sm">{props.percent}%</div>
                </div>
              </div>
            </TdItem>
          </tr>
        </>
    )
}
export default RowItem