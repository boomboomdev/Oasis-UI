import { FC } from "react"
// assets
interface Props {
  title: string;
  content: string;
}
const DashboardItem:FC<Props>=(props)=>{
    return (
        <>
          <div className="text-tiny text-gray-400">
            {props.title}
          </div>
          <div className="font-bold">
            {props.content}
          </div>
        </>
    )
}
export default DashboardItem