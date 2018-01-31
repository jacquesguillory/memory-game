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
    max: 0,
    compareArray:[]
  };

  // shuffle card function
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

  // card checking function
  cardCheck = (props) => {
    let compareArray = [...this.state.compareArray];
    // let i; //don't know why i have to define i here but got error otherwise
    let found = false;
    for (let i = 0; i < this.state.compareArray.length; i++){
      if (props.id === compareArray[i]){
       found = true;
       break;
      }
    }

    // if repeat card is clicked, reset score after checking max value
    if(found) {
      alert("You picked the same card twice!  Try to click all 12 cards without any repeats.");

      if(this.state.score > this.state.max) {
        this.setState({max: this.state.score});
      }

      this.setState({score: 0});
      this.setState({compareArray: []});
    }

    // if unique card found, push card id to the compareArray and increase current score by 1
    if (!found) {
      compareArray.push(props.id);
      this.setState({score: this.state.score + 1});
      this.setState({compareArray});

      // fixing statefulness with this trick
      let scoreCheck = this.state.score + 1;
      // congratulate them if the get the max score and reset everything except max
      if(scoreCheck === 12){
        alert("Great job! You correctly picked all 12 cards in a row. Keep practicing to keep your short term memory sharp!");
        this.setState({score: 0});
        this.setState({compareArray: []});
        this.setState({max: 12});
      }
    }
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
              cardCheck={this.cardCheck}
            />
          ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
