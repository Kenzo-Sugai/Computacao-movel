import React from 'react'
import {View, TextInput, Text, Button} from 'react-native'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      resultado: ``
    }
    this.n1 = 0
    this.n2 = 0
  }

  soma(){
    this.setState({resultado: this.n1+this.n2})
  }

  render(){
    return(
      <View>
        <Text>Número 1:</Text>

        <TextInput onChangeText={
          (texto) => {this.n1 = parseInt(texto)}  
        }></TextInput>

        <Text>Número 2:</Text>
        
        
        <TextInput onChangeText={
          (texto) => {this.n2 = parseInt(texto)}  
        }></TextInput>

        <Button title="Soma" onPress={
          ()=>this.soma()
        }></Button>

        <Text>{this.state.resultado}</Text>
      </View>
    )
  }
}

export default App;
