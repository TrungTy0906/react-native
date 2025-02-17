import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [students, setStudents] = useState([
    {id: 1, name: 'Eric', age:16},
    {id: 2, name: 'Micxu', age:12},
    {id: 3, name: 'Ratano', age:15},
    {id: 4, name: 'Mitoga', age:26},
    {id: 5, name: 'Hoshi', age:26},
    {id: 6, name: 'hola', age:32},
    {id: 7, name: 'Halo', age:12},
    {id: 8, name: 'Kamel', age:17},
    {id: 9, name: 'Kric', age:16},
    {id: 10, name: 'Erik', age:17},
    {id: 11, name: 'Eri', age:11},
  ]);


  return (
    <View style={styles.container}>
      <Text style = {styles.text} >Hello World</Text>
      <ScrollView>
        {
          students.map(item => {
            return (
              <View key={item.id} style = {styles.listContainer}>
                <Text>{item.name}</Text>
                </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 60,
  },
  listContainer: {
    padding: 25,
    marginBottom: 25,
    backgroundColor: "green",
  }
});
