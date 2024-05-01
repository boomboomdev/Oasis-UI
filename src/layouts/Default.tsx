import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import star_1 from "../assets/star-1.png";
import star from "../assets/home/star.png";
const DefaultLayout:FC=props=>{
    return (
        <>
        <div className="md:container mx-auto px-4 py-3" >
            <Header/>
            <img className="absolute left-[10%] top-[160px] w-[4%]"  src={star_1}  />
            <img className="absolute left-[48.1%] top-[180px] w-[6%]"  src={star_1}  />
            <img className="absolute left-[49.5%] top-[762px] w-[4%]"  src={star_1}  />
            <img className="absolute left-[12%] top-[137px] w-[30%]"  src={star}  />
        </div>
        <Outlet {...props} />
        </>
    )
}
export default DefaultLayout;