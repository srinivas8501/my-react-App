import { useEffect, useState } from "react";
import RestComp1 from "./Restcomponent1";
import RestoComp2 from "./Restocomponent2";
import RestoComp3 from "./restocomponent3";
import { Link } from "react-router-dom";
import ShimmerUI from "./Shimmerui";
const BodyComponant = () => {

  //use state variable for 3 sections
  let [somedata1,updateddata1] = useState([]);
  let [somedata2,updateddata2] = useState([]);
  let [somedata3,updateddata3] = useState([]);

  useEffect(() => {

    getSwiggy();

  },[])
  //function for get the data from swiggy API
 const getSwiggy = async() => {
   let  apidata1 = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4987928&lng=78.3625593&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
   let  jsondata = await  apidata1.json()
   let  liveapiData1 = jsondata.data.cards[0].card.card.gridElements.infoWithStyle.info;
   let  liveapiData2 = jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
   let  liveapiData3 = jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
   // let title1 =     jsondata.data.cards[2].card.card.header.title;

     updateddata1(liveapiData1)   
     updateddata2(liveapiData2)  
     updateddata3(liveapiData3)
     
  }

if(somedata1.length === 0){ return <ShimmerUI></ShimmerUI>}
    return(
        <div className="container-fluid">
        <div className="list-container">
          {/* first section */}
          <h2>What's on your mind?</h2>
          <div className="list-section1">
          {
           somedata1.map(restorant1 => <RestComp1 res1 = {restorant1}/>)//map for first card
           }
          </div>
          {/* second section */}
          <h2>Top restaurant chains in Hyderabad{}</h2>
          <div className="filter-section">
        <button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata2.filter((restdata2) => restdata2.info.avgRating > 4) //button for rating
            updateddata2(filterdata);
          }}>rateing 4+</button>

<button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata2.filter((restdata2) => restdata2.info.costForTwo <'₹300 for two') //button for cost below 300
            updateddata2(filterdata);

          }}> below 300 </button>

<button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata2.filter((restdata2) => restdata2.info.veg ==true) //button for veg
            updateddata2(filterdata);

          }}>veg</button>
          </div>
          <div className="list-section2">
          
           {
           somedata2.map(restorant2 => <RestoComp2 res2 = {restorant2}/>)//map for first card
           }
          </div>
          {/* third section */}
          <h2>Restaurants with online food delivery in Hyderabad</h2>
          <div className="filter-section">
        <button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata3.filter((restdata2) => restdata2.info.avgRating > 4) //button for rating
            updateddata3(filterdata);
          }}>rateing 4+</button>

<button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata3.filter((restdata2) => restdata2.info.costForTwo <'₹300 for two') //button for cost below 300
            updateddata3(filterdata);

          }}> below 300 </button>

<button className="btn btn-dark btn1" onClick={() => { 
            filterdata = somedata3.filter((restdata2) => restdata2.info.veg ==true) //button for veg
            updateddata3(filterdata);

          }}>veg</button>
          </div>
          <div className="list-section3">
           {
           somedata3.map(restorant3 =>
            <Link to={'Menu/' + restorant3.info.id}>
             <RestoComp3 res3 = {restorant3}/>
             </Link>
             ) 
           } 
          </div>
          </div>  
          </div>
    )
};
export default BodyComponant;

