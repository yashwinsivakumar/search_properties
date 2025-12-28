import React, { useState } from "react";
import { Search, Home, Calendar, MapPin, Bed, PoundSterling, Heart, Trash2, Phone, Mail, Facebook, Instagram, Twitter, Shield, Award } from "lucide-react";
import "./SearchProperty.css";

// JSON Data - 7 properties total
export const propertiesData = {
  properties: [
    {
      id: "prop1",
      type: "House",
      bedrooms: 3,
      price: 750000,
      tenure: "Freehold",
      description:
        "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior.",
      location: "Petts Wood Road, Petts Wood, Orpington BR5",
      picture:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",        
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "October", day: 12, year: 2022 },
    },
    {
      id: "prop2",
      type: "Flat",
      bedrooms: 2,
      price: 399995,
      tenure: "Freehold",
      description:
        "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher and washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms. This apartment being only five years old, is still under a 10 year building guarantee.",
      location: "Crofton Road Orpington BR6",
      picture:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop",
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "September", day: 14, year: 2022 },
    },
    {
      id: "prop3",
      type: "House",
      bedrooms: 4,
      price: 925000,
      tenure: "Freehold",
      description:
        "Stunning four bedroom detached family home in prime location. This exceptional property features a spacious entrance hall, separate living room and dining room, modern kitchen with integrated appliances, utility room, and ground floor WC. Upstairs comprises four generous bedrooms with master en-suite, and a luxury family bathroom. The property benefits from a beautiful landscaped garden, double garage, and driveway parking for multiple vehicles. Recently renovated to a high standard with underfloor heating, double glazing throughout.",
      location: "Manor Park, Chislehurst BR7",
      picture:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "November", day: 5, year: 2023 },
    },
    {
      id: "prop4",
      type: "Flat",
      bedrooms: 1,
      price: 285000,
      tenure: "Leasehold",
      description:
        "Modern one bedroom apartment perfect for first-time buyers or investors. This well-presented flat features an open-plan living area with fitted kitchen, spacious bedroom with built-in wardrobes, and contemporary bathroom suite. Located on the second floor with lift access, the property includes allocated parking and is within walking distance of local amenities and transport links. Ideal for commuters with excellent access to central London.",
      location: "Station Approach, West Wickham BR4",
      picture:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
       
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "December", day: 1, year: 2023 },
    },
    {
      id: "prop5",
      type: "House",
      bedrooms: 5,
      price: 1250000,
      tenure: "Freehold",
      description:
        "Magnificent five bedroom executive detached house set in approximately half an acre. This prestigious property offers luxurious accommodation throughout including entrance hall with gallery landing, three reception rooms, study, fitted kitchen/breakfast room with separate utility, master bedroom suite with dressing room and en-suite, four further bedrooms, family bathroom and en-suite to bedroom two. Features include landscaped gardens, triple garage, heated swimming pool, and high-specification finishes throughout.",
      location: "Keston Park, Keston BR2",
      picture:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",

       
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "January", day: 20, year: 2024 },
    },
    {
      id: "prop6",
      type: "Flat",
      bedrooms: 3,
      price: 475000,
      tenure: "Leasehold",
      description:
        "Spacious three bedroom apartment in sought-after development. This impressive flat offers bright and airy accommodation with large reception room, modern fitted kitchen, three good-sized bedrooms, en-suite to master, family bathroom, and private balcony with stunning views. The development includes concierge service, residents gym, and secure underground parking. Excellent transport links and local amenities nearby.",
      location: "Bromley Common, Bromley BR2",
      picture:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1494203484021-3c454daf695d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "March", day: 15, year: 2024 },
    },
    {
      id: "prop7",
      type: "House",
      bedrooms: 2,
      price: 525000,
      tenure: "Freehold",
      description:
        "Charming two bedroom Victorian terraced house full of character. This delightful property retains many original features including high ceilings, sash windows, and feature fireplaces. Accommodation comprises entrance hall, living room, dining room, extended kitchen, two double bedrooms, and family bathroom. The property benefits from a private rear garden, gas central heating, and period features throughout. Conveniently located near shops, schools and transport.",
      location: "Hayes Lane, Bromley BR2",
      picture:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop",
      ],
      floorPlan:
        "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=600&h=400&fit=crop",
      added: { month: "April", day: 8, year: 2024 },
    },
  ],
};

