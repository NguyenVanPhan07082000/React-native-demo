import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { APP_MAIN_HOME, LOGIN } from 'src/contant/navigation';
import MainNavigator from './main-navigator';
import LoginComponent from 'src/screen/login';

interface AppNavigationProps {}

const AppNavigation = (props: AppNavigationProps) => {
    const Screen = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Screen.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={APP_MAIN_HOME}
            >
                {/* <Screen.Screen name={LOGIN} component={LoginComponent} /> */}
                <Screen.Screen name={APP_MAIN_HOME} component={MainNavigator} />
            </Screen.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
