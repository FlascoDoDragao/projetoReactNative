import React from 'react';
import { Appbar } from 'react-native-paper';
import Input from '../input/index';
import Styles from './style';


const MyComponent = () => (
    <Appbar.Header style={Styles.container}>
        <Appbar.Content />
        <Input></Input>
        <Appbar.Action icon="magnify" onPress={() => { }} />

    </Appbar.Header>
);

export default MyComponent;