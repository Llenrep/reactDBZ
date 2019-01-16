import React from "react";
import "./Card.css";



function addTotal() {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + 1 });
    console.log(amountClicked);
};

function Card(props) {
    return (
        props.characters.map(char => (
            <button key={char.id} clicked="no" className="button" onClick={addTotal}>
                <div className="nah">
                    <div className="card">
                        <div className="img-container">
                            <img alt={char.name} src={char.image} />
                        </div>
                    </div>
                </div>
            </button>
        ))
    );
}

export default Card;

//get the button to console log the status of "clicked"
//get the button to change when its clicked,
//Make it so that if the button is clicked again, after its status has been previously changed, add a loss might have to have how many times its clicked.
//

