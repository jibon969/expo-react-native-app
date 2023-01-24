import React from 'react';
import {View, StyleSheet, Text} from 'react-native'

const NoData = () => {
    return (
        <View style={styles.noDataContainer}>
            <Text style={styles.noDataTitle}>No Data Found !</Text>
        </View>

    )
};

const styles = StyleSheet.create({
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataTitle: {
        fontWeight: "bold",
        fontSize: 18,
    }
});

export default NoData;
