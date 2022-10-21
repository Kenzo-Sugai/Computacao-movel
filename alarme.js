import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

class App extends react.Component {
  constructor(props){
    super(props);

    this.state = {
      time: new Date()
    }
   
  }

  tick () {
    this.setState({time : new Date()});
  }

  componentDidMount(){
    this.ID = setInterval( () => {this.tick(), 1000});
  }

  render(){
    return (
    <View style={styles.main}>
     
      <Text style={styles.Date_Style}>{this.state.time.toLocaleTimeString('pt-BR')}</Text>
      <Text>Hour:</Text>
      <TextInput style={styles.Input_Style}></TextInput>
      <Text>Minute:</Text>
      <TextInput style={styles.Input_Style}></TextInput>
      <Button style={style.button_Style}>Submit</Button>
      <StatusBar style="auto" />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Date_Style: {
    color: '#38A8D2',
    fontSize: 50,
  },
  Input_Style: {
    borderColor: 'black',
    borderWidth: 2,
  },
  button_Style: {
    color: 'blue',
  },
});

export default App;
