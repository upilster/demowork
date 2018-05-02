import React, { Component } from "react";
import logo from "./Media/workclub_logo.png";
import ico from "./Media/favicon.ico";
import { Launcher } from "react-chat-window";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import autobind from "react-autobind";
import "./Styles/css/styles.min.css";
import "./App.css";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Routes/Home/Home";
class App extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
    autobind(this);
  }
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(newMessage);
  };
  render() {
    return (
      <div className="App">
        <Nav logo={logo} />
        <Home />
        <Footer />
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={ico}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}

export default App;
