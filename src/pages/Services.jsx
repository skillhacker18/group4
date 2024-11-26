import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services data from an API or a static file
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>
            <p>Available Sizes: {service.sizes.join(', ')}</p>
            <p>Materials: {service.materials.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;