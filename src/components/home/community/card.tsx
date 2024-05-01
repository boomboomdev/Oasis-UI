import { FC } from "react"
// components
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// custom styles
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#E73583',
  inactiveFillColor: '#E73583',
  itemStrokeWidth: 2,
  activeStrokeColor: '#464646',
  inactiveStrokeColor: '#464646',
}

interface Props {
}
const Card:FC<Props>=()=>{
    return (
        <>
          <div className="rounded-xl bg-color-[#0A0933] p-8 border-[#464646] border-2 relative">
            <div className="flex space-x-4 items-center">
              <div className="bg-[#F9BAD6] w-[66px] h-[66px] rounded-md flex justify-center items-center flex-none">
                <p className="text-white text-3xl leading-relaxed" >K</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-3xl leading-relaxed flex-none" >Kim Tucker</p>
                <Rating style={{ maxWidth: 150 }} value={5} itemStyles={myStyles} readOnly />
              </div>
            </div>
            <p className="text-white text-xl leading-relaxed mt-4 mb-12" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </p>
            <div className="absolute z-10 bottom-4 right-4">
              <p className="text-white text-xl leading-relaxed mt-4 italic" >16th April 2024</p>
            </div>
          </div>
        </>
    )
}
export default Card