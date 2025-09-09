import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProdotti(resp.data);
    });
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">Prodotti</h1>

      <div className="products-grid">
        {prodotti.map((prodotto) => (
          <div className="products-item" key={prodotto.id}>
            <Link to={`/products/${prodotto.id}`}>
              <article className="product-card">
                <img
                  src={prodotto.image}
                  className="product-img"
                  alt={prodotto.title}
                />
                <div className="product-body">
                  <h5 className="product-title">{prodotto.title}</h5>
                  <p className="product-desc">{prodotto.description}</p>
                  <p className="product-price">€ {prodotto.price}</p>
                </div>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodotti;