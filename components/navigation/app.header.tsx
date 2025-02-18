import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { OPENSANS_REGULAR } from "../../utils/const";
const AppHeader = () => {
    const navigation :any = useNavigation();
    return(
        <View style = {styles.container}>
            <MaterialIcons name="menu" size={24} color="black"  onPress={() => navigation.openDrawer()}/>
            <Text style = {styles.textInput}>
                Header day
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#ccc',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        fontFamily: OPENSANS_REGULAR,
        fontSize: 30,
        textAlign: 'center'
    }
}) 

export default AppHeader;