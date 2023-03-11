import shopActionTypes from "../actionTypes";
import { SHOP_DATA } from "../../shop-data";
const initial_state = {
    productList: SHOP_DATA,
    basket: [],
};

const shopReducer = (state = initial_state, action) => {
    switch (action.type) {
        case shopActionTypes.shop.ADD_BASKET:
           
            //bütün stateleri getir, sonra basketin içerisine var olan basket.statlerini getir ve action.payloadı üzerine ekle
            return { ...state, basket: [...state.basket, action.payload]};
            
        case shopActionTypes.shop.DELETE_BASKET:
            return { ...state, basket: state.basket.filter((el) => el.id !== action.payload) };

            case shopActionTypes.urun.URUN_EKLE:
           
             return { ...state, productList: [...state.productList, action.payload]};
           

        default:
            return state;
    }
}; 
export default shopReducer;
