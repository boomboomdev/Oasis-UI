import { FC } from "react"
import Sidebar from "../components/layouts/sidebar"
import All from "../components/marketplace/all"
import Hot from "../components/marketplace/hot"
import SHeader from "../components/layouts/SHeader"
import Create from "../components/marketplace/create"
import Footer from "../components/layouts/footer"
interface Props{

}
const MarketplacePage:FC<Props>=()=>{
    return (
        <>
            <div className="flex">
                <Sidebar active="dashboard" />
                <div className="flex-1">
                    <div className="md:container mx-auto px-4 py-3">
                        <SHeader />
                        <Create />
                        <Hot />
                        <All />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default MarketplacePage