import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { LOGIN } from 'src/contant';

const Stack = createBottomTabNavigator();

const HomeScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="click here"
                onPress={() => navigation.navigate(LOGIN, { screen: 'Ho' })}
            ></Button>
        </View>
    );
};
const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
};
const SettingScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
};
const NotificationScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notification!</Text>
        </View>
    );
};

const MainComponent = () => {
    const [click, setClick] = useState(true);
    const onPress = () => setClick(!click);
    return (
        // <NavigationContainer>
        <Stack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'setting';
                    } else if (route.name === 'Profile') {
                        iconName = 'profile';
                    } else {
                        iconName = 'notification';
                    }

                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default MainComponent;