export default function SearchProperty({ onViewProperty }) {
  const [filters, setFilters] = useState({
    type: "any",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateFrom: "",
    dateTo: "",
    postcode: "",
  });

  const [searchResults, setSearchResults] = useState(
    propertiesData.properties
  );
  const [favourites, setFavourites] = useState([]);
  const [draggedProperty, setDraggedProperty] = useState(null);

  // Helper function to convert month name to number
  const getMonthNumber = (monthName) => {
    const months = {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    };
    return months[monthName] || 0;
  };

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  };

  // Search functionality
  const handleSearch = () => {
    let filtered = propertiesData.properties.filter((property) => {
      // Type filter
      if (
        filters.type !== "any" &&
        property.type.toLowerCase() !== filters.type.toLowerCase()
      ) {
        return false;
      }

      // Price filters
      if (filters.minPrice && property.price < parseInt(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
        return false;
      }

      // Bedroom filters
      if (
        filters.minBedrooms &&
        property.bedrooms < parseInt(filters.minBedrooms)
      ) {
        return false;
      }
      if (
        filters.maxBedrooms &&
        property.bedrooms > parseInt(filters.maxBedrooms)
      ) {
        return false;
      }

      // Date filters
      const propDate = new Date(
        property.added.year,
        getMonthNumber(property.added.month),
        property.added.day
      );

      if (filters.dateFrom) {
        const fromDate = new Date(filters.dateFrom);
        if (propDate < fromDate) return false;
      }

      if (filters.dateTo) {
        const toDate = new Date(filters.dateTo);
        if (propDate > toDate) return false;
      }

      // Postcode filter
      if (filters.postcode) {
        const sanitizedPostcode = sanitizeInput(filters.postcode);
        const postcodeMatch = property.location.match(
          /\b([A-Z]{1,2}\d{1,2}[A-Z]?)\b/i
        );
        if (
          !postcodeMatch ||
          !postcodeMatch[0]
            .toUpperCase()
            .includes(sanitizedPostcode.toUpperCase())
        ) {
          return false;
        }
      }

      return true;
    });

    setSearchResults(filtered);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFilters({
      type: "any",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      dateFrom: "",
      dateTo: "",
      postcode: "",
    });
    setSearchResults(propertiesData.properties);
  };

  // Favourites functions
  const addToFavourites = (property) => {
    // Check if property already exists (no duplicates)
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFromFavourites = (propertyId) => {
    setFavourites(favourites.filter((fav) => fav.id !== propertyId));
  };

  const clearFavourites = () => {
    if (window.confirm("Are you sure you want to clear all favourites?")) {
      setFavourites([]);
    }
  };

  const isFavourite = (propertyId) => {
    return favourites.some((fav) => fav.id === propertyId);
  };

  // Drag and drop functions
  const handleDragStart = (e, property) => {
    setDraggedProperty(property);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDropToFavourites = (e) => {
    e.preventDefault();
    if (draggedProperty) {
      addToFavourites(draggedProperty);
      setDraggedProperty(null);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Home size={40} />
          <div>
            <h1>Chooze|T</h1>
            <p>Find your dream home</p>
          </div>
        </div>
      </header>

      <section className="hero-section">
  <div className="hero-inner">
    
    <h1 className="hero-title">
      Discover Your Dream Property
    </h1>
    <p className="hero-subtext">
      Explore the UK's largest collection of homes with ChoozeIT
    </p>
    <div className="hero-stats">
      <div className="stat-item">
        <span className="stat-number">1000+</span>
        <span className="stat-label">Properties</span>
      </div>
      <div className="stat-divider"></div>
      <div className="stat-item">
        <span className="stat-number">50+</span>
        <span className="stat-label">Locations</span>
      </div>
      <div className="stat-divider"></div>
      <div className="stat-item">
        <span className="stat-number">24/7</span>
        <span className="stat-label">Support</span>
      </div>
    </div>
  </div>
</section>

      {/* Main Content */}
      <main className="main-layout">
        {/* Left Side - Search and Results */}
        <div>
          {/* Search Form */}
          <section className="search-section">
            <h2 className="section-title">
              <Search size={28} />
              Search Properties
            </h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="search-form">
                {/* Property Type (full width) */}
                <div className="form-group full-width">
                  <label className="form-label">
                    <Home size={16} />
                    Property Type
                  </label>
                  <select
                    className="form-select"
                    value={filters.type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    aria-label="Property Type"
                  >
                    <option value="any">Any</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                  </select>
                </div>

                {/* Min Price */}
                <div className="form-group">
                  <label className="form-label">
                    <PoundSterling size={16} />
                    Min Price
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    value={filters.minPrice}
                    onChange={(e) =>
                      handleFilterChange("minPrice", e.target.value)
                    }
                    placeholder="e.g. 200000"
                    aria-label="Minimum Price"
                  />
                </div>

                {/* Max Price */}
                <div className="form-group">
                  <label className="form-label">
                    <PoundSterling size={16} />
                    Max Price
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      handleFilterChange("maxPrice", e.target.value)
                    }
                    placeholder="e.g. 1000000"
                    aria-label="Maximum Price"
                  />
                </div>

                {/* Min Bedrooms */}
                <div className="form-group">
                  <label className="form-label">
                    <Bed size={16} />
                    Min Bedrooms
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    value={filters.minBedrooms}
                    onChange={(e) =>
                      handleFilterChange("minBedrooms", e.target.value)
                    }
                    placeholder="e.g. 2"
                    min="1"
                    aria-label="Minimum Bedrooms"
                  />
                </div>

                {/* Max Bedrooms */}
                <div className="form-group">
                  <label className="form-label">
                    <Bed size={16} />
                    Max Bedrooms
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    value={filters.maxBedrooms}
                    onChange={(e) =>
                      handleFilterChange("maxBedrooms", e.target.value)
                    }
                    placeholder="e.g. 5"
                    min="1"
                    aria-label="Maximum Bedrooms"
                  />
                </div>

                {/* Date From */}
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={16} />
                    Date Added From
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={filters.dateFrom}
                    onChange={(e) =>
                      handleFilterChange("dateFrom", e.target.value)
                    }
                    aria-label="Date Added From"
                  />
                </div>

                {/* Date To */}
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={16} />
                    Date Added To
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={filters.dateTo}
                    onChange={(e) =>
                      handleFilterChange("dateTo", e.target.value)
                    }
                    aria-label="Date Added To"
                  />
                </div>

                {/* Postcode Area (full width) */}
                <div className="form-group full-width">
                  <label className="form-label">
                    <MapPin size={16} />
                    Postcode Area
                  </label>
                  <input
                    type="text"
                    className="form-input postcode-input"
                    value={filters.postcode}
                    onChange={(e) =>
                      handleFilterChange("postcode", e.target.value)
                    }
                    placeholder="e.g. BR5, BR6, BR2"
                    aria-label="Postcode Area"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="button-group">
                <button
                  type="button"
                  onClick={handleSearch}
                  className="btn btn-primary"
                  aria-label="Search Properties"
                >
                  <Search size={20} />
                  Search 
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary"
                  aria-label="Reset Filters"
                >
                  Reset 
                </button>
              </div>
            </form>
          </section>

          

          {/* Results Section */}
          <section className="results-section">
            <h2 className="results-title">
              {searchResults.length}{" "}
              {searchResults.length === 1 ? "Property" : "Properties"} Found
            </h2>

            <div className="results-grid">
              {searchResults.map((property) => (
                <div
                  key={property.id}
                  className="property-card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, property)}
                  role="article"
                  aria-label={`Property at ${property.location}`}
                  >
                  {/* Property Image */}
                  <div className="property-image-container">
                    <img
                      src={property.picture}
                      alt={`Property at ${property.location}`}
                      className="property-image"
                    />
                    <div className="property-type-badge">{property.type}</div>
                    <button
                      className={`favourite-btn ${
                        isFavourite(property.id) ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToFavourites(property);
                      }}
                      aria-label={
                        isFavourite(property.id)
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                    >
                      <Heart
                        size={20}
                        color={isFavourite(property.id) ? '#e53e3e' : 'white'}
                        fill={isFavourite(property.id) ? '#e53e3e' : 'none'}
                      />
                    </button>
                  </div>

                  {/* Property Content */}
                  <div className="property-content">
                    <div className="property-price">
                      £{property.price.toLocaleString()}
                    </div>
                    <div className="property-location">
                      <MapPin size={16} />
                      <span>{property.location}</span>
                    </div>
                    <p className="property-description">
                      {property.description.substring(0, 100)}...
                    </p>
                    <div className="property-details">
                      <div className="property-info">
                        <Bed size={16} />
                        <span>{property.bedrooms} bed</span>
                      </div>
                      <div className="property-date">
                        {property.added.month.substring(0, 3)}{" "}
                        {property.added.year}
                      </div>
                    </div>
                    <button
                      className="btn btn-view-details"
                      onClick={() => onViewProperty(property.id)}
                      aria-label={`View details for ${property.location}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Right Side - Favourites */}
    <aside className="favourites-sidebar" aria-label="Favourites">
      <div
        className="favourites-container"
        onDragOver={handleDragOver}
        onDrop={handleDropToFavourites}
      >
        <div className="favourites-header">
          <h3 className="favourites-title">
            <Heart size={20} fill="#e53e3e" color="#e53e3e" />
            Favourites ({favourites.length})
          </h3>
          {favourites.length > 0 && (
            <button
              onClick={clearFavourites}
              className="clear-btn"
              title="Clear all"
              aria-label="Clear all favourites"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>

        {favourites.length === 0 ? (
          <div className="favourites-empty" role="status">
            <Heart size={32} aria-hidden="true" />
            <p>Drag properties here or click the heart icon</p>
          </div>
        ) : (
          <div className="favourites-list">
            {favourites.map((fav) => (
              <div
                key={fav.id}
                className="favourite-item"
                draggable
                onDragStart={(e) => handleDragStart(e, fav)}
                role="article"
                aria-label={`Favourite: ${fav.location}`}
              >
                <img src={fav.picture} alt={fav.location} className="favourite-image" />
                <div className="favourite-price">£{fav.price.toLocaleString()}</div>
                <div className="favourite-info">{fav.bedrooms} bed {fav.type}</div>
                <div className="fav-actions">
                  <button className="fav-remove-btn" onClick={() => removeFromFavourites(fav.id)}>Remove from favourites</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>

  </main>
  {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="why-choose-title">Why Choose Us?</h2>
          <p className="why-choose-subtitle">
            Discover what makes ChoozeIT platform stand out
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Search size={32} />
              </div>
              <h3 className="feature-title">Advanced Search</h3>
              <p className="feature-description">
                Find your perfect property with our powerful search filters. Search by location, price, bedrooms, and more.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3 className="feature-title">Trusted & Secure</h3>
              <p className="feature-description">
                Your data is protected with industry-leading security. Browse properties with complete peace of mind.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3 className="feature-title">Save Favorites</h3>
              <p className="feature-description">
                Create your personalized collection of favorite properties and access them anytime, anywhere.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3 className="feature-title">Quality Listings</h3>
              <p className="feature-description">
                All properties are verified and up-to-date. We ensure you get accurate information every time.
              </p>
            </div>
          </div>
        </div>
      </section>
</div>
);
}