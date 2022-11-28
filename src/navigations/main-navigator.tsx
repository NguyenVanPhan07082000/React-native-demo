import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { APP_MAIN_HOME, MAIN, LOGIN, REGISTER } from 'src/contant/navigation';
import MainComponent from 'src/screen/main';
import LoginComponent from 'src/screen/login';
import RegisterComponent from 'src/screen/register';

interface MainNavigatorProps {}

const MainNavigator = (props: MainNavigatorProps) => {
    const Screen = createNativeStackNavigator();

    return (
        <Screen.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={LOGIN}
        >
            <Screen.Screen name={LOGIN} component={LoginComponent} />
            <Screen.Screen name={MAIN} component={MainComponent} />
            <Screen.Screen name={REGISTER} component={RegisterComponent} />
        </Screen.Navigator>
    );
};

export default MainNavigator;

const styles = StyleSheet.create({
    container: {},
});
