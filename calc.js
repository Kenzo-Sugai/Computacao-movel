import React from 'react'
import {View, TextInput, Text, Button, Pressable, StyleSheet} from 'react-native'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      resultado: ``
    }
    this.n1 = 0
    this.n2 = 0
    this.getoper = false
    this.operator = ''
  }

  clear(){
    this.getoper = false
    this.n1 = 0
    this.n2 = 0
    this.setState({resultado: ``})
  }

  result(){
    this.n2 = parseInt(this.state.resultado)  
      switch(this.operator){
        case '+': 
          this.setState({resultado: this.n1+this.n2})
          break
        case '-': 
          this.setState({resultado: this.n1-this.n2})
          break
        case '*': 
          this.setState({resultado: this.n1*this.n2})
          break
        case '/': 
          this.setState({resultado: this.n1/this.n2})
          break
      }
  }

  addChar(n){
    this.setState({
        resultado: this.state.resultado + n
      }
    )
  }

  addCharOper(n){
    if(!this.getoper){
      this.setState({resultado: ''})
      this.operator = n
      this.getoper = true
      this.n1 = parseInt(this.state.resultado)
    }
  }

  render(){
    return(
      <View style ={
        {
          backgroundColor: 'black',
          height: '100%'
        }
      }>
        <Text style = {
          {
            height: 50,
            borderColor: 'white',
            color: 'white',
            fontSize: 40,
            borderWidth: 1
          }
        }>{this.state.resultado}</Text>
        <Button title='0' onPress={()=>this.addChar('0')}></Button>
        <Button title='1' onPress={()=>this.addChar('1')}></Button>
        <Button title='2' onPress={()=>this.addChar('2')}></Button>
        <Button title='3' onPress={()=>this.addChar('3')}></Button>
        <Button title='4' onPress={()=>this.addChar('4')}></Button>
        <Button title='5' onPress={()=>this.addChar('5')}></Button>
        <Button title='6' onPress={()=>this.addChar('6')}></Button>
        <Button title='7' onPress={()=>this.addChar('7')}></Button>
        <Button title='8' onPress={()=>this.addChar('8')}></Button>
        <Button title='9' onPress={()=>this.addChar('9')}></Button>
        <Text>{`\n`}</Text>
        <Button title='+' onPress={()=>this.addCharOper('+')}></Button>
        <Button title='-' onPress={()=>this.addCharOper('-')}></Button>
        <Button title='*' onPress={()=>this.addCharOper('*')}></Button>
        <Button title='/' onPress={()=>this.addCharOper('/')}></Button>
        <Text>{`\n`}</Text>
        <Button title='Resultado' onPress={()=>this.result()}></Button>
        <Text>{`\n`}</Text>
        <Button title='Clear' onPress={()=>this.clear()}></Button>
        </View>
    )
  }
}

export default App;
