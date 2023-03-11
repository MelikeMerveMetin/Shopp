import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../redux/actions";

function Basket() {
    const reducer = useSelector((state) => state.shopReducer);
    const dispatch = useDispatch();
    const totalPrice = reducer.basket.reduce((total, product) => (total += product.price), 0);
    console.log(reducer.basket)
    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9">
                        <h2 style={{ color: "red" }}>FATURAM</h2>
                    </div>
                    <div className="col-md-3">
                        <h2>
                            <Link to="/">Anasayfa</Link>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <h4 style={{ color: "red", textAlign: "right" }}> TOPLAM SEPET TUTARI: {totalPrice.toFixed(2)}&#8378;</h4>
                <h4 style={{ color: "red", textAlign: "right" }}> SEPETTEKİ TOPLAM ÜRÜN SAYISI: {reducer.basket.length}</h4>
                <div className="row">
                    {reducer.basket.map((product) => {
                        return (
                            <div className="col-md-3 mt-3">
                                <div className="card" style={{ height: "30rem" }}>
                                    <img src={product.image} className="card-img-top" style={{ height: "18rem" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.price}&#8378;</h5>
                                        <p className="card-text">{product.isim}</p>
                                        <button className="btn btn-primary" onClick={() => dispatch(Actions.sepetAksiyon.sepettenCikar(product.id))}>
                                            Sepetten Çıkar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Basket;
