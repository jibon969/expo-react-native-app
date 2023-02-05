import React, {useState, useEffect} from 'react';

import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Platform,
    ScrollView
} from 'react-native'
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Loader from '../components/Loader/Loader'
import {bela} from "../api/api";

const TermsConditionScreens = () => {
    const [loading, setLoading] = useState(true);
    const [termsCondition, setTermsCondition] = useState({});
    const {width} = useWindowDimensions();

    const getTermsCondition = async () => {
        let termsConditionJson;
        const res = await bela('/api/terms-and-conditions/');
        res.data.map((item) => {
            termsConditionJson = {
                title: item.title,
                description: item.description
            };
        });
        return termsConditionJson;
    };

    useEffect(() => {
        getTermsCondition().then((data) => {
            setTermsCondition(data);
            setLoading(false)
        })
    }, []);

    const source = {
        html: `${termsCondition?.description}`
    };

    if (termsCondition) {
        return (
            <SafeAreaView style={styles.termsConditionContainer}>
                {
                    loading ?
                        <Loader/>
                        :
                        <View style={styles.termsCondition}>
                            <ScrollView>
                                <View style={styles.termsConditionMargin}>
                                    <RenderHtml
                                        contentWidth={width}
                                        source={source}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                }

            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.noDataContainer}>
                <Text style={styles.noDataTitle}>No Data Found</Text>
            </SafeAreaView>
        )
    }

};

const styles = StyleSheet.create({
    termsConditionContainer: {
        flex: 1,
    },
    termsCondition: {
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
    termsConditionMargin: {
        margin: 15
    },
    termsConditionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        overflow: "hidden",
    },
    termsConditionSubTitle: {
        fontWeight: "bold",
        marginBottom: 10,
        lineHeight: 20
    },
    termsConditionText: {
        textAlign: "justify",
        lineHeight: 24,
        marginBottom: 10
    },
    noDataContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataTitle: {
        fontWeight: "bold",
    }

});

export default TermsConditionScreens;