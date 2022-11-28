import * as React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InputBaseProps {
    value: string;
    onChange: any;
    placeholder?: string;
}

const InputBase = (props: InputBaseProps) => {
    const { onChange } = props;
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={(text) => {
                    props.onChange(text);
                }}
                style={styles.input}
            />
            <TouchableOpacity
                style={[styles.iconButton, props.value.length <= 0 && styles.hidden]}
                onPress={() => {
                    props.onChange('');
                }}
            >
                <Ionicons name="close" size={25} />
            </TouchableOpacity>
        </View>
    );
};

export default InputBase;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        width: '100%',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: 'silver',
    },
    input: {
        height: '100%',
        flex: 1,
    },
    iconButton: {
        width: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hidden: {
        display: 'none',
    },
});
