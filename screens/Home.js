import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {HeaderBar} from "../components";
import {COLORS, SIZES} from "../constants";
import {toggleTheme} from "../stores/actions/themeActions";
import {connect} from "react-redux";

const Home = ({navigation, appTheme}) => {
    return (
        <View style={styles.container}>
            <HeaderBar/>

            <ScrollView
                style={{
                    flex: 1,
                    marginTop: -25,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                    backgroundColor: appTheme.backgroundColor
                }}>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
