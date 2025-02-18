import {StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";

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
        fontFamily: OPENSANS_REGULAR
    }
})

export default DetailScreen;