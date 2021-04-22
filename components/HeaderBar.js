import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from "react-native";

import {COLORS, FONTS, icons, SIZES} from "../constants";

import {connect} from "react-redux";
import {toggleTheme} from "../stores/actions/themeActions";

const HeaderBar = ({appTheme, toggleTheme}) => {

    return (
        <SafeAreaView
            style={{
                height: 140,
                width: "100%",
                backgroundColor: COLORS.purple,
                flexDirection: 'row'
            }}>

            {/*Greetings */}
            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding
                }}>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>Juyel,</Text>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>Welcome Back!</Text>
            </View>

            {/*Toggle Button*/}
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginHorizontal: SIZES.padding,
                    borderRadius: 20,
                    height: 40,
                    backgroundColor: COLORS.lightPurple
                }}
                onPress={() => (appTheme.name === 'light') ? toggleTheme('dark') : toggleTheme('light')}>

                {/*Sun */}
                <View
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...(appTheme.name === 'light') ? styles.selectedLightModeStyle : {}
                    }}>

                    <Image
                        source={icons.sunny}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white
                        }}
                    />
                </View>

                {/*Moon*/}
                <View
                    style={{
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...(appTheme.name === 'dark') ? styles.selectedNightModeStyle : {}
                    }}>

                    <Image
                        source={icons.night}
                        style={{
                            height: 30,
                            width: 30,
                            tintColor: COLORS.white
                        }}
                    />
                </View>

            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    selectedNightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.black
    },
    selectedLightModeStyle: {
        borderRadius: 20,
        backgroundColor: COLORS.yellow
    }
})

const mapStateToProps = (store) => {

    const {appTheme, error} = store.themeStore;
    return {appTheme, error};
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTheme: (themeType) => {
            return dispatch(toggleTheme(themeType))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
