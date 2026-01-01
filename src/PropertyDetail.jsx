import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Heart,
  Home,
  Bed,
  MapPin,
  ZoomIn,
  Download,

} from "lucide-react";
import "./PropertyDetail.css";

export default function PropertyDetail({ property, onBack, onAddFavourite, isFavourite }) {
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [floorPlanZoom, setFloorPlanZoom] = useState(false);

  if (!property) {
    return (
      <div className="property-detail-container">
        <p>Property not found</p>
        <button onClick={onBack} className="btn btn-primary">
          Back to Search
        </button>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="property-detail-container">
      {/* Back Button */}
<button
  onClick={() => {
    onBack();
    // Scroll to results section after going back
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 100);
  }}
  className="back-button"
  aria-label="Back to search results"
>
  <ChevronLeft size={20} />
  <span>Back</span>
</button>

      {/* Property Detail Card */}
      <div className="property-detail-card">
        {/* Image Gallery */}
        <section className="image-gallery-section" aria-label="Property images">
          <div className="main-image-container">
            <img
              src={property.images[currentImageIndex]}
              alt={`Property view ${currentImageIndex + 1}`}
              className="main-image"
              onClick={() => openLightbox(currentImageIndex)}
            />
            <button
              onClick={prevImage}
              className="nav-button nav-button-left"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="nav-button nav-button-right"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="image-counter">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </section>

        {/* Property Info Header */}
        <section className="property-info-header">
          <div className="property-header-left">
            <h1 className="property-detail-price">
              £{property.price.toLocaleString()}
            </h1>
            <div className="property-meta">
              <span className="meta-item">
                <Home size={18} />
                {property.type}
              </span>
              <span className="meta-item">
                <Bed size={18} />
                {property.bedrooms} Bedrooms
              </span>
              <span className="meta-item">{property.tenure}</span>
            </div>
            <div className="property-address">
              <MapPin size={20} />
              <span>{property.location}</span>
            </div>
          </div>

          
        </section>

        {/* Tabs */}
        <section className="tabs-section">
          <div className="tabs-header" role="tablist">
            <button
              role="tab"
              aria-selected={activeTab === "description"}
              aria-controls="description-panel"
              className={`tab-button ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "floorplan"}
              aria-controls="floorplan-panel"
              className={`tab-button ${
                activeTab === "floorplan" ? "active" : ""
              }`}
              onClick={() => setActiveTab("floorplan")}
            >
              Floor Plan
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "map"}
              aria-controls="map-panel"
              className={`tab-button ${activeTab === "map" ? "active" : ""}`}
              onClick={() => setActiveTab("map")}
            >
              Map
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "description" && (
              <div
                id="description-panel"
                role="tabpanel"
                aria-labelledby="description-tab"
                className="tab-panel"
              >
                <h2 className="tab-panel-title">Property Description</h2>
                <p className="property-full-description">{property.description}</p>
              </div>
            )}

            {activeTab === "floorplan" && (
  <div
    id="floorplan-panel"
    role="tabpanel"
    aria-labelledby="floorplan-tab"
    className="tab-panel"
  >
    <div className="floor-plan-container">
      <div className="floor-plan-header">
        <h2 className="floor-plan-title">Floor Plan</h2>
        <div className="floor-plan-actions">
          <button 
            className="action-button"
            onClick={() => setFloorPlanZoom(true)}
            aria-label="View full size"
          >
            <ZoomIn size={18} />
            View Full Size
          </button>
          <button 
            className="action-button"
            onClick={() => {
              const link = document.createElement('a');
              link.href = property.floorPlan;
              link.download = 'floor-plan.jpg';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            aria-label="Download floor plan"
          >
            <Download size={18} />
            Download
          </button>
        </div>
      </div>

      <div className="floor-plan-wrapper">
        <img
          src={property.floorPlan}
          alt="Property floor plan"
          className="floor-plan-image"
          onClick={() => setFloorPlanZoom(true)}
        />
      </div>

      <div className="floor-plan-info">
        <p className="info-title">About this floor plan</p>
        <p className="info-text">
          This floor plan provides an overview of the property layout including room dimensions and positioning. 
          For detailed measurements or to discuss specific room layouts, please contact our team.
        </p>
      </div>
    </div>

    {/* Floor Plan Zoom Modal */}
    {floorPlanZoom && (
      <div 
        className="zoom-modal"
        onClick={() => setFloorPlanZoom(false)}
      >
        <button
          className="zoom-close"
          onClick={() => setFloorPlanZoom(false)}
          aria-label="Close zoom view"
        >
          <X size={24} />
        </button>
        <img
          src={property.floorPlan}
          alt="Floor plan full size"
          className="zoom-image"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
  </div>
)}

            {activeTab === "map" && (
  <div
    id="map-panel"
    role="tabpanel"
    aria-labelledby="map-tab"
    className="tab-panel"
  >
    <h2 className="tab-panel-title">Location</h2>

    <div className="map-container">
      <iframe
        title="Property Location"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
      ></iframe>

      <div className="map-footer">
        <MapPin size={18} />
        <span>{property.location}</span>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-open-link"
        >
          Open in Google Maps →
        </a>
      </div>
    </div>
  </div>
)}

          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <button
            className="lightbox-nav lightbox-nav-left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={property.images[currentImageIndex]}
            alt={`Full size view ${currentImageIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-nav-right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
           <X size={28} />
           </button>
        </div>
      )}
    </div>
  );
}