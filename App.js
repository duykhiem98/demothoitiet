import * as React from 'react';
import { Button, Text, TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {DrawScreen} from './src/Screen/drawscreen'
import { memo } from "react";
import Ngayscreen from './src/Screen/Ngay'
import { IC_BUTTON } from "./src/assets";


// gõ Control + Space để nó gợi ý import cho mình
// hoặc Alt + Enter

const DrawerStack = createDrawerNavigator();
const RootStack = createStackNavigator();
const DrawerStackComponent = memo(function DrawerStackComponent() {
  return (
    <DrawerStack.Navigator drawerContent={() =><DrawScreen />}>
      <DrawerStack.Screen name="Ngayscreen" component={Ngayscreen} />
    </DrawerStack.Navigator>
  )
})
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={"none"}>
        <RootStack.Screen name={'Root'} component={DrawerStackComponent} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

