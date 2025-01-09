import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [hr, setHr] = useState('')

  const calculate = () => {
    const lower = (220-age) * 0.65
    const upper = (220-age) * 0.85
    const result = `${lower}-${upper}`
    setHr(result)
  }
  
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text>Limits</Text>
      <Text>{hr}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
      <StatusBar style="auto" />
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
