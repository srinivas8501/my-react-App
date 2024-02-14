import { useDispatch } from "react-redux";
import { AddItem } from "../utilities/Cartslice";

const Menulist = ({items}) => {

    const dispatch = useDispatch()
    const ADDitems = (item) =>{
        dispatch(AddItem(item))
    }
    return(
        <ul className="list-items">
              {
                items.map( (item) => 
               
                  
                <li className="item"><p>{item?.card?.info?.name}-$({item?.card?.info?.price/100})</p><span><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"  + (item?.card?.info?.imageId) } className="itemImg"></img><button className="btn btn-primary" onClick={ () => ADDitems()}>Add+</button></span></li>
                
                )
              }
        </ul>
    );
};
export default Menulist;