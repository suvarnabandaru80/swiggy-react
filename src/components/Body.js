import Restuarntcard from "./Restuarntcard";
import {useState} from "react";
import reslist from "../../utils/mockdata";
const Body = () => {
    const[ListofRestuarants,setListofRestuarant]= useState(reslist);
  return (
    <div className="body">
        <div className="filter">
            <button className="filter-button" onClick={()=>{
            //Filter logic here
            const filteredList = ListofRestuarants.filter
            (res=>res.info.avgRating>4.2);
            setListofRestuarant(filteredList);
            }}
                >
                Top Rated Restuarants
                </button>
        </div>
      {ListofRestuarants.map((restaurant) => (
        <Restuarntcard key={restaurant.info.id} res={restaurant} />
      ))}
    </div>
  );
};

export default Body;
