import React, { useState, useMemo } from 'react';
import '/src/assets/css/services.css';  

const servicesData = [
  {
    id: 1,
    name: 'Bottle',
    description: 'Custom printed bottle for any event.',
    price: 200,
    image: '/images/bottle.jpeg', // Public folder path
  },
  {
    id: 2,
    name: 'Umbrella',
    description: 'Custom printed umbrella for outdoor events.',
    price: 300,
    image: '/images/umbrella.jpeg',
  },
  {
    id: 3,
    name: 'T-shirt',
    description: 'Personalized T-shirt for your brand or event.',
    price: 300,
    image: '/images/tshirt.jpeg',
  },
  {
    id: 4,
    name: 'Book',
    description: 'Custom printed book with your design.',
    price: 150,
    image: '/images/book.jpeg',
  },
  {
    id: 5,
    name: 'Pen',
    description: 'Custom printed pen with your logo or message.',
    price: 100,
    image: '/images/pen.jpeg',
  },
  {
    id: 6,
    name: 'Cups',
    description: 'Custom printed cups for events or gifts.',
    price: 150,
    image: '/images/cups.jpeg',
  },
  {
    id: 7,
    name: 'Visors',
    description: 'Personalized visors for outdoor events.',
    price: 300,
    image: '/images/visors.jpeg',
  },
  {
    id: 8,
    name: 'Bags',
    description: 'Custom printed bags for branding or giveaways.',
    price: 200,
    image: '/images/bags.jpeg',
  },
  {
    id: 9,
    name: 'Thumbdrive',
    description: 'Custom printed thumb drives for promotions.',
    price: 100,
    image: '/images/thumbdrive.jpeg',
  },
  {
    id: 10,
    name: 'Phone Stand',
    description: 'Custom phone stand for business gifts or events.',
    price: 100,
    image: '/images/phonestand.jpeg',
  },
];

const Services = () => {
  const [filter, setFilter] = useState({ category: '', minPrice: '', maxPrice: '' });
  const [quantity, setQuantity] = useState({});

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleQuantityChange = (id, value) => {
    setQuantity((prevQuantity) => ({ ...prevQuantity, [id]: Math.max(1, parseInt(value) || 1) }));
  };

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = filter.category ? service.name.toLowerCase().includes(filter.category.toLowerCase()) : true;
      const matchesMinPrice = filter.minPrice ? service.price >= parseInt(filter.minPrice) : true;
      const matchesMaxPrice = filter.maxPrice ? service.price <= parseInt(filter.maxPrice) : true;
      return matchesCategory && matchesMinPrice && matchesMaxPrice;
    });
  }, [filter]);

  const calculatePrice = (service) => {
    const qty = quantity[service.id] || 1;
    return service.price * qty;
  };

  return (
    <div className="services-page">
      <h1>Our Custom Printing Services</h1>

      {/* Filters Section */}
      <div className="filter-options">
        <label>
          Category:
          <input
            type="text"
            name="category"
            placeholder="Search by category"
            value={filter.category}
            onChange={handleFilterChange}
            className="input-field"
          />
        </label>

        <label>
          Min Price:
          <input
            type="number"
            name="minPrice"
            value={filter.minPrice}
            onChange={handleFilterChange}
            className="input-field"
          />
        </label>

        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
            value={filter.maxPrice}
            onChange={handleFilterChange}
            className="input-field"
          />
        </label>
      </div>

      {/* Services List */}
      <div className="services-list">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-item">
            <img className="service-image" src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>Price: ${service.price}</p>

            {/* Quantity Selection */}
            <label>
              Quantity:
              <input
                type="number"
                value={quantity[service.id] || 1}
                onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                className="quantity-input"
                min="1"
              />
            </label>
            <p>Total Price: ${calculatePrice(service)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
