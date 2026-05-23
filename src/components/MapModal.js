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

      mapplsClassObject.initialize(ACCESS_TOKEN, () => {
        console.log("Mappls initialized, creating map...");
        const map = mapplsClassObject.Map({
          id: 'map-container',
          properties: {
            center: [22.61, 88.47],
            zoom: 15,
          }
        });

        console.log("Map object created:", map);

        if (map && typeof map.on === 'function') {
          mapInstance.current = map;
          map.on('load', () => {
            console.log("Map loaded, adding marker...");
            new mapplsClassObject.Marker({
              map: mapInstance.current,
              position: { lat: 22.61, lng: 88.47 },
            });
          });
        } else {
          console.error("Map creation failed or map object is invalid:", map);
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