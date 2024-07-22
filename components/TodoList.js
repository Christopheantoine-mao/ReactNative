// components/TodoList.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addToList = () => {
    setList([...list, task]);
    setTask(''); // Réinitialiser la tâche après l'ajout
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
      />
      <Button title="Add Task" onPress={addToList} />
      {list.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default TodoList;
