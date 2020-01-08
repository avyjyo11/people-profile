import React, { Component } from "react";
import "../styles/PeopleList.css";

class PoepleList extends Component {
  constructor() {
    super();

    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    const url = "https://mock-io.herokuapp.com/users";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          peoples: data.map(el => {
            return {
              firstName: el.firstName,
              lastName: el.lastName,
              profileImage: el.profileImage
            };
          })
        });
        this.props.getData(data);
      });
  }

  render() {
    return (
      <div className="people-list">
        <ul>
          {this.state.peoples.map((el, index) => (
            <li key={index} style={{display: "flex"}} onClick={this.props.viewProfile.bind(this, index)}>
              <figure className="people-img"><img src={el.profileImage} alt='img'/></figure> 
              <span className="people-name">{el.firstName} {el.lastName}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PoepleList;
