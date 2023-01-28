import {View, StyleSheet, Text, ScrollView} from 'react-native'

const AboutUs = ({about}) => {
    return (
        <View style={styles.aboutUs}>
            <ScrollView>
                {
                    about.map((data, index) => (
                        <View style={styles.aboutUsMargin} key={index}>
                            <Text style={{textAlign: "justify", lineHeight: 25}}>
                                {data?.row_description}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    aboutUs: {
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
    aboutUsMargin: {
        margin: 15
    },
});

export default AboutUs;