// ServiceCard.js
import "../styles/ServiceCard.css";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <p className="service-text">{title}</p>
    </div>
  );
};

export default ServiceCard;
