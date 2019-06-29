import React from 'react';
import './SmurfComponents.css';

const Smurf = props => {
    return (
        <div className="smurf-card">
            <h4>{props.smurf.name}</h4>
            <p><strong>HEIGHT:</strong> {props.smurf.height}</p>
            <p><strong>AGE:</strong> {props.smurf.age}</p>
        </div>
    );
}

export default Smurf;