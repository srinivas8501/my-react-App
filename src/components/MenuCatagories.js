//we need to recive data from menucomponent
//and display items in this component
import { useState } from "react";
import Menulist from "./Menulist";
const MenuCat = ( {data} ) => {
    
    const [Showitems,Setshow] = useState(false)

    const toggler = () =>{
        Setshow(!Showitems)
    }
   
    return(
        <div className="menucat" onClick={toggler}>
             <h3 className="dropdown-toggle p-2" >{ data.title}-{(data.itemCards.length)} </h3>
           { Showitems && <Menulist items = {data.itemCards}/>}
        </div>
    )
}
export default MenuCat;