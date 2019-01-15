import React, { Component } from 'react';
import './App.css';
import Background from './components/images/GokuBG.jpg';
import liveBG from './components/images/DBSbg.mp4';
import Card from "./components/Card/Card.js";
import characters from "./characters.json";


var thebackgroundImage = {
  width: "100%",
  height: "100vh",
  zIndex: '0'
}

var sectionStyle = { //regular font for the entirety of the section. more so the introduction though
  width: "100%",
  height: "100vh",
  bottom: "15",
  backgroundImage: "url(" + Background + ")",
  color: "white",
  alignContent: "center",
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
  render() {
    return (
      <React.Fragment>



        <section style={sectionStyle}>
          <center><h1>React Click</h1></center>
          <center><h6 style={fontStyle}>DragonBall Style</h6></center>
          <div className="container">
            <ColoredLine color="red" />
          </div>

          <Card characters={characters} />;
          </section>


      </React.Fragment >
    );
  }
}

export default App;
