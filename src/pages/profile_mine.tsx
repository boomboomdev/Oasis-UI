import { FC } from "react";
import Sidebar from "../components/layouts/sidebar";
import SHeader from "../components/layouts/SHeader";
import Hero from "../components/profile_other/hero";
import ICard from "../components/profile_other/ICard";
import Info from "../components/profile_other/Info";
import TContainer from "../components/profile_other/TContainer";
import All from "../components/profile_other/all";
import Footer from "../components/layouts/footer";
interface Props{

}
const ProfileMine:FC<Props>=()=>{
  return (
    <>
      <div className="flex">
        <Sidebar active="profile" />
        <div className="flex-1">
          <div className="md:container mx-auto px-4 py-3">
            <SHeader />
            <Hero />
            <div className="flex space-x-4">
              <ICard />
              <div className="flex-1 flex flex-col">
                <Info />
                <TContainer />
                <All />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}
export default ProfileMine