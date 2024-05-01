import { FC } from "react"
import GradientButton from "../common/gradient_button"
import DAD from "./FContainer/DAD"
import FInput from "./FContainer/FInput"
import FProgress from "./FContainer/FProgress"
import FTextArea from "./FContainer/FTextArea"
// components
// assets
interface Props{

}
const FContainer:FC<Props>=()=>{
    return (
        <>
          <div className="flex flex-col items-center mb-8">
            <p className="text-white text-4xl leading-relaxed" >Submit Your NFT</p>
            <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <p className="text-white text-lg">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          </div>
          <div className="flex space-x-8 mb-8">
            <div className="basis-2/3 mb-8 flex flex-col space-y-8">
              <div className="flex space-x-8 flex-none">
                <div className="basis-1/2 flex flex-col space-y-8">
                  <FInput label="Artwork Name" placeholder="e.g Abstract Art" />
                  <FInput label="Mention Price" placeholder="e.g $4.56" />
                  <FInput label="Choose Currency" placeholder="e.g Dollar" />
                </div>
                <div className="basis-1/2 flex flex-col space-y-8">
                  <FInput label="Category" placeholder="NFT illustration" />
                  <FInput label="Competition Time" placeholder="05/10/24 - 05/10/24" />
                  <FInput label="Voting Numbers" placeholder="e.g 5000" />
                </div>
              </div>
              <div className="flex-1">
                <FTextArea label="description" placeholder="Tell about your product with short description" />
              </div>
            </div>
            <div className="basis-1/3">
              <DAD />
              <FProgress label="Uploaded File" />
            </div>
          </div>
          <GradientButton value="Submit Now" />
        </>
    )
}
export default FContainer