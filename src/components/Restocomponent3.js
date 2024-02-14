const RestoComp3 = (props3) =>{
    return(
        <div className="card p-2">
        <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + props3.res3.info.cloudinaryImageId} alt="Card image cap"></img>
        <div className="card-body">
            <h4 className="card-title">{props3.res3.info.name}</h4>
             <p className="card-text">{props3.res3.info.avgRating}</p>
              <p className="card-text">{props3.res3.info.areaName}</p>
                <p className="card-text">{props3.res3.info.sla.slaString}</p>
                  <a href="#" className="btn btn-primary">MENU</a>
         </div>
       </div>
    );
};
export default RestoComp3;