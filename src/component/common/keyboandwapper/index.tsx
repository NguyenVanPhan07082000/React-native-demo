import {
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React from 'react';

const KeyBroadWarper = ({ children }: any) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyBroadWarper;

const styles = StyleSheet.create({});
