import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {toggleTheme} from "../stores/actions/themeActions";
import {connect} from "react-redux";
import {COLORS, dummyData, FONTS, icons, SIZES} from "../constants";
import {IconButton, TabButton, VerticalTextButton} from "../components";


const Order = ({navigation, route, appTheme}) => {

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Milk Tea");
    const [menu, setMenu] = useState('');

    useEffect(() => {
        let {selectedLocation} = route.params;
        setSelectedLocation(selectedLocation);
    }, []);

    useEffect(() => {
        let menuList = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory);
        setMenu(menuList);
    }, [selectedCategory])

    const renderHeaderSection = () => {
        return (
            <SafeAreaView
                style={{
                    height: 200,
                    backgroundColor: COLORS.purple,
                    alignItems: 'center'
                }}>

                {/*Nav Bar*/}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        alignItems: 'center'
                    }}>

                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}/>

                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h1,
                                fontSize: 25
                            }}>
                            Pick-up Order
                        </Text>
                    </View>

                    <View
                        style={{
                            width: 25
                        }}
                    />

                </View>

                {/*Location*/}
                <View
                    style={{
                        marginTop: SIZES.radius,
                        backgroundColor: COLORS.white1,
                        paddingHorizontal: SIZES.radius,
                        paddingVertical: 5,
                        borderRadius: SIZES.padding
                    }}>

                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                    >
                        {selectedLocation?.title}
                    </Text>

                </View>

            </SafeAreaView>
        )
    }

    const renderToTabBarSection = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: SIZES.radius,
                    justifyContent: 'center',
                    paddingLeft: SIZES.padding * 2,
                    paddingRight: SIZES.padding
                }}>

                {/*Tab Buttons */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                    <TabButton
                        containerStyle={{
                            width: 60
                        }}
                        label="Menu"
                        onPress={() => setSelectedTab(0)}
                        selected={selectedTab === 0}
                    />

                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        label="Previous"
                        onPress={() => setSelectedTab(1)}
                        selected={selectedTab === 1}
                    />

                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        label="Favorite"
                        onPress={() => setSelectedTab(2)}
                        selected={selectedTab === 2}
                    />

                </View>
                {/*Order Number*/}

                <View
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary
                    }}>

                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }} l>
                        0
                    </Text>

                </View>

            </View>
        )
    }


    const renderSideBar = () => {
        return (

            <View
                style={{
                    marginTop: -10,
                    width: 65,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: 65,
                    borderBottomRightRadius: 65
                }}>

                <VerticalTextButton
                    selected={selectedCategory === "Snack"}
                    onPress={() => setSelectedCategory("Snack")}
                    label="Snack"/>

                <VerticalTextButton
                    label="Coffee"
                    selected={selectedCategory === "Coffee"}
                    onPress={() => setSelectedCategory("Coffee")}
                    containerStyle={{
                        marginTop: 50
                    }}
                />

                <VerticalTextButton
                    label="Smoothie"
                    selected={selectedCategory === "Smoothie"}
                    onPress={() => setSelectedCategory("Smoothie")}
                    containerStyle={{
                        marginTop: 70,
                        width: 100
                    }}
                />

                <VerticalTextButton
                    label="Special Tea"
                    selected={selectedCategory === "Special Tea"}
                    onPress={() => setSelectedCategory("Special Tea")}
                    containerStyle={{
                        marginTop: 90,
                        width: 110
                    }}
                />

                <VerticalTextButton
                    label="Milk Tea"
                    selected={selectedCategory === "Milk Tea"}
                    onPress={() => setSelectedCategory("Milk Tea")}
                    containerStyle={{
                        marginTop: 80,
                        width: 80
                    }}
                />
            </View>

        )
    }

    return (
        <View style={styles.container}>
            {/*Header */}
            {renderHeaderSection()}

            {/*Details */}
            <View
                style={{
                    flex: 1,
                    backgroundColor: appTheme.backgroundColor,
                    marginTop: -45,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}>

                {/*Tab Bar Section*/}
                {renderToTabBarSection()}

                {/*Side Bar & Listing*/}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>

                    {/*Side Bar */}
                    {renderSideBar()}


                    {/*Listing*/}
                    <FlatList
                        contentContainerStyle={{
                            marginTop: SIZES.padding,
                            paddingBottom: 50
                        }}
                        data={menu}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => navigation.navigate("OrderDetail", {selectedItem: item})}>

                                    <View
                                        style={{
                                            height: 150,
                                            paddingHorizontal: SIZES.padding,
                                            marginTop: index > 0 ? SIZES.padding : 0,
                                            padding: 0,
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-end'
                                        }}>

                                        {/*Thumnail*/}
                                        <View
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: SIZES.padding,
                                                width: 130,
                                                height: 140,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightYellow,
                                                zIndex: 1
                                            }}>

                                            <Image
                                                source={item.thumbnail}
                                                resizeMode="contain"
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                }}
                                            />

                                        </View>

                                        {/*Details */}
                                        <View
                                            style={{
                                                width: "70%",
                                                height: "85%",
                                                paddingLeft: "22%",
                                                paddingRight: SIZES.base,
                                                paddingVertical: SIZES.base,
                                                borderRadius: SIZES.radius,
                                                justifyContent: "space-between",
                                                backgroundColor: COLORS.primary
                                            }}>

                                            <Text
                                                style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h2,
                                                    fontSize: 18,
                                                    lineHeight: 25
                                                }}>
                                                {item.name}
                                            </Text>

                                            <Text
                                                style={{
                                                    color: COLORS.lightYellow,
                                                    ...FONTS.h2,
                                                    fontSize: 18
                                                }}
                                            >
                                                {item.price}
                                            </Text>

                                        </View>

                                    </View>

                                </TouchableWithoutFeedback>
                            )
                        }}
                    />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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


export default connect(mapStateToProps, mapDispatchToProps)(Order);
