import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Platform,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';


const UserProfileScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userProfile}>
                <View style={styles.userProfileImageWrap}>
                    <Image source={require('../assets/user-icon.jpg')}
                           style={styles.profileImage}
                           resizeMode={'contain'}
                    />
                </View>
                <View style={styles.userProfileWrapper}>
                    <Text style={styles.userProfileTitle}> Contact Number </Text>
                </View>

                <ScrollView>
                    {/*Personal Information this will use after authentication */}
                    <TouchableOpacity>
                        <View style={styles.userProfileContent}>
                            <View style={styles.profileIcon}>
                                <Text>
                                    <FontAwesome name="user-o" size={20} color="black"/>
                                </Text>
                            </View>
                            <View style={styles.profileInfo}>
                                <Text style={styles.profileInfoTitle}>Personal Information</Text>
                            </View>
                            <View style={styles.profileRightArrow}>
                                <Text>
                                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black"/>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userProfile: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        }),
    },
    userProfileImageWrap: {
        justifyCenter: "center",
        alignItems: "center",
        padding: 10
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#ccccca",
    },
    userProfileTitle: {
        textAlign: "center",
        fontWeight: "bold",
    },
    userProfileContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 7
    },
    profileIcon: {
        flex: 1,
        justifyCenter: "center",
        alignItems: "center"
    },
    profileInfo: {
        flex: 5,

        ...Platform.select({
            ios: {
                marginBottom: 20,
            },
            android: {
                marginBottom: 10,
            }
        })
    },
    profileInfoTitle: {
        fontSize: 16
    },
    profileRightArrow: {
        flex: 1,
        justifyCenter: "center",
        alignItems: "center"
    },
    logoutWrap: {
        flex: 1,
        margin: 20,
        paddingTop: 10,
        marginBottom: 40
    },
    logout: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    logoutTitle: {
        fontWeight: "bold",
    },

    userProfileWrapper: {
        borderBottomColor: '#ccccca',
        borderBottomWidth: 1,
        textAlign: "center",
        fontWeight: "bold",
        margin: 10,
        marginRight: 10,
        paddingBottom: 10,
        borderColor: "#ccccca"
    },


});
export default UserProfileScreen;

