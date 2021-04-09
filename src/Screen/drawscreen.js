import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { IC_OVER } from "../assets";

// ko dùng hàng có sẵn nhé, mình ko custom được

const Container = styled.View`
  flex: 1;
  background-color: #193654;
`;
const Sheader = styled.View`
  height: 100px;
  flex-direction: row;
`;
const Sboder = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-top: 20px;
`;

// Crtl + D để duplicate code những phần mình tô màu hoặc dòng
// giờ bấm Alt Shift F để format lại code đi

export function DrawScreen(props) {
  const navigation = useNavigation();
  return (
    <Container>
      <Sheader>

      </Sheader>

    </Container>
  );
}
