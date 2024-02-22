import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useTaskStore } from '../store/store'

const AddTaskComponent = () => {

  const taskStore = useTaskStore()

  return (
    <View style={{flexDirection: 'row', paddingVertical: 20}}>
      <TextInput 
        placeholder='New Task'
        value={taskStore.newTask}
        onChangeText={taskStore.setNewTask}
        style={[styles.input, {flex: 3}]} 
      />
      <View style={{flex: 1, paddingLeft:10 }}>
        <Button 
          title='Add' 
          onPress={() => taskStore.add()}
        />
      </View>
    </View>
  )
}

export default AddTaskComponent

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    height: 38,
    backgroundColor: '#F1F1F1',
    paddingLeft: 16
  }
})