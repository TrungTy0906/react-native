import {Button, Image, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import AppHeader from "../navigation/app.header";
import starImage from "../../assets/images/star.png"
const DetailScreen = () => {

    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const route: RouteProp<RootStackParamList, 'review-detail'> = useRoute();

    return (
        <View>
            <Text  style = {styles.review} >Hello Detail Screen google</Text>
            <Text>{route.params?.id}</Text>
            <Text>{route.params?.title}</Text>

            <Text>{route.params?.star}</Text>

            <View style = {{flexDirection: 'row', gap: 15}} >
                <Image source={starImage}
                style = {{height: 50, width:50}} />
                <Image source={starImage}
                style = {{height: 50, width:50}} />
                <Image source={starImage}
                style = {{height: 50, width:50}} />
                <Image source={starImage}
                style = {{height: 50, width:50}} />
                <Image source={starImage}
                style = {{height: 50, width:50}} />
            </View>
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