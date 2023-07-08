import { useContext } from "react";
import "./HomePage.css";
import { ACTIONS, DataContext } from "../../contexts/DataProvider";
import { DishCard } from "../../components/dishCard/DishCard";

export function HomePage() {

    const { SET_SELECTED_CUISINE } = ACTIONS;

    const { dataState, dispatchData } = useContext(DataContext);

    const filteredCuisines = dataState.restaurantData.filter(({ cuisine_id }) => dataState.selectedCuisine === cuisine_id)

    const cuisineClickHandler = (id) => dispatchData({ type: SET_SELECTED_CUISINE, payload: id })

    return (
        <>
            <div className="homepage-container">

                <div className="topseciton-container">
                    <div className="appheading-container">
                        <h1>Food Ordering App</h1>
                    </div>
                    <div className="cuisineselector-container">
                        <div className="cuisineheading">
                            <h2>Select Your Cuisine:</h2>
                        </div>
                        <div className="cuisineselect-btns-container">
                            {dataState.cuisineData?.map(({ id, name }) => (
                                <div className="cuisinebtn-container" key={id}>
                                    <button className="cuisine-btn" onClick={() => cuisineClickHandler(id)}>{name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="dishes-by-restaurants-container">

                    {filteredCuisines.map((restaurant) => (
                        <div className="restaurants-list-n-dishes-container" key={restaurant.id}>

                            <div className="restaurant-name-heading">
                                <h2>{`Dishes by ${restaurant.name}`}</h2>
                            </div>

                            <div className="dishcards-cotainer">
                                {restaurant.menu.map((dish) => (
                                    <div key={restaurant.menu.indexOf(dish)}>
                                        <DishCard dish={dish} restaurant={restaurant} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>


            </div>
        </>
    )
}