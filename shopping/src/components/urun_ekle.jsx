import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Actions from "../redux/actions";

function UrunEkle() {
    const [form, setForm] = useState({
        id: null,
        isim: "",
        price: null,
        image: "",
    });

    const degisim = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        //formda bir değişiklik olduğunda o name (hangi name değeri değiştiyse)değerinin içindeki valueyu ile set et
    };

    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1>ÜRÜN EKLE</h1>
            <div className="col-md-6">
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">
                                İD
                            </span>
                        </div>
                        <input type="text" name="id" value={form.id} onChange={degisim} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">
                                NAME
                            </span>
                        </div>
                        <input type="text" name="isim" value={form.isim} onChange={degisim} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">
                                PRİCE
                            </span>
                        </div>
                        <input type="text" name="price" value={form.price} onChange={degisim} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">
                                ÜRÜN RESMİ
                            </span>
                        </div>
                        <input type="file" name="image" onChange={degisim} className="form-control" id="inputGroup-sizing-sm" />
                    </div>

                    <button className="btn btn-primary" onClick={() => dispatch(Actions.urunAksiyon.urunEkle(form))}>
                        Ürünü Ekle
                    </button>
                </form>
                <Link to="/">ANASAYFA</Link>{" "}
            </div>
        </div>
    );
}

export default UrunEkle;
