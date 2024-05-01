import { FC } from "react"
// components
// assets
import back from "../../assets/profile_other/Hero/back.png";
interface Props{

}
const Hero:FC<Props>=()=>{
    return (
        <>
          <div className="w-full">
            <img className="w-full" src={back} />
          </div>
        </>
    )
}
export default Hero