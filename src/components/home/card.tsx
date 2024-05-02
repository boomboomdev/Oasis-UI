import { FC } from "react"
// assets
interface Props {
  image: string;
}
const Card:FC<Props>=(props)=>{
    return (
        <>
          <div className="w-full relative">
            <div className="relative">
              <img className="w-full"  src={props.image}  />
              <div className="w-full h-[60px] absolute bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur bottom-0 rounded-bl-[0.35rem] rounded-br-[0.35rem] p-2 flex justify-center items-center">
                <p className="text-white text-lg leading-relaxed text-center" >NFT Categories Name</p>
              </div>
            </div>
          </div>
        </>
    )
}
export default Card