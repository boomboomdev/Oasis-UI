import { FC } from "react"
// assets
import search from "../../assets/common/SearchBar/search.png";
interface Props {
  value: string;
}
const SearchBar:FC<Props>=(props)=>{
  return (
    <>
      <div className="rounded-full w-[340px] h-[55px] border-2 border-[#848383] flex justify-between items-center" >
        <div className="flex justify-center items-center pl-6">
          <div className="text-white opacity-50" >{props.value}</div>
        </div>
        <div className="bg-gradient-to-r from-[#E73583] text-center via-[#7C65FF] to-[#50B4FF] w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[1px]" >
          <img src={search} />
        </div>
      </div>
    </>
  )
}
export default SearchBar