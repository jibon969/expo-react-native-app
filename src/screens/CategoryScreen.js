import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    ScrollView,
    Text
} from 'react-native';


const CategoryScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.category}>
                        <Text>Coming...</Text>
                    </View>
                </ScrollView>
            </View>

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
                marginBottom: "0%"
            },
            android: {
                marginBottom: 0
            }
        })
    },
    category: {
        overflow: "hidden",
        padding: 1,
        marginTop: 10
    },
});


export default CategoryScreen;