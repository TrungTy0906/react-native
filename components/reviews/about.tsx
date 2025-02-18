import {StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../../utils/const";

const AboutScreen = () => {
    return (
        <View>
        <Text style = {[styles.about, globalStyle.globalFont]} >Hello About Screen google</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
    }
})

export default AboutScreen;