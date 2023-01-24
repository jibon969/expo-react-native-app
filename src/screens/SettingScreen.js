import {StyleSheet, SafeAreaView} from 'react-native'
import Setting from '../../src/components/UserProfile/Setting'

const SettingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Setting navigation={navigation} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default SettingScreen;