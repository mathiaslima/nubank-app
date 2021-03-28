import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../../assets/colors';


const Card = (props) => {

  
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', marginVertical: 10, borderRadius: 4, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                {props.icon()}
                <Text style={{ fontFamily: 'Inter_200ExtraLight', fontSize: !!props.colorText ? 20 : 16, fontWeight: '100', color: !!props.colorText ? colors.primary : colors.gray, marginLeft: 20 }}>
                    {props.title}
                </Text>
            </View>
            <View>
                {props.content()}
            </View>
        </View>
    )
}

export default Card;