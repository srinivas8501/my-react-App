import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import ConfigStore from "../utilities/AppStore";
const HeaderComponant = () => {
    //we need to subscribing the store by using selector
    const CartItems = useSelector((store) => store.cart.items)
   // console.log(CartItems);
    return(
        <div className="header fixed-top">
           <div className="navbar navbar-expand-sm  ">
            <div className="container-fluid">  
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1EOFCWEy7WCTTMYVL3Z8ZK7b6TgAq2K7DHg&usqp=CAU" className="navbar-brand img-logo" ></img>
            <input type="search" className="search" placeholder="Search Here...."></input>
                 <ul className="navbar-nav ul">
                    <li className="nav-item">
                    <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/about' className="nav-link" >about</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact' className="nav-link" >contact us</Link>
                    </li>
                    <li className="nav-item">
                    <a href ='' className="nav-link" data-bs-target = '#canva' data-bs-toggle="offcanvas" >Login</a>
                    </li>   
                    <li className="nav-item">
                    <Link className="nav-link" to='/cart'>cart<span className="text-dark">({CartItems.length})</span></Link>
                    </li>
                 </ul>         
             </div>
           </div>
           {/* offcanvas */}
           <div className="offcanvas offcanvas-end text-uppercase w-25" id="canva">
        {/* <!--offcanvas-header--> */}
        <div className="offcanvas-header ">
             <h1 className="text-light">LOGIN/SIGNUP</h1>           
            <button className="btn-close bg-light" data-bs-dismiss="offcanvas"></button>
       </div>
        {/* <!--offcanvas-body--> */}
        <div class="offcanvas-body ">
            <div className="login-details">
                <div className="input-group">
                   <input type="tel" className="form-control p-2" placeholder="Mobile no"></input>
                   <button className="btn btn-warning rounded ">LOGIN</button>
                </div>
                <span className="text-dark"><p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p></span>
            </div>
        </div>

    </div>
        </div>

        
    )
};
export default HeaderComponant;