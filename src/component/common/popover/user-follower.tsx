import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../colors';
import UserItem from '../user-item/user';
import RadioCustom from '../checkbox/radio';
import { getUserData } from '../../../utils';
import { useAppSelector } from '../../../hook/useRedux';
import { DEFAULT_AVATAR_USER, SERVER_DOMAIN } from '../../../contant/domain';
import { addUserIcon, mic, search } from '../../../assets/icon';
interface UserFollowerProps {
    userFollower: any;
    userCheckList: any;
    setUserCheckList: any;
    close: any;
}
const UserFollower = (props: UserFollowerProps) => {
    const { userFollower, userCheckList, setUserCheckList } = props;
    const userList = useAppSelector((state) => state.common.userList);

    const handleCheckUser = (value: any) => {
        if (userCheckList.indexOf(value) === -1) {
            setUserCheckList([...userCheckList, value]);
        } else {
            setUserCheckList(userCheckList.filter((item: any) => item !== value));
        }
    };
    const handleCheckAll = (isCheckAll: boolean) => {
        if (isCheckAll) {
            setUserCheckList(userFollower.map((item: any) => item.UserId));
        } else {
            setUserCheckList([]);
        }
    };

    // search
    const [isSearch, setIsSearch] = useState(false);
    const [searchList, setSearchList] = useState<any[]>([]);

    const handleSearch = (event: any) => {
        if (event) {
            setIsSearch(true);
            let keySearch = event;
            // tim kiem theo ten
            let filtered_users_Name = userFollower.filter(function (user: any) {
                return getUserData(user.UserId, userList)?.Name.indexOf(keySearch) > -1;
            });
            // tim kiem theo Email
            let filtered_users_Email = userFollower.filter(function (user: any) {
                return getUserData(user.UserId, userList)?.Email.indexOf(keySearch) > -1;
            });
            // noi 2 mang
            let search = filtered_users_Email.concat(filtered_users_Name);
            // loc phan tu trung nhau
            let clone: any[] = [];
            search.forEach((item: any) => {
                if (clone.indexOf(item) === -1) {
                    clone = [...clone, item];
                }
            });
            // ok
            setSearchList(clone);
        } else {
            setIsSearch(false);
        }
    };
    return (
        <View style={[styles.modalView, { height: 0.7 * Dimensions.get('window').height }]}>
            {/* search */}
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: 40,
                }}
            >
                <View style={styles.input}>
                    <View style={[styles.iconSearch, { left: 0 }]}>
                        <Image style={{ width: 26, height: 26 }} source={search} />
                    </View>
                    <TextInput
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#fff',
                        }}
                        placeholder={'Tìm kiếm thành viên....'}
                        onChangeText={(text: any) => {
                            handleSearch(text);
                        }}
                    />
                    <View style={[styles.iconSearch, { right: 0 }]}>
                        <Image style={{ width: 26, height: 26 }} source={mic} />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.iconAdd}
                    onPress={() => {
                        handleCheckAll(userFollower.length !== userCheckList.length);
                    }}
                >
                    <Image style={{ width: 14, height: 14 }} source={addUserIcon} />
                </TouchableOpacity>
            </View>

            {/* content */}
            <View style={{ paddingVertical: 10, flex: 1 }}>
                {isSearch ? (
                    <ScrollView style={{ backgroundColor: '#fff' }}>
                        {searchList &&
                            searchList.map((user: any, index: number) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    key={user.ID}
                                    style={userStyles.userItem}
                                    onPress={() => {
                                        handleCheckUser(user.UserId);
                                    }}
                                >
                                    <View style={userStyles.userItemLeft}>
                                        <UserItem
                                            user={{
                                                avatar: getUserData(user.UserId, userList)?.Avatar
                                                    ? SERVER_DOMAIN +
                                                      getUserData(user.UserId, userList)?.Avatar
                                                    : DEFAULT_AVATAR_USER,
                                                userName:
                                                    getUserData(user.UserId, userList)?.Name || '',
                                                email:
                                                    getUserData(user.UserId, userList)?.Email || '',
                                            }}
                                            size={40}
                                        />
                                    </View>
                                    <View style={userStyles.userItemRight}>
                                        <RadioCustom
                                            onChange={handleCheckUser}
                                            value={user.UserId}
                                            checkList={userCheckList}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                ) : (
                    <ScrollView style={{ backgroundColor: '#fff' }}>
                        {userFollower &&
                            userFollower.map((user: any, index: number) => (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    key={user.UserId + index}
                                    style={userStyles.userItem}
                                    onPress={() => {
                                        handleCheckUser(user.UserId);
                                    }}
                                >
                                    <View style={userStyles.userItemLeft}>
                                        <UserItem
                                            user={{
                                                avatar: getUserData(user.UserId, userList)?.Avatar
                                                    ? SERVER_DOMAIN +
                                                      getUserData(user.UserId, userList)?.Avatar
                                                    : DEFAULT_AVATAR_USER,
                                                userName:
                                                    getUserData(user.UserId, userList)?.Name || '',
                                                email:
                                                    getUserData(user.UserId, userList)?.Email || '',
                                            }}
                                            size={40}
                                        />
                                    </View>
                                    <View style={userStyles.userItemRight}>
                                        <RadioCustom
                                            onChange={handleCheckUser}
                                            value={user.UserId}
                                            checkList={userCheckList}
                                        />
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                )}
            </View>
            {/* footer */}
            <View style={styles.footerBox}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textBold}>Đã chọn {userCheckList.length}</Text>
                    <Text style={styles.textItalic}>
                        Admin workspace, người tạo team mặc định được chọn
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonBox} onPress={props.close}>
                    <Text style={styles.buttonText}>xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserFollower;
const userStyles = StyleSheet.create({
    userItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 3,
        padding: 5,
        alignItems: 'center',
    },
    userItemLeft: {
        flex: 1,
    },
    userItemRight: {
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const styles = StyleSheet.create({
    modalView: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    iconSearch: {
        position: 'absolute',
        width: 40,
        height: 40,

        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 40,
        paddingHorizontal: 40,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: COLORS.silver,
    },
    iconAdd: {
        width: 40,
        height: 40,
        marginStart: 10,
        borderColor: COLORS.main,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerBox: {
        height: 65,
        backgroundColor: COLORS.white,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: COLORS.main,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderStyle: 'dashed',
        paddingVertical: 10,
    },
    buttonBox: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0070C080',
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 13,
        fontWeight: '700',
        lineHeight: 17,
        color: COLORS.white,
        textTransform: 'uppercase',
    },
    textBold: {
        fontWeight: '700',
        fontSize: 12,
    },
    textItalic: {
        fontWeight: '400',
        fontSize: 10,
        fontStyle: 'italic',
    },
});
