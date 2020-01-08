import React, { Component } from "react";
import "../styles/App.css";
import "../index.css";
import PeopleList from "./PeopleList";
import Profile from "./Profile";

function withHeaderFooter(Component) {
  return function(props) {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h2>{props.title}</h2>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <Component {...props} />
          </div>
        </main>
        <footer></footer>
      </div>
    );
  };
}

function withView(Component) {
  return function(props) {
    console.log(props.backPress);
    return (
      <div>
        <Component {...props} />
        {props.viewedIndex === -1 || props.backPress === true ? (
          <div></div>
        ) : (
          <Profile
            data={props.data[props.viewedIndex]}
            backPressed={props.backPressed}
          />
        )}
      </div>
    );
  };
}

const EnhancedPeopleList = withView(withHeaderFooter(PeopleList));
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      viewedIndex: -1,
      backPress: true
    };
  }

  getData = data => {
    console.log("getting data");
    this.setState({
      data: data
    });
    console.log(this.state);
  };

  viewProfile = index => {
    this.setState({
      viewedIndex: index,
      backPress: false
    });
  };

  backPressed = () => {
    console.log("backPressed");
    this.setState({
      backPress: true
    });
  };

  render() {
    return (
      <EnhancedPeopleList
        title="People"
        viewProfile={this.viewProfile}
        getData={this.getData}
        viewedIndex={this.state.viewedIndex}
        data={this.state.data}
        backPress={this.state.backPress}
        backPressed={this.backPressed}
      />
    );
  }
}

export default App;
