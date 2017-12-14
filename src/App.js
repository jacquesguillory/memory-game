import React, { Component } from 'react';
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import './App.css';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    max: 0
  };

  render() {
    return (
    <div>
      <Header>
      <h1>Memory Card Game</h1> 
      <h2>NHL Edition</h2>
      <br/>
      <p>Each time you click a picture, the set of pictures is reshuffled.
        Avoid clicking on the same picture twice or the game is over.  Try
          to correctly pick all 12 pictures in a row!</p>
      <p style={{float: "right"}}>Score:    Max Score:</p>
      </Header>

      <Wrapper>

          {this.state.cards.map(card => (
            <Card
              id={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
