import {StyleSheet, SafeAreaView} from 'react-native'
import TrackingMyParcel from '../../src/components/UserProfile/TrackingMyParcel'

const TrackingMyParcelScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <TrackingMyParcel/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default TrackingMyParcelScreen;