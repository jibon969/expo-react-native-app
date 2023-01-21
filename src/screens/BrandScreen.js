import {StyleSheet, SafeAreaView} from 'react-native'
import Brand from '../../src/components/Brand/Brand'

const BrandScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <Brand/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default BrandScreen;