import { IMG_CDN_URL } from "../../utils/constants";
const Restuarntcard = (props) => {
  const { res } = props;
  const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} =res?.info;
  return (
    <div className="res-cards">
      <img
        className="reslogo"
        src={IMG_CDN_URL +cloudinaryImageId}
        alt={name}
      />
      <h5>{name}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};
export default Restuarntcard;