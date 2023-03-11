import shopActionTypes from '../actionTypes';

const urunEkle=(val)=>{
    return{type:shopActionTypes.urun.URUN_EKLE, payload:val}
}

const urunAksiyon={urunEkle};
export default urunAksiyon;