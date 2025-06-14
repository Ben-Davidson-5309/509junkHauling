import "./ResidentialCard.css";

const ResidentialCard = ({ title, price, oldPrice, description, children }) => (
  <div className="card home-card text-center shadow-sm mb-4">
    <div className="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 className="card-title mb-3">{title}</h5>
        {price && (
          <div className="price-display mb-2">
            {oldPrice && (
              <span className="text-muted text-decoration-line-through me-2">
                ${oldPrice}
              </span>
            )}
            <span className="h2 text-success">${price}</span>
          </div>
        )}
        <p className="card-text text-muted">{description}</p>
        {children}
      </div>
    </div>
  </div>
);

export default ResidentialCard;
