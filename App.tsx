import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Icon } from '@rneui/base';

// import Ionicons from '@expo/vector-icons/Ionicons';

import AddTaskComponent from './components/AddTaskComponent';
import TaskItemComponent from './components/TaskItemComponent';

import { useTaskStore } from './store/store';
import HeaderComponent from './components/HeaderComponent';


function App() {

  const taskStore = useTaskStore()

  return (
    <SafeAreaView style={{padding: 16, backgroundColor: '#fff', flex: 1}}>
      <HeaderComponent />
      <AddTaskComponent />
      <FlatList
        data={taskStore.tasks}
        renderItem={({item}) => {
          return (
            <TaskItemComponent task={item} />
          )
        }}
      />
    </SafeAreaView>
  );
}


export default App;
