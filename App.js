import React, { Component } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  height: 25rem;
  background-color: #FA8072 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  font-size: 2rem;
  padding: 5rem;
  margin: 3rem;
`

const Result = styled.h2`
font-size: 2rem;
color: #3A5FCD;
`
const Input = styled.input`
height: 5rem;
width: 5rem;
`
const Button = styled.button`
margin: 0.5rem;
`


export class App extends Component {
  state = {
    n1: "null",
    n2: "null",
    res: "0"
  };



  handleChange2 = (event) => {
    this.setState({
      n2: event.target.value
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: event.target.value
    });
  };

  
  minus = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 - num2
    });
  };

  multiply = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 * num2
    });
  };

  divide = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: num1 / num2
    });
  };

  add = () => {
    let { num1, num2 } = this.state;
    this.setState({
      result: Number(num1) + Number(num2)
    });
  };

 clear = ()=>{
    let {num1, num2} = this.state
    if(num1 && num2 !== ""){
      this.setState({
        result: null,
        n1:" ",
        n2:" "
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }

  render() {
    return (
      <Container>
        <h1>Calc App</h1>
        <Result>{this.state.result}</Result>
        <Input onChange={this.handleChange1} type="number" />
        <Input onChange={this.handleChange2} type="number" />
        <Button  onClick={this.divide}>/</Button>
        <Button onClick={this.multiply}>*</Button>
        <Button onClick={this.minus}>-</Button>
        <Button onClick={this.add}>+</Button>
        <Button onClick={this.clear}>LIMPAR</Button>
      </Container>
    );
  }
}


export default App;
