import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface FooterProps {
    
}

const Footer:React.FC<FooterProps> = ({}) => {
    
    return (
        <View style={style.footer}>
            <Text>Footer</Text>
        </View>
    )
}

const style = StyleSheet.create({
    footer: {
        backgroundColor: 'red',
        width: "100%",
        height: 60,
    }
})

export default Footer;