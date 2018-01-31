import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="scoreboard">
        <p>Current Score: {props.score}</p>
        <p>Best Score: {props.max}</p>
    </div>
);

export default Scoreboard;
