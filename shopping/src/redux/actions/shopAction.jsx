import shopActionTypes from '../actionTypes';

const sepeteEkle=(val)=>{
    return{type:shopActionTypes.shop.ADD_BASKET, payload:val}
}



const sepettenCikar=(val)=>{
    return{type:shopActionTypes.shop.DELETE_BASKET, payload:val}
}
const sepetAksiyon={sepeteEkle,sepettenCikar};
export default sepetAksiyon;