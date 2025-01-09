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
      <Text style={styles.field}>Age</Text>
      <TextInput
      style={styles.field}
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{hr}</Text>
      <View style={styles.button}>
      <Button title='Calculate' onPress={calculate}>Calculate</Button>
      </View>
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
  field: {
    padding: 10,
    fontSize: 20,
  },
  button: {
    padding: 15,
  },
});
