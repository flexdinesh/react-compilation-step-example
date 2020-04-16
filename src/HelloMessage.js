import React from "react";

class HelloMessage extends React.Component {
  render() {
    return <Title>Hello {this.props.name}</Title>;
  }
}

export default HelloMessage;
