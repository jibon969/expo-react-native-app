import {StyleSheet, SafeAreaView} from 'react-native'
import ProductList from '../../src/components/ProductList/ProductList'

const ProductListScreen = () => {
    return (
        <SafeAreaView style={styles.contactArea}>
            <ProductList/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    contactArea: {
        flex: 1,
    }
});

export default ProductListScreen;