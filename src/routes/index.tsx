import React ,{FC} from 'react'
import { useRoutes } from "react-router-dom"
import DefaultLayout from '../layouts/Default';
import FrameLayout from '../layouts/Frame';

const IndexPage=React.lazy(()=>import("../pages/index"));
const MarketplacePage=React.lazy(()=>import("../pages/marketplace"));
const ProfileOtherPage=React.lazy(()=>import("../pages/profile_other"));
const ProfileMinePage=React.lazy(()=>import("../pages/profile_mine"));
const NFT=React.lazy(()=>import("../pages/nft"));
const Reward=React.lazy(()=>import("../pages/reward"));
const Moderator=React.lazy(()=>import("../pages/moderator"));


const AppRoutes:FC<any>=(props)=>{
    const routes=[
        {
            path:"/",
            element:<DefaultLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<IndexPage {...props} />
                }
            ]
        },
        {
            path:"/marketplace",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<MarketplacePage {...props} />
                }
            ]
        },
        {
            path:"/profile_other",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<ProfileOtherPage {...props} />
                }
            ]
        },
        {
            path:"/profile_mine",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<ProfileMinePage {...props} />
                }
            ]
        },
        {
            path:"/nft",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<NFT {...props} />
                }
            ]
        },
        {
            path:"/reward",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<Reward {...props} />
                }
            ]
        },
        {
            path:"/moderator",
            element:<FrameLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<Moderator {...props} />
                }
            ]
        }
    ]
    return useRoutes(routes);
}
export default AppRoutes;