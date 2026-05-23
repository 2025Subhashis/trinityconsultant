import React, { useEffect, useRef } from 'react';
import { mappls } from 'mappls-web-maps';
import './MapModal.css';

const MapModal = ({ isOpen, onClose }) => {
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const initMap = () => {
      const ACCESS_TOKEN = "cdb403820542bcb2ca8c53a611e8f462"; // Updated API Key

      if (ACCESS_TOKEN === "YOUR_MAPPLS_ACCESS_TOKEN") {
        console.error("Please insert a valid Mappls Access Token in MapModal.js");
        return;
      }

      const mapplsClassObject = new mappls();

      console.log("mapplsClassObject:", mapplsClassObject);

    mapplsClassObject.initialize(ACCESS_TOKEN, () => {
        console.log("Mappls initialized, attempting to create map via Mappls.Map...");
        
        // Alternative initialization pattern often seen in documentation
        try {
            const map = new window.mappls.Map('map-container', {
                center: [22.61, 88.47],
                zoom: 15,
            });
            console.log("Map object created:", map);
            
            mapInstance.current = map;
            map.addListener('load', () => {
                console.log("Map loaded, adding marker...");
                new window.mappls.Marker({
                    map: map,
                    position: { lat: 22.61, lng: 88.47 },
                });
            });
        } catch (error) {
            console.error("Error creating map instance:", error);
        }
    });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initMap, 100);

    return () => {
      clearTimeout(timer);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <h3>Office Location</h3>
        <div id="map-container"></div>
      </div>
    </div>
  );
};

export default MapModal;