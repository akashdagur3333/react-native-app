import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text ,ScrollView} from 'react-native';

export default function App() {
  const [inputName, setInputName] = useState('');
  const [arrayState, setArrayState] = useState([]);

  const TextInputName = (text) => {
    setInputName(text);
  };

  const clicked = () => {
    setArrayState((currentGoals) => [...currentGoals, inputName]);
    setInputName(''); // Clear the input field after adding the goal
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name here"
          onChangeText={TextInputName}
          value={inputName}
          placeholderTextColor="#888"
        />
        <Button
          color="#6200EE"
          title="Press Me"
          onPress={clicked}
        />
      </View>
      <ScrollView style={styles.goalContainer}>
        {arrayState.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 40,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
  },
  textInput: {
    borderColor: '#6200EE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  buttonLayout: {
    marginBottom: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  goalContainer: {
    flex: 1,
    marginTop: 10,
  },
  goalItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalText: {
    fontSize: 18,
    color: '#333',
  },
});
