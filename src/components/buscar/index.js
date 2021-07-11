import React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MyComponent = () => (
    <Appbar.Header>
       <Appbar.Content />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default MyComponent;