import React, { Component } from 'react'
import Quotation from '../data/data.json'
import Math from './Algorithms.js'
import quoteData from '../data/quoteData.js'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteData: quoteData
            // quoteQuantity: Quotation.length-1,
            // // -1 because there are some flaws when it comes to array indexes          
            // quoteChange: "",
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            quoteChange: "",
        })
    }

    render() {
        const randomNumGen = Math(0, this.state.quoteQuantity);
        // this is just to get a random number from the avaiable array indexes

        const entireQuote = Quotation[randomNumGen].quote + " -" + Quotation[randomNumGen].author;
        // this is to combine the quote and the author so it is one sentence
    
        return (
            <div id="quote-box">
                {/* <p>{Math(0, this.state.quoteQuantity)}</p> */}
                <h1 id="text">{Quotation[randomNumGen].quote}</h1>
                <p id="author">- {Quotation[randomNumGen].author}</p>
                {/* <h2>{entireQuote}</h2> */}
                {/*^^^ this is just for testing to see what it outputs*/}
                <button id="new-quote" onClick={this.handleClick}>New Quote Button</button>
                {/* this onClick is just to change teh state therefore it re-renders the entire page 
                since React would render if the states change or stays the same unles you speficy what 
                to re-render so it won't reload the entire page */}
                <br></br>
                <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + entireQuote}>Tweet This</a>
                {/* This tweet-quote is able to tweet out the quote and the author */}
            </div>
            );
    }
}

export default Title;

