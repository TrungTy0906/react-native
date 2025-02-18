import {Alert, Button, Text, View } from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text>Hello Home Screen google</Text>
            <Button title="View Detail"
                onPress={() => alert("hehe")}
            />
        </View>
    )
}

export default HomeScreen;