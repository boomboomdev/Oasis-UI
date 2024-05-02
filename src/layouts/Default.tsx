import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
const DefaultLayout:FC=props=>{
    return (
        <>
        <div>
            <Header/>
        </div>
        <Outlet {...props} />
        </>
    )
}
export default DefaultLayout;