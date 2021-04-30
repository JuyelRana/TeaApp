import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    StyleSheet
} from 'react-native';

import {HeaderBar, CustomButton} from "../components";
import {toggleTheme} from "../stores/actions/themeActions";
import {connect} from "react-redux";
import {COLORS, dummyData, FONTS, icons, SIZES} from "../constants";


const Rewards = ({navigation, appTheme}) => {

    const renderRewardPointSection = () => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    marginVertical: SIZES.padding
                }}>

                {/*Text */}
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.h1
                    }}>
                    Rewards
                </Text>

                <Text
                    style={{
                        marginTop: 10,
                        color: appTheme.textColor,
                        width: SIZES.width * 0.6,
                        textAlign: 'center',
                        ...FONTS.h3,
                        lineHeight: 18
                    }}
                >
                    You are 60 points away from your next reward
                </Text>

                <ImageBackground
                    source={icons.reward_cup}
                    resizeMode="contain"
                    style={{
                        marginTop: SIZES.padding,
                        width: SIZES.width * 0.8,
                        height: SIZES.width * 0.8,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <View style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}>

                        <Text style={{
                            ...FONTS.h1
                        }}>280</Text>

                    </View>

                </ImageBackground>

            </View>
        )
    }

    const renderButtons = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                {/*Scan */}
                <CustomButton
                    isPrimaryButton={true}
                    label="Scan in store"
                    containerStyle={{
                        width: 130,
                        paddingVertical: 5,
                        marginRight: SIZES.radius,
                        borderRadius: SIZES.radius * 2,
                    }}

                    labelStyle={{
                        ...FONTS.h3
                    }}
                    onPress={() => navigation.navigate("Location")}
                />

                {/*Redeem*/}
                <CustomButton
                    isSecondaryButton={true}
                    label="Redeem"
                    containerStyle={{
                        width: 130,
                        paddingVertical: 5,
                        borderRadius: SIZES.radius * 2
                    }}

                    labelStyle={{
                        ...FONTS.h3
                    }}

                    onPress={() => navigation.navigate("Location")}
                />

            </View>
        )
    }

    const renderAvailableRewardsHeader = () => {
        return (
            <View style={{
                marginTop: SIZES.padding,
                marginBottom: SIZES.radius,
                paddingHorizontal: SIZES.padding
            }}>

                <Text style={{
                    color: appTheme.textColor,
                    ...FONTS.h1
                }}>Available Rewards</Text>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/*Header */}
            <HeaderBar/>

            {/*Details */}
            <FlatList style={{
                marginTop: -25,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                backgroundColor: appTheme.backgroundColor
            }}
                      data={dummyData.availableRewards}
                      keyExtractor={item => `${item.id}`}
                      showsVerticalScrollIndicator={false}
                      ListHeaderComponent={
                          <View>
                              {/*Rewards Point */}
                              {renderRewardPointSection()}

                              {/*Button */}
                              {renderButtons()}

                              {/*Header Label */}
                              {renderAvailableRewardsHeader()}
                          </View>
                      }
                      renderItem={({item}) => {
                          return (
                              <View
                                  style={{
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginHorizontal: SIZES.padding,
                                      marginBottom: SIZES.base,
                                      paddingVertical: SIZES.base,
                                      borderRadius: 20,
                                      backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2
                                  }}
                              >
                                  <Text style={{
                                      color: item.eligible ? COLORS.black : COLORS.lightGray3,
                                      ...FONTS.body3
                                  }}>
                                      {item.title}
                                  </Text>
                              </View>
                          )
                      }}

                      ListFooterComponent={
                          <View style={{
                              marginBottom: 120
                          }}>

                          </View>
                      }
            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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


export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
