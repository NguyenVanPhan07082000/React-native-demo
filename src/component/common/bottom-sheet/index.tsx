import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../colors';
interface BottomSheetCustomProps {
    open: boolean;
    handleCloseBottomSheet: any;
    height?: number;
    speed?: number;
    children: any;
}
const BottomSheetCustom = (props: BottomSheetCustomProps) => {
    const { open, handleCloseBottomSheet, height, speed, children } = props;
    const windowHeight = Dimensions.get('screen').height;
    const translateY = useRef(new Animated.Value(windowHeight)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (open) {
            handleOpen();
        } else {
            handleClose();
        }
    }, [open]);
    const handleClose = () => {
        Animated.timing(translateY, {
            toValue: height ? height : windowHeight,
            duration: speed ? speed : 350,
            useNativeDriver: false,
        }).start();
    };

    const handleOpen = () => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: speed ? speed : 350,
            useNativeDriver: false,
        }).start();
        Animated.timing(translateY, {
            toValue: 0,
            duration: speed ? speed : 350,
            useNativeDriver: false,
        }).start();
    };

    return (
        <>
            <Pressable
                style={{
                    height: windowHeight,
                    width: Dimensions.get('screen').width,
                    position: 'absolute',
                    display: open ? 'flex' : 'none',
                }}
                onPress={() => {
                    handleCloseBottomSheet(false);
                    Keyboard.dismiss();
                }}
            >
                <Animated.View
                    style={{
                        height: windowHeight,
                        width: Dimensions.get('screen').width,
                        position: 'absolute',
                        display: open ? 'flex' : 'none',
                        backgroundColor: '#82828280',
                        opacity: opacity,
                    }}
                ></Animated.View>
            </Pressable>
            {/* content */}
            <Animated.View
                style={[
                    {
                        transform: [{ translateY: translateY }],
                    },
                    height
                        ? {
                              height: height,
                          }
                        : undefined,
                    styles.container,
                ]}
            >
                {children}
            </Animated.View>
        </>
    );
};

export default BottomSheetCustom;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
