import React from 'react';
import {Location, Order, OrderDetail} from "./screens";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import NavigationBar from 'react-native-navbar-color'
import Tabs from "./navigation/tabs";
import {COLORS} from "./constants";
import {Provider} from "react-redux";
import store from "./stores/store";

const Stack = createStackNavigator();

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
        NavigationBar.setColor(COLORS.purple);
        NavigationBar.setStatusBarColor(COLORS.purple, false)
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>

                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Home'}>
                    <Stack.Screen
                        name="Home"
                        component={Tabs}
                    />

                    <Stack.Screen
                        name="Location"
                        component={Location}
                    />

                    <Stack.Screen
                        name="Order"
                        component={Order}
                    />

                    <Stack.Screen
                        name="OrderDetail"
                        component={OrderDetail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;
