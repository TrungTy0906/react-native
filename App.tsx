import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {

  const [todo, setTodo] = useState("");
  
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo, {id: randomInteger(2,200000), name: todo}]);
    setTodo("");
  }

  const deleteTodo = (id: number) =>{
    const newTodos = listTodo.filter(item => item.id !== id);
    setListTodo(newTodos);
  }

  interface ITodo {
    id: number,
    name: string,
  }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random()* (max-min + 1)) + min
  }

  return (
    <View style = {styles.container}>
      <Text style = {styles.text} >
        Hoc React Native
      </Text>
       {/* form  */}
      <View style = {styles.form} >
        <TextInput
          value={todo}
          onChangeText={(value) => setTodo(value)}
          style = {styles.textInput} />
        <Button title='Add todo' 
          onPress={handleAddTodo}/>
      </View>
      {/* list todo */}
      <View style = {styles.list} > 
        <FlatList
          data={listTodo}
          renderItem={(data) => {
            return(
              <Pressable 
                onPress={() => deleteTodo(data.item.id)} 
                style = {({pressed}) => ({opacity : pressed ? 0.5 : 1})}
              >
                <View style = {styles.todo} >
                  <Text style = {styles.itemInList} >{data.item.name}</Text>
                  <FontAwesome5 name="trash" size={24} color="black" />
                </View>
              </Pressable>
            )
          } }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    // borderWidth: 2,
    // borderColor: 'green'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
    textAlign: 'center'
  },
  listContainer: {
    padding: 25,
    marginBottom: 25,
    backgroundColor: "green",
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding: 5,
    margin: 10,
  },
  body: {
    // padding: 20,
  },
  itemInList: {
    fontSize: 30,
  },
  form: {
  },
  list: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});
