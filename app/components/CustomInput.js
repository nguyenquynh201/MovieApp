import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.bgTextBox,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 8,
    },
    input: {
        color: Colors.white,
        placeholderTextColor: Colors.colorTextBox
    },
});


export default CustomInput