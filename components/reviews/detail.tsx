import {StyleSheet, Text, View } from "react-native";

const DetailScreen = () => {
    return (
        <View>
            <Text  style = {styles.review} >Hello Detail Screen google</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: 'OpenSans-Regular'
    }
})

export default DetailScreen;