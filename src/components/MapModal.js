import React, { useEffect, useRef } from 'react';
import { mappls } from 'mappls-web-maps';
import './MapModal.css';

const MapModal = ({ isOpen, onClose }) => {
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const ACCESS_TOKEN = "cdb403820542bcb2ca8c53a611e8f462"; // TODO: Insert your API Key here

    if (ACCESS_TOKEN === "YOUR_MAPPLS_ACCESS_TOKEN") {
      console.error("Please insert a valid Mappls Access Token in MapModal.js");
      return;
    }

    const mapplsClassObject = new mappls();

    mapplsClassObject.initialize(ACCESS_TOKEN, () => {
      mapInstance.current = mapplsClassObject.Map({
        id: 'map-container',
        properties: {
          center: [22.5726, 88.3639], // Office Location
          zoom: 15,
        }
      });

      mapInstance.current.on('load', () => {
        new mapplsClassObject.Marker({
          map: mapInstance.current,
          position: { lat: 22.5726, lng: 88.3639 },
        });
      });
    });

    return () => {
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