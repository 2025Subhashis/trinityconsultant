import React, { useEffect } from 'react';
import { mappls } from 'mappls-web-maps';
import './MapModal.css';

const MapModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const ACCESS_TOKEN = "YOUR_MAPPLS_ACCESS_TOKEN"; // TODO: Insert your API Key here
      const mapplsClassObject = new mappls();
      mapplsClassObject.initialize(ACCESS_TOKEN, () => {
        const map = mapplsClassObject.Map({
          id: 'map-container',
          properties: {
            center: [22.5726, 88.3639], // Approx. Kolkata
            zoom: 15,
          }
        });
        
        map.on('load', () => {
          new mapplsClassObject.Marker({
            map: map,
            position: { lat: 22.5726, lng: 88.3639 },
          });
        });
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <div id="map-container" style={{ width: '100%', height: '400px' }}></div>
      </div>
    </div>
  );
};

export default MapModal;