import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Checkout from '../components/Checkout/Checkout'
import Loader from '../components/Loader/Loader'


const CheckoutScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    },[]);

    if (loading) {
        return (
            <View style={styles.loading}>
                <Loader/>
            </View>
        )
    }
    else {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Checkout navigation={navigation}/>
                </View>
            </SafeAreaView>
        );
    }

};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },

    loading: {
        flex: 1,
    },


});
export default CheckoutScreen;