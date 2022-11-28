import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../colors';
interface RadioCustomProps {
    onChange: any;
    value: any;
    checkList: any;
    label?: string;
}
const RadioCustom = (props: RadioCustomProps) => {
    const { onChange, value, checkList, label } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.option]}
            onPress={() => {
                onChange(value);
            }}
        >
            <View style={styles.iconBox}>
                <View
                    style={checkList.indexOf(value) !== -1 ? styles.active : styles.NonActive}
                ></View>
            </View>
            <Text style={styles.textTitle}>{label && label}</Text>
        </TouchableOpacity>
    );
};

export default RadioCustom;

const styles = StyleSheet.create({
    option: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    active: {
        width: 7,
        height: 7,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    NonActive: {
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    textTitle: {
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 15,
    },
    iconBox: {
        width: 17,
        height: 17,
        borderRadius: 17,
        marginEnd: 20,
        backgroundColor: COLORS.main,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: COLORS.main,
    },
});
