import {StyleSheet, SafeAreaView, View, Text} from 'react-native'
import AboutUs from '../../src/components/AboutUs/AboutUs'
import NoData from '../components/Base/NoData'
import Loader from '../components/Base/Loader'
import {BASE_URL} from '../api/api';
import React, {useState, useEffect} from 'react';


const AboutScreen = () => {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState([]);

    const fetchData = async () => {
        const resp = await fetch(`${BASE_URL}/api/about-us/`);
        const data = await resp.json();
        setAbout(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);


    if (about.length) {
        return (
            <SafeAreaView style={styles.aboutUsContainer}>
                {
                    loading ?
                        <Loader/>
                        :
                        <AboutUs about={about}/>
                }
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView style={styles.aboutUsContainer}>
                <NoData/>
            </SafeAreaView>
        )
    }

};

const styles = StyleSheet.create({
    aboutUsContainer: {
        flex: 1,
    },
});

export default AboutScreen;