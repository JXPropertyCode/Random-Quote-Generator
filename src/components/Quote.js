// this is basically an improved version of Title.js

import React from "react";
import axios from "axios";
import RandomRange from './Algorithms.js'
import quoteData from '../data/quoteData.js'


class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // quotes: [],
            quotes: quoteData,
            randomInt: 0,
            error: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount() {
        // axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        //      .then( (response) => {
        //          this.setState({
        //             quotes: response.data.quotes,
        //             randomInt: RandomRange(0, response.data.quotes.length)
        //          })
        //      }).catch(e => {
        //          this.setState({
        //             quotes: [],
        //             randomInt: 0,
        //             error: true
                    // remember everytime you setState. make sure to also include the other states that are inside the state or else it would override it and it would only save the state that you setState.
        //          })
        //      });
        // doesn't need the above since on line 12, quotes: quoteData is internal data that is gotten.
        // unless we need to get it from another source to reference it, like API or alternative sources, we would need to request the data
    // }    
    // note: componentDidMount() only runs one time. then it never runs it at all again. it would be handleClick and other eventListeners in the code

    handleClick() {
        this.setState(state => ({
            quotes: state.quotes,
            // this state.quotes means to get the orignal state.quote from this.state
            randomInt: RandomRange(0, state.quotes.length),
            error: false,
        }))
    }

    render() {
        if (this.state.error) {
            return <p>error</p>
        }
        // this is to show the person that there is error

        if (this.state.quotes.length == 0 ) {
            return <p>loading...</p>
        }
        // this to prevent the other code from running since it would return a error message if it ran wihtout this
        // since if quote length doesn't have a length, the line 60 "<p>{this.state.quotes[this.state.randomInt].quote}</p>" will run and it would return a website error

        const entireQuote = this.state.quotes[this.state.randomInt].quote + " -" + this.state.quotes[this.state.randomInt].author;

        return (
            <div id="quote-box">
                <p id="text">{this.state.quotes[this.state.randomInt].quote}</p>
                <p id="author">{this.state.quotes[this.state.randomInt].author}</p>
                <button id="new-quote" onClick={this.handleClick}>New Quote Button</button>
                <br></br>
                <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + entireQuote}>Tweet Quote</a>

            </div>
            );
    }
}

export default Quote;
