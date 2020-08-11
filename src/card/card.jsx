import React, { Component } from 'react';
import './card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{props.eng}</div>
            </div>
            <div className="back">
                <div className="han">{props.han}</div>
                <div className="rom">{props.rom}</div>

            </div>
        </div>
    </div>
)

export default Card;