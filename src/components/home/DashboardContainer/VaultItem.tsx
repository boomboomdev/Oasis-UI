import { FC } from "react"
// assets
interface Props {
  title: string;
  content: string;
}
const VaultItem:FC<Props>=(props)=>{
    return (
        <>
          <div className="text-xs sm:text-sm text-gray-400">
            {props.title}
          </div>
          <div className="font-bold text-sm sm:text-base">
            {props.content}
          </div>
        </>
    )
}
export default VaultItem