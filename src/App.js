import React, { Component } from 'react';
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Scoreboard from "./components/scoreboard";
import './App.css';
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    score: 0,
    max: 0
  };

  shuffleCards = () => {
    console.log("communicating");
    let counter = this.state.cards.length;
    const cards = [...this.state.cards];
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = cards[counter];
            // console.log('START')
            // console.log('temp', temp);
            // console.log('cards[index]', cards[index]);
            cards[counter] = cards[index];
            // console.log('cards[counter]', cards[counter]);
            cards[index] = temp;
            // console.log('cards[index]', cards[index]);
            // console.log('END');
        }
    
        this.setState({cards});

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
      <Scoreboard 
        score={this.state.score}
        max={this.state.max}
      />
      </Header>

      <Wrapper>

          {this.state.cards.map(card => (
            <Card
              id={card.id}
              name={card.name}
              image={card.image}
              shuffleCards={this.shuffleCards}
            />
          ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
