import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { AntDesign, FontAwesome5, FontAwesome, Feather, MaterialIcons, MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';
import colors from '../../../assets/colors';
import logoPix from '../../../assets/logo-pix-icone.png'

const DATA = [
    {
        title: 'Cartão de Crédito',
        icon: () => <AntDesign name="creditcard" size={22} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTitle}>Fatura atual</Text>
                    <Text style={{ ...styles.longTitle, color: colors.blue, }}>R$ 510,28</Text>
                    <Text style={{ ...styles.subTitle, color: colors.subText, }}>Limite disponível <Text style={{ color: colors.green, fontWeight: 'bold', fontFamily: 'Inter_500Medium' }}>R$ 895,95</Text></Text>
                </View>
            )
        }
    },
    {
        title: 'Conta',
        icon: () => <MaterialIcons name="account-balance" size={22} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.subTitle}>Saldo disponível</Text>
                    <Text style={{ ...styles.longTitle, color: colors.subText, }}>R$ 1.000,28</Text>
                </View>
            )
        }
    },
    {
        title: 'Empréstimo',
        icon: () => <FontAwesome5 name="hand-holding-usd" size={22} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...styles.title, }}>Valor disponível de até</Text>
                    <Text style={{ ...styles.title, fontFamily: 'Inter_500Medium' }}>R$ 9.495,28</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.textButton}>SIMULAR EMPRÉSTIMO</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
    },
    {
        title: 'Seguro de vida',
        icon: () => <FontAwesome name="umbrella" size={22} color={colors.primary} style={{ backgroundColor: colors.shadow, padding: 10, borderRadius: 30, }} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...styles.title, }}>Conheça Nubank Vida: um seguro simples e que cabe no bolso.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.textButton}>CONHECER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        },
        colorText: true
    },
    {
        title: 'Rewards',
        icon: () => <Feather name="gift" size={22} color={colors.primary} style={{ backgroundColor: colors.shadow, padding: 10, borderRadius: 30, }} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...styles.title, }}>Apague compras com pontos que nunca expiram.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.textButton}>CONHECER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        },
        colorText: true
    },
    {
        title: 'Google Pay',
        icon: () => <AntDesign name="creditcard" size={22} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...styles.title, }}>use o Google Pay com seus cartões Nubank</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.textButton}>REGISTRAR MEU CARTÃO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    },
]

const DATA_TWO = [
    {
        title: 'Pix',
        icon: () => <View><Image source={logoPix} style={styles.logoPix} /></View>,
    },
    {
        title: 'Pagar',
        icon: () => <MaterialCommunityIcons name="barcode" size={30} color="#fff" />,
    },
    {
        title: 'Indicar amigos',
        icon: () => <AntDesign name="adduser" size={30} color="#fff" />,
    },
    {
        title: 'Transferir',
        icon: () => <Ionicons name="ios-arrow-up-circle-outline" size={30} color="#fff" />,
    },
    {
        title: 'Depositar',
        icon: () => <Ionicons name="md-arrow-down-circle-outline" size={30} color="#fff" />,
    },
    {
        title: 'Empréstimos',
        icon: () => <FontAwesome5 name="hand-holding-usd" size={30} color={"#fff"} />,
    },
    {
        title: 'Cartão virtual',
        icon: () => <MaterialCommunityIcons name="credit-card-clock-outline" size={30} color="#fff" />,
    },
    {
        title: 'Recarga de celular',
        icon: () => <Ionicons name="md-phone-portrait-outline" size={30} color="#fff" />,
    },
    {
        title: 'Ajustar limite',
        icon: () => <Octicons name="settings" size={30} color="#fff" />,
    },
    {
        title: 'Bloquear cartão',
        icon: () => <Ionicons name="lock-closed-outline" size={30} color="#fff" />,
    },
    {
        title: 'Cobrar',
        icon: () => <MaterialCommunityIcons name="currency-usd-circle-outline" size={30} color="#fff" />,
    },
    {
        title: 'Doação',
        icon: () => <FontAwesome5 name="hand-holding-usd" size={30} color={"#fff"} />,
    },
    {
        title: 'Me ajuda',
        icon: () => <Ionicons name="help-circle-outline" size={30} color="#fff" />,
    },
]

const Home = () => {

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, paddingTop: 5 }}>
                {DATA.map(item => <Card title={item.title} icon={item.icon} colorText={item.colorText} content={item.content} />)}
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 165, paddingHorizontal: 20, paddingBottom: 20, marginTop: 20, }}>
                {DATA_TWO.map((item, index) => {
                    return (
                        <TouchableOpacity style={{ width: 85, backgroundColor: colors.button, flexDirection: 'column', marginRight: 10, borderRadius: 5, elevation: 1, padding: 10, justifyContent: 'space-between' }}>
                            <Text style={{ color: "#fff" }}>{item.icon()}</Text>
                            <Text style={{ ...styles.subTitle, color: "#fff", }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Home;

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