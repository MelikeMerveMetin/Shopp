import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

function Product() {
    const deger = useSelector((state) => state.shopReducer);
    const dispatch = useDispatch();  

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9">
                        <h2 style={{ color: "red" }}>ALIŞVERİŞ LİSTESİ</h2>
                    </div>
                    <div className="col-md-3">
                    <h4>
                            <Link to="/urun_ekle">ÜRÜN EKLE</Link>
                        </h4>
                        <h4>
                            <Link to="/basket">SEPETİM</Link>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {deger.productList.map((product) => {
                    
                        return (
                          
                            <div className="col-md-3 mt-3">
                                <div className="card" style={{ height: "30rem" }}>
                                    <img src={product.image} className="card-img-top" style={{ height: "18rem" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.price}&#8378;</h5>
                                        <p className="card-text">{product.isim}</p>
                                        <button className="btn btn-primary" onClick={() => dispatch(Actions.sepetAksiyon.sepeteEkle(product))}>
                                            Sepete Ekle
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

export default Product;





