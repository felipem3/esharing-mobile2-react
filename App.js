import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import LoginScreen from './src/pages/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './src/default/Header';
import { Container } from './src/default/Header/styles';
import { LinearGradient } from 'expo-linear-gradient';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App () {
  return (
    // <NavigationContainer>
    //    <Stack.Navigator>
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>    
    // </NavigationContainer>
    <NavigationContainer>
      
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}
function Login() {
  return (
    <LoginScreen></LoginScreen>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
const DATA = [
  {
    id: 1,
    title: 'Coleta 01',
  },
  {
    id: 2,
    title: 'Coleta 02',
  },
  {
    id: 3,
    title: 'Coleta 03',
  },
];
function Item({ title }) {
  return (
      <LinearGradient
        colors={['#CCC', '#FCFCFC']}
        style={{flex: 1},styles.item}
      >
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btnIniciar}>
        <Text>Iniciar</Text>
      </TouchableOpacity>
      </LinearGradient>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Header></Header>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
    </View>
  );
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    height: 150,
  },
  title:{},
  btnIniciar: {
    backgroundColor: '#ffa34d',
    height: 100,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 38,
    width: '60%',
  }
});
