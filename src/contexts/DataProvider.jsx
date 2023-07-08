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

            default: {
                return {...state}
            }

        }

    }

    const [dataState, dispatchData] = useReducer(reducer, {cuisineData: cuisineData, restaurantData: restaurantsData, selectedCuisine: 0});

    return (
        <>
            <DataContext.Provider value={{dataState, dispatchData}}>{children}</DataContext.Provider>
        </>
    )
}