import React ,{FC} from 'react'
import { useRoutes } from "react-router-dom"
import DefaultLayout from '../layouts/Default';

const IndexPage=React.lazy(()=>import("../pages/index"));
const BorrowPage=React.lazy(()=>import("../pages/borrow"));


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
            path:"/borrow",
            element:<DefaultLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<BorrowPage {...props} />
                }
            ]
        },
    ]
    return useRoutes(routes);
}
export default AppRoutes;