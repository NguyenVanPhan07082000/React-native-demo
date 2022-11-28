import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../colors';
interface CustomCheckboxProps {
    checked: boolean;
    onChange: any;
    label?: string;
}
const CustomCheckbox = (props: CustomCheckboxProps) => {
    const { checked, onChange, label } = props;
    console.log('checked:', checked);
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    onChange(!checked);
                }}
                style={styles.checkbox}
            >
                {!checked ? (
                    <MaterialIcons name="check-box-outline-blank" size={20} color={COLORS.main} />
                ) : (
                    <MaterialIcons name="check-box" size={20} color={COLORS.main} />
                )}
            </TouchableOpacity>
            <Text style={styles.label} numberOfLines={2}>
                {label && label}
            </Text>
        </View>
    );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        // borderRadius: 5,
        // borderColor: '#0070C0',
        // backgroundColor: '#fff',
        // borderWidth: 1,
    },
    checkboxActive: {
        width: 19,
        height: 19,
        backgroundColor: '#0070C0',
        borderRadius: 5,
    },
    label: {
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 16,
    },
});
