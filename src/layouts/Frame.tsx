import { FC } from "react";
import { Outlet } from "react-router-dom";

const FrameLayout:FC=props=>{
    return (
        <>
            <Outlet {...props} />
        </>
    )
}
export default FrameLayout;