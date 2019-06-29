import React from 'react';
import Smurf from './Smurf';
import './SmurfComponents.css';

const SmurfList = props => {
    return (
        <div>
            <h2>SMURFS IN THE VILLAGE:</h2>
            <div className="smurf-list-container">
        
            {props.smurfs.map((smurf,index) => <Smurf key={index} smurf={smurf} deleteSmurf={props.deleteSmurf}/>)}
            </div>
        </div>
        
    )
}

export default SmurfList;