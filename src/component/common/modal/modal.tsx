import React from 'react';
import {
    Dimensions,
    KeyboardAvoidingView,
    Modal,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS } from '../colors';
interface ModalCustomProps {
    children: any;
    open: any;
    onChange: any;
}
const ModalCustom = (props: ModalCustomProps) => {
    const { children, open, onChange } = props;
    const { width, height } = Dimensions.get('window');
    const hp = (hp: number) => (hp / 100) * height;
    const wp = (wp: number) => (wp / 100) * width;
    return (
        <SafeAreaView>
            {/* <StatusBar animated={true} hidden={true} /> */}
            <Modal
                animationType="none"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    onChange(!open);
                }}
            >
                <KeyboardAvoidingView>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            width: wp(100),
                            height: hp(100),
                            backgroundColor: COLORS.backdrop,
                        }}
                        onPress={() => {
                            onChange(false);
                        }}
                    />
                    <View
                        style={{
                            width: wp(100),
                            height: hp(100),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {children}
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </SafeAreaView>
    );
};

export default ModalCustom;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    iconSearch: {
        position: 'absolute',
        width: 40,
        height: 40,

        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 40,
        paddingHorizontal: 40,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: COLORS.silver,
    },
    iconAdd: {
        width: 40,
        height: 40,
        marginStart: 10,
        borderColor: COLORS.main,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //
    wrapper: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
});
