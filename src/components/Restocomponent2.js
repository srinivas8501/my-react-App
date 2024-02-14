const RestoComp2 = (props2) => {
    //console.log(props.res);
     return(
           <div className="card p-2">
               <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + props2.res2.info.cloudinaryImageId} alt="Card image cap"></img>
               <div className="card-body">
                   <h4 className="card-title">{props2.res2.info.name}</h4>
               <p className="card-text">rating:{props2.res2.info.avgRating}</p>
               <p className="card-text">{props2.res2.info.areaName}</p>
                   <p className="card-text">{props2.res2.info.sla.slaString}</p>
               <a href="#" className="btn btn-primary">MENU</a>
               </div>
        </div>
       )
     };
     export default  RestoComp2;