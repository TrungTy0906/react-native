import { useState } from "react";
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateModal = (props: any) => {

    const {modalVisible, setModalVisible} = props;

    interface IProps {
        modalVisible: boolean,
        setModalVisible: (v:boolean) => void;
    }

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <View style ={styles.container} >
                {/* header */}
                <View style = {styles.headerContainer} >
                    <Text style = {{fontSize: 30}}>Create a review</Text>
                    <AntDesign name="close" size={24} color="black" onPress={() => {setModalVisible(false)}} />
                </View>
                {/* body */}
                <View style = {{marginTop: 10}}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.text}>Noi dung</Text>
                        <TextInput style = {styles.input} />
                    </View>
                    <View  style = {styles.textContainer}>
                        <Text style = {styles.text} >Rating</Text>
                        <TextInput style = {styles.input} />
                    </View>
                </View>

                <View>
                    <Button title="ADD" onPress={() => {}} />
                </View>


                {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    textContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        fontSize: 20,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        padding: 5,
    }
  });

export default CreateModal;