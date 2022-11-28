import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { Root } from './src/container';
import { store } from './src/redux';
export default function App() {
    AppRegistry.registerComponent('oryzaerp', () => App);
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    );
}
