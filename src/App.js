import React, { Component } from 'react';
import './App.css';

const cards = [
  {
    imgSrc: 'images/square1.png',
    title: 'love'
  }, {
    imgSrc: 'images/square2.png',
    title: 'honey'
  }, {
    imgSrc: 'images/square3.png',
    title: 'candy'
  }, {
    imgSrc: 'images/square4.png',
    title: 'baby'
  }, {
    imgSrc: 'images/square5.png',
    title: 'rosy'
  }, {
    imgSrc: 'images/square6.png',
    title: 'sweetie'
  }
]

// APP THAT HOLDS A GALLERY OF THE CARDS AND SHOWS A TITLE

class App extends Component {
  render() {
    let cardsJSX = cards.map((card, i) => {
      return (
        < Card card={card} key={i} />
        )
      }
    )
    return (
      <div className='App'>
        <div className="container-fluid">          
          <h1> bedroom jams</h1>
            <div className='row'>
            {cardsJSX}
            </div>
        </div>
      </div>
    )
  }
}

// INDIVIDUAL CARD COMPONENT 
// CONTAINS IMG, TITLE AND LIKES + LIKES BUTTON

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }
like = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    let {card}= this.props
    
    return (
      <div className='col l4 m6 s12'>
        <h5> {card.title}</h5>
        <img src={card.imgSrc} className='responsive-img'/>
        <span> &hearts; {this.state.likes} </span>
        <button onClick={this.like}>love</button>
      </div>
    )     
  }
}

export default App;