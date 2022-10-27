import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Principal, Detalhes, Historia} from './components/Todos'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Navegacao = createBottomTabNavigator();

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Navegacao.Navigator>
          <Navegacao.Screen name="Principal" Component={Principal} 
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home"
            color={color} size={32}/>)
          
          }}/>
          <Navegacao.Screen name="Detalhes" Component={Detalhes} 
          options={{
            tabBarLabel: "Datalhes",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="details"
            color={color} size={32}/>)
          }}
          />
          <Navegacao.Screen name="Historia" Component={Historia} 
          options={{
            tabBarLabel: "Historia",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="history"
            color={color} size={32}/>)
          }}
          />
        </Navegacao.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
