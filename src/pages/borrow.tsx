import { FC } from "react"
// assets
import back from "../assets/home/oasis_gate.svg";
// components
import TabContainer from "../components/home/TabContainer";
import BorrowContainer from "../components/home/BorrowContainer";
import Footer from "../components/layouts/Footer";

interface Props{

}
const BorrowPage:FC<Props>=()=>{
  return (
    <>
      <div className="flex flex-1 min-h-[90dvh] h-full w-full justify-center px-4 text-white">
        <img width="1920" height="1080" className="absolute object-cover z-0" style={{color: "transparent", maskImage: "radial-gradient(950px, rgb(0, 0, 0) 50%, transparent)", userSelect: "none", pointerEvents: "none", visibility: "visible"}} src={back} />

        <div className="w-full h-min max-w-6xl flex flex-col gap-4 sm:gap-8 z-10 mt-16 sm:mt-[400px] py-4 sm:py-8">
          <div className="w-full flex flex-col justify-center items-center gap-2 sm:gap-4 px-2">
            <h1 className="text-3xl md:text-7xl font-medium text-center" style={{fontFamily: "__Newsreader_dd4b18"}}>
              Welcome to Oasis
            </h1>
            <h2 className="text-sm sm:text-2xl text-center max-w-2xl" style={{fontFamily: '"__Manrope_da1155","__Manrope_Fallback_da1155"'}}>The first hybrid crypto lending platform</h2>
          </div>

          <div className="flex w-full flex-col">
            <TabContainer active="borrow" />
            <BorrowContainer />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default BorrowPage