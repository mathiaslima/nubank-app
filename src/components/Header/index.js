import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/colors';
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ padding: 20, paddingTop: 35, height: 100, marginTop: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ ...styles.longTitle, color: '#fff', }}>Olá, Mathias</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: colors.button, height: 50, width: 50, borderRadius: 25, marginHorizontal: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons name="eye-off-outline" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: colors.button, height: 50, width: 50, borderRadius: 25, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="settings" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 12,
        fontFamily: 'Inter_200ExtraLight',
        color: colors.gray,
        marginBottom: 5
    },
    longTitle: {
        fontSize: 23,
        fontFamily: 'Inter_500Medium',
    },
    title: {
        fontSize: 14,
        fontFamily: 'Inter_200ExtraLight',
        color: colors.subText,
    },
    textButton: {
        fontSize: 12,
        color: colors.primary,
        fontFamily: 'Inter_500Medium',
    },
    logoPix: {
        resizeMode: 'cover',
        height: 30,
        width: 30,
    }
});