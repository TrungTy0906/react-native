import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {Alert, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";



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

    return (
        <View>
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
        }
    }
)

export default HomeScreen;