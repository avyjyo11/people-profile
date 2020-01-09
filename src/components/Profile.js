import React, { Component } from "react";
import "../styles/Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      backPressed: false
    }
    this.timeout = 500;
  }
  pressingBack = () => {
    this.setState({
      backPressed: true
    });
    setTimeout(this.props.backPressed, this.timeout);
  };

  getStyle = () => {
    if(!this.state.backPressed) {
      return {
        height: window.innerHeight,
        animationName: "example1",
        animationDuration: this.timeout + "ms"
      }
    } else {
      return {
        height: window.innerHeight,
        animationName: "example2",
        animationDuration: this.timeout + "ms"
      }
    }
  };

  render() {
    const data = this.props.data;
    return (
      <div className="profile-div" style={this.getStyle()} >
        <div className="profile-header">
          <div>
            <button onClick={this.pressingBack}>{"<"}</button>
          </div>
          <h2>View Profile</h2>
        </div>
        <div className="profile-img">
          <img src={data.profileImage} alt="profile-img" />
          <br />
          {data.firstName} {data.lastName}
        </div>
        <div className="profile-data">
          <div className="profile-keys">
            <div>First Name</div>
            <div>Last Name</div>
            <div>Email</div>
            <div>City</div>
            <div>State</div>
            <div>Country</div>
            <div>Zip Code</div>
            <div>Country Code</div>
            <div>Street Address</div>
          </div>
          <div className="profile-values">
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
            <div>{data.email}</div>
            <div>{data.address.city}</div>
            <div>{data.address.state}</div>
            <div>{data.address.country}</div>
            <div>{data.address.zipCode}</div>
            <div>{data.address.countryCode}</div>
            <div>{data.address.streetAddress}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
