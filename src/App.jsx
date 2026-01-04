import React, { useState } from "react";
import SearchProperty from "./components/SearchProperty";
import PropertyDetail from "./components/PropertyDetail";
import { propertiesData } from "./components/SearchProperty";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("search"); // 'search' or 'detail'
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleViewProperty = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const handleBackToSearch = () => {
    setCurrentView("search");
    setSelectedPropertyId(null);
  };

  const handleAddFavourite = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const isFavourite = (propertyId) => {
    return favourites.some((fav) => fav.id === propertyId);
  };

  const selectedProperty = propertiesData.properties.find(
    (p) => p.id === selectedPropertyId
  );

  return (
    <div className="App">
      {currentView === "search" && (
        <SearchProperty onViewProperty={handleViewProperty} />
      )}
      {currentView === "detail" && (
        <PropertyDetail
          property={selectedProperty}
          onBack={handleBackToSearch}
          onAddFavourite={handleAddFavourite}
          isFavourite={isFavourite(selectedPropertyId)}
        />
      )}
    </div>
  );
}

export default App;