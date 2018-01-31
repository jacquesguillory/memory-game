import React from "react";
import "./card.css";

const Card = props => (
    <div className = "card" onClick={ () => {props.cardCheck(props); props.shuffleCards(props)}} >
        <div className = "img-container" id ={props.id}>
            <img alt={props.name} src={props.image}  />
        </div>
    </div>
);

export default Card;