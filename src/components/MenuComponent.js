import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ShimmerUI from "./Shimmerui";
import axios from "axios";
import MenuCat from "./MenuCatagories";
const MenuComp  = () =>{

   const[menudata,updatedMenu] = useState(null);


    const { resId } = useParams()


    useEffect(() => {
        menuApi();
    },[]);
    const menuApi  = async() => {
        try {
        const apiData = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4241693&lng=78.3476283&restaurantId=' + resId);
       //   console.log(apiData.data.data.cards[0].card.card.info);
       updatedMenu(apiData.data);

        }catch{};
      // console.log(menudata);
      //const  name  = menudata?.data.data.cards[0].card.card.info;
      //console.log(name);
       
    };
    if(menudata === null){return <ShimmerUI></ShimmerUI>}
    const {name, areaName, avgRating, city, cuisines } = menudata?.data.cards[0].card.card.info;
    const catagories = menudata?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(catagories);

    return(
        <div className="menu">
              <h2>{name}</h2> 
              <p>{areaName}</p>
              <p>{cuisines.join(',')}</p>
              { catagories.map( ( catagory) => (
                    <MenuCat data = {catagory?.card?.card}/>      
             ))
             }
            
        </div>
    )
};
export default MenuComp;