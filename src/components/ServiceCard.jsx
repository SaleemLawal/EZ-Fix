import React from 'react';

// interface ServiceCardProps {
//   imageSrc: string;
//   title: string;
// }

const ServiceCard = ({ imageSrc, title }) => {
  return (
    <div className="service-card">
      <img src={imageSrc} alt={title} className="service-card-image" />
      <p>{title}</p>
    </div>
  );
};

export default ServiceCard;
