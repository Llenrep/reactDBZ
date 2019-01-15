import React from "react";
import "./Card.css";

function Card(props) {
    return (


        props.characters.map(char => (
            <div key={char.id}>
                <button clicked="no">
                    <div className="card">
                        <div className="img-container">
                            <img alt={char.name} src={char.image} />
                        </div>
                    </div>
                </button>
            </div >
        ))


    );
}

export default Card;

