import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Octicons} from '@expo/vector-icons';

const Setting = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.onPressBtn} onPress={()=>navigation.navigate("HomeStack")}>
                <View style={styles.logout}>
                    <Text>
                        <Octicons name="sign-in" size={20} color="black"/>
                    </Text>
                    <Text style={styles.logoutTitle}> Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logout: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
    ,
    logoutTitle: {
        fontWeight: "bold",
    },
    onPressBtn: {
        padding: 10
    }
});

export default Setting;