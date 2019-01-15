import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <ul>
            {props.characters.map(char => (
                <li key={char.id}>
                    <div className="card">
                        <div className="img-container">
                            <img alt={char.name} src={char.image} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Card;

