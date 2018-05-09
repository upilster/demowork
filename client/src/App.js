import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Media/workclub_logo.png";
import ico from "./Media/favicon.ico";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import autobind from "react-autobind";
import "./Styles/css/styles.min.css";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Routes/Home/Home";
import Browse_Spaces from "./Components/Routes/Browse_Spaces/Browse_Spaces";
import Single_Space from "./Components/Routes/Single_Space/Single_Space";
import Join from "./Components/Routes/Join/Join";


class App extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
    autobind(this);
  }
  componentDidMount() {
    addResponseMessage("Hey! My name is Sister Jane, welcome to WorkClub.");
    addResponseMessage("How can i help?");
  }
  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(newMessage);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Nav logo={logo} />
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/browse-space"
            component={() => <Browse_Spaces />}
          />
          <Route path="/browse-space/:space" component={(match) => <Single_Space match={match}/>} />
          <Route exact path="/join" component={() => <Join />} />
          <Footer />
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={ico}
            title="Welcome to live chat"
            subtitle="Sister Jane"
          />
          <button id="scroll-top" title="Go to top">
            {" "}
            <i className="fa fa-arrow-up" />
          </button>
        </div>
      </Router>
    );
  }
}


export default App;
