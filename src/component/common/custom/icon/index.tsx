import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS } from '../../colors';
interface IconCustomProps {
    type:
        | 'Entypo'
        | 'MaterialIcons'
        | 'Ionicons'
        | 'FontAwesome'
        | 'Octicons'
        | 'AntDesign'
        | 'EvilIcons'
        | 'Feather'
        | 'FontAwesome5'
        | 'Fontisto'
        | 'Foundation'
        | 'MaterialCommunityIcons'
        | 'Zocial'
        | 'SimpleLineIcons';
    name: string;
    color?: string;
    size: number;
}

const IconCustom = (props: IconCustomProps) => {
    const { type, name, size } = props;
    const color = props.color ? props.color : COLORS.main;
    switch (type) {
        case 'Entypo':
            return <Entypo name={name} color={color} size={size} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} color={color} size={size} />;
        case 'Ionicons':
            return <Ionicons name={name} color={color} size={size} />;
        case 'FontAwesome':
            return <FontAwesome name={name} color={color} size={size} />;
        case 'Octicons':
            return <Octicons name={name} color={color} size={size} />;
        case 'AntDesign':
            return <AntDesign name={name} color={color} size={size} />;
        case 'EvilIcons':
            return <EvilIcons name={name} color={color} size={size} />;
        case 'Feather':
            return <Feather name={name} color={color} size={size} />;
        case 'FontAwesome5':
            return <FontAwesome5 name={name} color={color} size={size} />;
        case 'Fontisto':
            return <Fontisto name={name} color={color} size={size} />;
        case 'Foundation':
            return <Foundation name={name} color={color} size={size} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} color={color} size={size} />;
        case 'Zocial':
            return <Zocial name={name} color={color} size={size} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} color={color} size={size} />;
        case 'Foundation':
            return <Foundation name={name} color={color} size={size} />;
        default:
            return <FontAwesome name={name} color={color} size={size} />;
    }
};

export default IconCustom;
