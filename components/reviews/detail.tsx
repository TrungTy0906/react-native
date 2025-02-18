import {Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from '@react-navigation/native';
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    return (
        <View>
            <Text  style = {styles.review} >Hello Detail Screen google</Text>
            <Button title="Go home" onPress={() => navigation.navigate('home')}/>
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