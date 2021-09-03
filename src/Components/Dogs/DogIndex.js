import React, { Component } from "react"


class Dog extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
    };
  }

  fetchImg = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          this.setState({ img: data.message });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.fetchImg();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.fetchImg()}>Click!</button>
        <div>
          <img alt="dog" src={this.state.img} />
        </div>
      </div>
    );
  }
}

export default Dog;