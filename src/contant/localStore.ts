import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
    }
};

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null && value !== undefined) {
            return value;
            // value previously stored
        } else {
            return null;
        }
    } catch (e) {
        return null;
        // error reading value
    }
};

const removeValue = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // remove error
    }

    console.log('Done.');
};

export const localStore = { store: storeData, get: getData, remove: removeValue };
