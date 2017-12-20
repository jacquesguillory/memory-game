import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="scoreboard">
        <p>Score: {props.score}</p>
        <p>Highest Score: {props.max}</p>
    </div>
);

export default Scoreboard;
