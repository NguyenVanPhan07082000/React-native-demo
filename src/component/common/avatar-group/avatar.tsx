import * as React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { DEFAULT_AVATAR_USER, SERVER_DOMAIN } from '../../../contant';
import { useAppSelector } from '../../../hook/useRedux';
import { getUserData } from '../../../utils';

interface AvatarProps {
    UserId: string;
    avatarSize: number;
}

const Avatar = (props: AvatarProps) => {
    const userList = useAppSelector((state) => state.common.userList);
    const avatar = getUserData(props.UserId, userList)?.Avatar
        ? SERVER_DOMAIN + getUserData(props.UserId, userList)?.Avatar
        : DEFAULT_AVATAR_USER;
    return (
        <Image
            source={{
                uri: avatar,
            }}
            resizeMode={'cover'}
            style={[
                styles.avatarBox,
                {
                    width: props.avatarSize,
                    height: props.avatarSize,
                    borderRadius: props.avatarSize,
                },
            ]}
        />
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: {},
    avatarBox: {
        borderWidth: 1,
        borderColor: '#fff',
    },
});
