import { useSelector } from "react-redux";
import Menulist from "./Menulist";
const Cart = () => {
    //we need to subscribing the store by using selector
    const cartItems = useSelector((store) => store.cart.items)
   // console.log(cartItems);
    return(
        <div className="cart">
           <h1 className="text-dark">your data</h1>
           <Menulist items = { cartItems }/>
          {
            cartItems.map((it) =><h2 className="p-1">legwhg{it?.name}</h2>)
           }

            </div>
                     
    )
};
export default Cart;