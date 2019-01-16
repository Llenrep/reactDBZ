import React, { Component } from 'react';
import './App.css';
import Background from './components/images/GokuBG.jpg';
import liveBG from './components/images/DBSbg.mp4';
import Card from "./components/Card/Card.js";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";


var aCStyle = {
  fontSize: "12px",
  fontStyle: "italic",
  // float: "right",
  margin: "10px 10px 10px 10px",
  bottom: '4'
}

var sectionStyle = { //regular font for the entirety of the section. more so the introduction though
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + Background + ")",
  color: "white",
  textShadow: "2px 2px #ff0000"
};

var fontStyle = { //font decreasing method
  fontSize: "12px",
  fontStyle: "italic"
}

const ColoredLine = ({ color }) => ( //for any time I want to implement HR tags
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2
    }}
  />
);

/* <video className='videoTag' style={{ zIndex: 0 }} style={thebackgroundImage} autoPlay loop muted>
          <source src={liveBG} type='video/mp4' />
</video> */

class App extends Component {

  constructor() {
    super();

    this.state = {
      wins: 0,
      loss: 0,
      amountClicked: 0
    }

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(e) {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + e })
    console.log(amountClicked)
  }

  // addTotal = () => {
  //   const { amountClicked } = this.state.amountClicked;
  //   console.log(amountClicked)
  //   this.setState({ amountClicked: amountClicked + 1 })
  // }

  render() {

    console.log("rendering");

    return (
      <React.Fragment>
        <Wrapper>
          <section style={sectionStyle}>
            <center><h1>React Click</h1></center>
            <center><h6 style={fontStyle}>DragonBall Style</h6></center>
            <div className="container">
              <ColoredLine color="red" />
            </div>
            <center style={fontStyle}><h6>Wins: {this.state.wins}</h6><h6>Loss: {this.state.loss}</h6></center>
            <h6 style={aCStyle}>Amount Clicked: {this.state.amountClicked} out of 16!</h6>
            <div className="container">
              <ul>
                <Card characters={characters} />
              </ul>
            </div>

          </section>
        </Wrapper>
      </React.Fragment >
    );
  }

}

export default App;
