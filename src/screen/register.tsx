import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { LOGIN, MAIN } from 'src/contant';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterComponent = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [useName, setUseName] = useState('');
    const [phone, setPhone] = useState('');
    const handleSignUp = () => {
        if (email && password && useName && phone) {
            Alert.alert('Thông báo', 'Đăng ký thành công', [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
            ]);
        } else {
            Alert.alert('Cảnh báo', 'Vui lòng nhập đủ thông tin', [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
            ]);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username."
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setUseName(val)}
                    value={useName}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    secureTextEntry={true}
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setEmail(val)}
                    value={email}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone Number"
                    placeholderTextColor="#003f5c"
                    onChangeText={(val) => setPhone(val)}
                    value={phone}
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity>
                <Text
                    style={styles.forgot_button}
                    onPress={() => navigation.navigate(LOGIN, { screen: 'login' })}
                >
                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#5851DB', '#C13584', '#E1306C']}
                    style={styles.instagramButton}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default RegisterComponent;
const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        width: '95%',
        outlineStyle: 'none',
    },
    inputView: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center',
    },
    forgot_button: {
        height: 30,
        marginBottom: 10,
    },
    instagramButton: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 0,
    },
});
