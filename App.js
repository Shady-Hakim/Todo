import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
import AllList from './src/screens/allList/allList';

function App() {
    return (
        <Provider store={store}>
            <StatusBar />
            <AllList />
        </Provider>
    );
}
export default App;
