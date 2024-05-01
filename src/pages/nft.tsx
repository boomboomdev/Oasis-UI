import { FC } from "react"
import Sidebar from "../components/layouts/sidebar"
import SHeader from "../components/layouts/SHeader"
import Footer from "../components/layouts/footer"
import FContainer from "../components/nft/FContainer"
interface Props{

}
const NFT:FC<Props>=()=>{
  return (
    <>
      <div className="flex">
        <Sidebar active="nft" />
        <div className="flex-1">
          <div className="md:container mx-auto px-4 py-3 mb-20">
            <SHeader />

            <FContainer />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default NFT