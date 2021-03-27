import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import colors from '../assets/colors';
import Home from "./screens/home";

const Main = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
            <Home />
        </SafeAreaView>
    )
}

export default Main;