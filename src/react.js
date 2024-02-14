import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponant from "../src/components/HeaderComponents";
import FooterComponant from "./components/FooterComponents";
import Aboutcomp from "./components/AboutUscompent";
import ContactComp from "./components/contactcomponent";
import ErrorComp from "./components/ErrorComp";
import MenuComp from "./components/MenuComponent";
import BodyComponant from "./components/BodyComponents";
import Cart from "./components/Cart";
import ConfigStore from "./utilities/AppStore";
import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//All Copmonent Data
const AllComponants = () =>{
    return(
      <Provider store={ConfigStore}>
       <div className="33">
       <HeaderComponant></HeaderComponant>
       <Outlet></Outlet>
       <FooterComponant></FooterComponant>
       </div>
       </Provider>
    )
};
//App Routing Configuration
const appRouter = createBrowserRouter([{
            path:'/',
            element:<AllComponants></AllComponants>,
            children:[
                  {
                    path:'/',
                    element:<BodyComponant></BodyComponant>
                  },
                  {
                    path:'/about',
                    element:<Aboutcomp></Aboutcomp>
                  },
                  {
                    path:'/contact',
                    element:<ContactComp></ContactComp>,
                  },
                  {
                    path:'/Menu/:resId',
                    element:<MenuComp></MenuComp>,
                  },
                  {
                    path:'/cart',
                    element:<Cart></Cart>,
                  }
              ],
                   errorElement:<ErrorComp></ErrorComp>
}
]);

//Create Root And Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
