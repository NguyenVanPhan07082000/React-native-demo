import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SocketCustom from 'src/component/common/socket';
import AppNavigation from 'src/navigations';
// import LoginComponent from 'src/screen/login';
import { store } from '../redux/index';

export const Root = ({}: any) => {
    return (
        <Provider store={store}>
            <StatusBar hidden />
            <SocketCustom />
            <AppNavigation />
        </Provider>
    );
};
