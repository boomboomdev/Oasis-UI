import { FC, ReactNode } from "react"
// assets
interface Props {
  children: ReactNode;
}
const TdItem:FC<Props>=(props)=>{
    return (
        <>
          <td className="py-2 px-3 relative align-middle whitespace-normal text-sm font-normal outline-none w-max">
            {props.children}
          </td>
        </>
    )
}
export default TdItem