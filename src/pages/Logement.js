import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../monFichier.json';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import '../styles/Logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className="logement-container">
      <Slideshow pictures={logement.pictures} />
      <div className="logement-header">
        <div>
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement-host">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img className="host-picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
            {Array(5).fill().map((_, i) => (
              <span key={i} className={`star ${i < logement.rating ? 'filled' : ''}`}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div className="logement-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
