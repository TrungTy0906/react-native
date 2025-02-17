import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const [name, setName] = useState<string>("");

  const [age, setAge] = useState<number>(0);


  return (
    <View style={styles.container}>
      <View>
      <Text>Name:{name}</Text>
        <TextInput 
          onChangeText={(value) => setName(value)}
          style = {{
              borderColor: 'green',
              borderWidth: 1,
              width: 200,
              padding: 15
            }} />
      </View>

      <View>
      <Text>Age:{age}</Text>
        <TextInput 
          onChangeText={(value) => setAge(+value)}
          keyboardType='number-pad'
          maxLength={2}
          style = {{
              borderColor: 'green',
              borderWidth: 1,
              width: 200,
              padding: 15
            }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
