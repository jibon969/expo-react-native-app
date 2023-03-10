import React, {useState, useEffect} from 'react';

import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import Cart from '../components/Cart/Cart';
import EmptyCart from '../components/Cart/EmptyCart';
import Loader from '../components/Loader/Loader'

const CartScreen = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
        navigation.navigate('CheckoutStack');
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    },[]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView>
                    <Cart count={count}/>
                </ScrollView>
                <Text>{count}</Text>
                {/*Total Amount*/}
                <View style={styles.totalAmountContent}>

                    <View style={styles.totalAmountInfo}>
                        <Text style={styles.totalAmountTitle}>Total Amount : </Text>
                    </View>
                    <View style={styles.totalAmountRight}>
                        <Text style={styles.totalAmountPrice}> ৳ 800 </Text>
                    </View>
                </View>
                {/*Proceed to Order*/}
                {/*<TouchableOpacity onPress={() => navigation.navigate('CheckoutStack') }>*/}
                <TouchableOpacity onPress={handleButtonClick}>
                    <View style={styles.proceedOrder}>
                        <Text style={styles.proceedOrderTitle}>Proceed to Order </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/*<View style={styles.container}>*/}
            {/*<EmptyCart navigation={navigation}/>*/}
            {/*</View>*/}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        overflow: 'hidden',
    },
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                marginBottom: '0%',
            },
            android: {
                marginBottom: 0,
            },
        }),
    },
    loading: {
        flex: 1,
    },
    totalAmountContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#551E18',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 6,
        borderRadius: 8,
        color: '#FFF',
        paddingBottom: 7,
    },
    totalAmountInfo: {
        flex: 1,
        color: '#FFF',
    },
    totalAmountTitle: {
        color: '#FFF',
    },
    totalAmountRight: {
        flex: 1,
        justifyCenter: 'flex-end',
        alignItems: 'flex-end',
    },
    totalAmountPrice: {
        color: '#FFF',
    },

    proceedOrder: {
        padding: 10,
        backgroundColor: '#1a0b1d',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 8,
        borderRadius: 8,
    },
    proceedOrderTitle: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default CartScreen;
