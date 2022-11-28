import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
interface UserItemProps {
    size: number;
    user: {
        avatar?: any;
        userName?: string;
        email?: string;
    };
}
const UserItem = (props: UserItemProps) => {
    const { user, size } = props;
    const image = { uri: user.avatar };
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={{ width: size, height: size, borderRadius: size, marginEnd: 10 }}
                resizeMode={'cover'}
            />
            <View>
                <Text style={styles.userName} numberOfLines={1}>
                    {user.userName}
                </Text>
                <Text style={styles.email} numberOfLines={1}>
                    {user.email}
                </Text>
            </View>
        </View>
    );
};

export default UserItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '90%',
    },
    userName: {
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 15,
    },
    email: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 13,
    },
});
