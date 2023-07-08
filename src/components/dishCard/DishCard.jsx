import { NavLink } from "react-router-dom";
import "./DishCard.css";

export function DishCard({dish, restaurant}) {
    return (
        <>

            <div className="dish-card-container">
                <NavLink to={`/restaurantdetail/${restaurant.id}`}>
                <div className="dish-img-details-container">

                    <div className="dish-img-container">
                        <img src={dish.imgSrc} alt="" className="dish-img" />
                    </div>

                    <div className="dish-detail-container">
                        <div className="dishname">
                            {dish.name}
                        </div>
                        <div className="dishprice">
                            {`${dish.price} for ${dish.qty}`}
                        </div>
                        <div className="restaurant-name">
                            {restaurant.name}
                        </div>
                    </div>

                </div>
                </NavLink>
            </div>
        </>
    )
}