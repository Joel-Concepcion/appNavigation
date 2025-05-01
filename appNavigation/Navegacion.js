import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';


//iconos
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

//archivos
import Settings from "./Screens/Settings";
import Home from "./Screens/Home";
import Users from "./Screens/Users";

import DatailsHome from './Screens/DatailsHome';
import AnotherDatailsHome from './Screens/AnotherDatailsHome';


//config
const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator initialRouteName="Users">
      <Drawer.Screen name="Users" component={Users} />
      <Drawer.Screen name="DatailsHome" component={DatailsHome} />
      <Drawer.Screen name="AnotherDatailsHome" component={AnotherDatailsHome} />
    </Drawer.Navigator>
  );
}

// Configuración de navegación en stack
const DetailsHomeNavigator = createStackNavigator();

function StackDetailHome() {
    return (
        <DetailsHomeNavigator.Navigator 
        initialRouteName="Home">

            <DetailsHomeNavigator.Screen
             name="Home" 
             component={Home}>
            </DetailsHomeNavigator.Screen> 

            <DetailsHomeNavigator.Screen 
            name="DatailsHome" 
            component={DatailsHome}>
            </DetailsHomeNavigator.Screen>

            <DetailsHomeNavigator.Screen 
            name="AnotherDatailsHome" 
            component={AnotherDatailsHome}>
            </DetailsHomeNavigator.Screen>
            
        </DetailsHomeNavigator.Navigator>
    );
}

//botones de navegación
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen name='Home' component={StackDetailHome} 
                options={{
                    tabBarLabel: 'HomeScreen',
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name="home" size={24} color="black" />
                    )
                }}
            />

            <Tab.Screen name='Settings' component={Settings}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name="settings-outline" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen 
            /*name='Users' component={Users}*/ 
            name='Drawer'
            component={DrawerNavigate}
                options={{
                    tabBarIcon: ({color, size})=>(
                        <FontAwesome5 name="users" size={24} color="black" />
                    )
                }}
            />

        </Tab.Navigator>
    )
};

export default function Navegacion(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}