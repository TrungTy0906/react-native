import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Alert, Button, FlatList, LogBox, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import CreateModal from "./create.modal";
import AntDesign from '@expo/vector-icons/AntDesign';



const HomeScreen = () => {

    interface IReview {
        id: number,
        title: string,
        star: number
    }

    const navigation : NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReviews] = useState<(IReview[])>([
        {id: 1, title:"heeehehe", star:5},
        {id: 2, title:"hoho", star:3}
    ]);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View>
                <View style = {styles.box}>
                    <Text style = {styles.text}>
                        React List: 
                    </Text>
                    <AntDesign name="plussquareo" size={30} color="black"  onPress={() => setModalVisible(true)} />
                </View>
                <CreateModal
                    modalVisible = {modalVisible}
                    setModalVisible = {setModalVisible}
                />
            </View>

            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id +''}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('review-detail', item)} >  
                            <View style = {styles.reviewItem}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
                    
                }
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        reviewItem: {
            padding: 15,
            margin: 15,
            backgroundColor: "#ccc",
        },
        text: {
            fontSize: 30,
            paddingBottom: 5,
            fontFamily: OPENSANS_REGULAR
        },
        box: {
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
        }
    }
)

export default HomeScreen;