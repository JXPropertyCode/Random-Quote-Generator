import "./App.css";
import Title from "./components/Title"
import React, { Component } from 'react'
import Quote from "./components/Quote"

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		return (
			<div className="App">
				{/* <Title /> */}
				{/* <Title /> no longer used since it was my first draft */}
				<Quote/>
				{/* <Quote/> is my brothers version and his is better and more efficient than mine*/}
			</div>
		);
	}
};

export default App;


// npm start