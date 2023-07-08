import { createContext, useReducer } from "react";
import { cuisineData } from "../db/cuisineData";
import { restaurantsData } from "../db/restaurantsData";

export const DataContext = createContext();

export const ACTIONS = {
    SET_SELECTED_CUISINE: "set_selected_cuisine",
    ADD_REVIEW: "add_review"
}

export function DataProvider({ children }) {

    const {SET_SELECTED_CUISINE,ADD_REVIEW} = ACTIONS;

    const reducer = (state, action) => {

        switch(action.type) {
            
            case SET_SELECTED_CUISINE: {
                return {...state, selectedCuisine: action.payload}
            }

            case ADD_REVIEW: {
                let reviewAddedRestaurant = state.restaurantData.find(({id}) =>( id === action.payload.restaurantId));
                reviewAddedRestaurant = {...reviewAddedRestaurant, ratings: [...reviewAddedRestaurant.ratings, action.payload.formdata]}
                const restData = state.restaurantData.map((rest) => rest.id === reviewAddedRestaurant.id ? reviewAddedRestaurant : rest)
                return {...state, restaurantData: [...restData]}
            }

            default: {
                return {...state}
            }

        }

    }

    const [dataState, dispatchData] = useReducer(reducer, {cuisineData: cuisineData, restaurantData: restaurantsData, selectedCuisine: 0});

    console.log({dataState});

    return (
        <>
            <DataContext.Provider value={{dataState, dispatchData}}>{children}</DataContext.Provider>
        </>
    )
}