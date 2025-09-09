import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

  function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data);
    });
  }, [id]);

  const handlePrevious = () => {
    navigate(`/products/${parseInt(id, 10) - 1}`);
  };

  const handleNext = () => {
    navigate(`/products/${parseInt(id, 10) + 1}`);
  };

  return (
    <div className="page">
      {product ? (
        <div className="detail-card">
          <div className="detail-header">
            <button
              onClick={handlePrevious}
              className="btn-ghost"
              disabled={parseInt(id, 10) <= 1}
            >
              Prodotto precedente
            </button>
            <button onClick={handleNext} className="btn-ghost">
              Prodotto successivo
            </button>
          </div>

          <div className="detail-grid">
            <div className="detail-media">
              <img
                src={product.image}
                alt={product.title}
                className="detail-img"
              />
            </div>

            <div className="detail-info">
              <h1 className="detail-title">{product.title}</h1>
              <p className="detail-category">Categoria: {product.category}</p>
              <p className="detail-desc">{product.description}</p>
              <h3 className="detail-price">€ {product.price}</h3>

              <Link to="/prodotti" className="btn-primary">
                Torna ai prodotti
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="status">Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;