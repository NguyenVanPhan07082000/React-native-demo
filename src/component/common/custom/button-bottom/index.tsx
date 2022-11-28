import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../colors';

interface ButtonBottomProps {
    onClick: any;
    buttonName?: string;
}

const ButtonBottom = (props: ButtonBottomProps) => {
    const { onClick } = props;
    return (
        <TouchableOpacity onPress={onClick} activeOpacity={0.7} style={styles.buttonAbsolute}>
            <Feather name={props.buttonName ? props.buttonName : 'save'} size={20} color={'#fff'} />
        </TouchableOpacity>
    );
};

export default ButtonBottom;

const styles = StyleSheet.create({
    buttonAbsolute: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 40,
        height: 40,
        backgroundColor: COLORS.main,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
