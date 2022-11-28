import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../colors';
import IconCustom from '../icon';

interface SearchComponentProps {}

const SearchComponent = (props: SearchComponentProps) => {
    return (
        <View style={styles.inputBox}>
            <IconCustom type={'Feather'} name={'search'} size={20} color={COLORS.main} />
            <TextInput style={styles.input} placeholder={'Tìm kiếm thành viên...'} />
            <IconCustom type={'Feather'} name={'mic'} size={20} color={COLORS.main} />
        </View>
    );
};

export default SearchComponent;

const styles = StyleSheet.create({
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: COLORS.silver,
        borderWidth: 1,
        borderRadius: 40,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    input: {
        flex: 1,
        height: '100%',
    },
});
