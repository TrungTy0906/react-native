import { NavigationProp, useNavigation } from "@react-navigation/native";
import {Alert, Button, Text, View } from "react-native";


const HomeScreen = () => {

    const navigation : NavigationProp<RootStackParamList> = useNavigation();
    return (
        <View>
            <Text>Hello Home Screen google</Text>
            <Button title="View Detail"
                onPress={() => navigation.navigate('review-detail')}
            />
        </View>
    )
}

export default HomeScreen;