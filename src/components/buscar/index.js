import React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../input/index';
import Styles from './style';


const MyComponent = () => (
    <Appbar.Header style={Styles.container}>
       <Appbar.Content />
        <Input></Input>
        <Appbar.Action icon="magnify" onPress={() => {}} />
 
    </Appbar.Header>
);

export default MyComponent;