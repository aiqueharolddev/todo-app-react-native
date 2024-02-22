import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox'
import { ITask } from '../interfaces'
import { Icon } from '@rneui/themed';
import { useTaskStore } from '../store/store';

type Props = {
  task: ITask
}

const TaskItemComponent = ({task}: Props) => {

  const taskStore = useTaskStore()

  return (
    <View style={styles.taskItemContainer}>
      <View style={{flexDirection: 'row'}}>
        <CheckBox 
          value={task.done}
          onChange={() => taskStore.updateCompleteness(task.id)}
         />
        <Text style={[styles.taskItemText, { textDecorationLine: task.done ? 'line-through' : 'none'}]}>
          {task.item}
        </Text>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>

        <TouchableOpacity style={styles.actionButtons} onPress={() => taskStore.updatePriority(task.id)} >
          <Icon 
            name='star' 
            color={task.priority ? '#E5D446' : 'gray'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButtons} onPress={() => taskStore.remove(task.id)} >
          <Icon 
            name='delete'
            color='#9C1212'
          />
        </TouchableOpacity>

      </View>
      
      
    </View>
  )
}

export default TaskItemComponent

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
  },
  taskItemContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  actionButtons: {
    paddingHorizontal: 8,
  },
  taskItemText: {
    alignSelf: 'center', 
    paddingLeft: 4,
  }

});