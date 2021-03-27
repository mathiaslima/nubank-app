import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { AntDesign, FontAwesome5, FontAwesome, Feather } from '@expo/vector-icons';
import colors from '../../../assets/colors';

const DATA = [
    {
        title: 'Cartão de Crédito',
        icon: () => <AntDesign name="creditcard" size={25} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 12, color: colors.gray, fontWeight: '300', marginBottom: 5 }}>Fatura atual</Text>
                    <Text style={{ fontSize: 23, color: colors.blue, fontWeight: '300' }}>R$ 495,28</Text>
                    <Text style={{ fontSize: 12, color: colors.subText, fontWeight: '300' }}>Limite disponível <Text style={{ color: colors.green, fontWeight: 'bold' }}>R$ 895,95</Text></Text>
                </View>
            )
        }
    },
    {
        title: 'Conta',
        icon: () => <FontAwesome5 name="coins" size={25} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 12, color: colors.gray, fontWeight: '300', marginBottom: 5 }}>Saldo disponível</Text>
                    <Text style={{ fontSize: 23, color: colors.subText, fontWeight: '300' }}>R$ 1.000,28</Text>
                </View>
            )
        }
    },
    {
        title: 'Empréstimo',
        icon: () => <FontAwesome5 name="donate" size={25} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16, color: colors.gray, fontWeight: '300' }}>Valor disponível de até</Text>
                    <Text style={{ fontSize: 16, color: colors.subText, fontWeight: '300' }}>R$ 9.495,28</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: colors.primary, fontWeight: '700' }}>SIMULAR EMPRÉSTIMO</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
    },
    {
        title: 'Seguro de vida',
        icon: () => <FontAwesome name="umbrella" size={25} color={colors.primary} style={{ backgroundColor: colors.shadow, padding: 10, borderRadius: 30, }} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16, color: colors.gray, fontWeight: '300' }}>Conheça Nubank Vida: um seguro simples e que cabe no bolso.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: colors.primary, fontWeight: '700' }}>CONHECER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        },
        colorText: true
    },
    {
        title: 'Rewards',
        icon: () => <Feather name="gift" size={25} color={colors.primary} style={{ backgroundColor: colors.shadow, padding: 10, borderRadius: 30, }} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16, color: colors.gray, fontWeight: '300' }}>Apague compras com pontos que nunca expiram.</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: colors.primary, fontWeight: '700' }}>CONHECER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        },
        colorText: true
    },
    {
        title: 'Google Pay',
        icon: () => <AntDesign name="creditcard" size={25} color={colors.gray} />,
        content: () => {
            return (
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16, color: colors.gray, fontWeight: '300' }}>use o Google Pay com seus cartões Nubank</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 4, borderColor: colors.primary, padding: 12, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, color: colors.primary, fontWeight: '700' }}>REGISTRAR MEU CARTÃO</Text>
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
        icon: () => null,
    },
    {
        title: 'Pagar',
        icon: () => null,
    },
    {
        title: 'Indicar amigos',
        icon: () => null,
    },
    {
        title: 'Transferir',
        icon: () => null,
    },
    {
        title: 'Depositar',
        icon: () => null,
    },
    {
        title: 'Empréstimos',
        icon: () => null,
    },
    {
        title: 'Cartão virtual',
        icon: () => null,
    },
    {
        title: 'Recarga de celular',
        icon: () => null,
    },
    {
        title: 'Ajustar limite',
        icon: () => null,
    },
    {
        title: 'Bloquear cartão',
        icon: () => null,
    },
    {
        title: 'Cobrar',
        icon: () => null,
    },
    {
        title: 'Doação',
        icon: () => null,
    },
    {
        title: 'Me ajuda',
        icon: () => null,
    },
]

const Home = () => {

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ padding: 20, paddingTop: 5 }}>
                {DATA.map(item => <Card title={item.title} icon={item.icon} colorText={item.colorText} content={item.content} />)}
            </ScrollView>
            <ScrollView horizontal style={{ height: 165, paddingHorizontal: 20, paddingBottom: 20, marginTop: 20 }}>
                {DATA_TWO.map(item => {
                    return (
                        <TouchableOpacity style={{ width: 85, backgroundColor: colors.button, flexDirection: 'column', marginRight: 10, borderRadius: 5, elevation: 1, padding: 10, justifyContent: 'space-between' }}>
                            <Text style={{ color: "#fff" }}>@</Text>
                            <Text style={{ color: "#fff", fontSize: 12 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Home;