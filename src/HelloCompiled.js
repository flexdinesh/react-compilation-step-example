import React from "react";
import { styled } from "@compiled/css-in-js";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class HelloMessage extends React.Component {
  render() {
    return <Title>Hello {this.props.name}</Title>;
  }
}

export default HelloMessage;
