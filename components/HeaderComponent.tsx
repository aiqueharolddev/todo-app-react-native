import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useTaskStore } from '../store/store'

const HeaderComponent = () => {

  const taskStore = useTaskStore()

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.title}>Today's Task</Text>

      <View style={{flexDirection: 'row' , paddingTop: 14}}>
        <Icon name='sort' />
        <TouchableOpacity onPress={() => taskStore.sortTaskByPriority()}>
          <Text style={styles.sortText}> Priority</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => taskStore.sortTaskByCompleteness()}>
          <Text style={styles.sortText}>Completed</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    paddingTop: 12
  },
  sortText: {
    fontSize: 14,
    color: '#2CA5FF',
    paddingLeft: 12
  }
});