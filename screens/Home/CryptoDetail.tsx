import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    SafeAreaViewBase
} from 'react-native';

import { HeaderBar } from '../../components'
import { dummyData, COLORS, SIZES, FONTS, icons } from '../../constants'

const CryptoDetail = ({ navigation }:{ navigation:any }) => {
    return (
        <SafeAreaView
            style={{
                flex:1,
                backgroundColor: COLORS.lightGray1
            }}
        >
            <HeaderBar 
                right={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;