import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MAIN, REGISTER } from 'src/contant';
import { authApi } from 'src/api';
import { LoginPayload } from 'src/model';

const LoginComponent = ({ navigation }: any) => {
    const [click, setClick] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (email && password) {
            const payLoad: LoginPayload = {
                userName: email,
                password: password,
            };
            authApi
                .login(payLoad)
                .then(() => {
                    navigation.navigate(MAIN, { screen: 'Home' });
                    setEmail('');
                    setPassword('');
                })
                .catch((err: any) => {
                    console.log(err.response?.data);
                    Alert.alert(
                        'Cảnh báo',
                        err.response?.data?.Message
                            ? err.response?.data?.Message
                            : err.response?.data?.message
                            ? err.response?.data?.message
                            : 'Lỗi đăng nhập',
                        [
                            {
                                text: 'Hủy',
                                style: 'cancel',
                            },
                        ]
                    );
                });
        } else {
            Alert.alert('Cảnh báo', 'Vui lòng nhập tài khoản và mật khẩu', [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
            ]);
        }
    };
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/girl.png')} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
            </View>

            <TouchableOpacity>
                <Text
                    style={styles.forgot_button}
                    onPress={() => navigation.navigate(REGISTER, { screen: 'register' })}
                >
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginBottom: 40,
        width: 200,
        height: 200,
        borderRadius: 100,
    },

    inputView: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,

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

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1493',
    },

    loginText: {
        fontSize: 16,
        fontWeight: '700',
    },
});
