import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../../assets/colors';
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ padding: 20, paddingTop: 35, height: 100, marginTop: 25, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 23, color: '#fff', fontWeight: '700' }}>Olá, Mathias</Text>
            <View style={{ flexDirection: 'row' }}>

                <Ionicons name="eye-off-outline" size={20} color="#fff" style={{ backgroundColor: colors.button, height: 50, width: 50, padding: 15, borderRadius: 25, marginHorizontal: 10 }} />
                <Feather name="settings" size={20} color="#fff" style={{ backgroundColor: colors.button, height: 50, width: 50, padding: 15, borderRadius: 25, }} />

            </View>
        </View>
    )
}

export default Header;