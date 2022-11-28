import * as React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { DEFAULT_AVATAR_USER, SERVER_DOMAIN } from '../../../contant';
import { useAppSelector } from '../../../hook/useRedux';
import { getUserData } from '../../../utils';

interface AvatarGroupProps {
    userIdList: string[];
    maxItem?: number;
    avatarSize?: number;
}

const AvatarGroup = (props: AvatarGroupProps) => {
    const userList = useAppSelector((state) => state.common.userList);
    //
    const avatarSize = props.avatarSize ? props.avatarSize : 30;
    const maxCount = props.maxItem ? props.maxItem : 3;
    //
    const dataRender = props.userIdList.slice(0, maxCount);
    const countHidden = props.userIdList.slice(maxCount, props.userIdList.length);

    const renderImage = ({ item, index }: any) => {
        const avatar = getUserData(item, userList)?.Avatar
            ? SERVER_DOMAIN + getUserData(item, userList)?.Avatar
            : DEFAULT_AVATAR_USER;
        return (
            <Image
                source={{
                    uri: avatar,
                }}
                resizeMode={'cover'}
                style={[
                    styles.avatarBox,
                    index !== 0 && styles.margin,
                    { width: avatarSize, height: avatarSize, borderRadius: avatarSize },
                ]}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dataRender && dataRender}
                renderItem={renderImage}
                keyExtractor={(index) => index}
                horizontal
            />

            <View
                style={[
                    styles.avatarBox,
                    styles.more,
                    styles.margin,
                    {
                        width: avatarSize,
                        height: avatarSize,
                        borderRadius: avatarSize,
                        display: countHidden && countHidden.length !== 0 ? 'flex' : 'none',
                    },
                ]}
            >
                <Text style={{ color: '#fff' }}>+{countHidden && countHidden.length}</Text>
            </View>
        </View>
    );
};

export default AvatarGroup;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    avatarBox: {
        borderWidth: 1,
        borderColor: '#fff',
    },
    more: {
        backgroundColor: 'silver',
        alignItems: 'center',
        justifyContent: 'center',
    },
    margin: {
        marginStart: -7,
    },
});
