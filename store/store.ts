import { create } from "zustand"
import { ITask } from "../interfaces";



type TaskStore = {
  tasks: ITask[];
  newTask: string;
  add: () => void;
  remove: (id: number) => void;
  updateCompleteness: (id: number) => void;
  updatePriority: (id: number) => void;
  setNewTask: (text: string) => void;
  sortTaskByPriority: () => void
  sortTaskByCompleteness: () => void
}

 export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  newTask: "",
  add:() => {
    set((state) => ({
      tasks: addTask(state.tasks, state.newTask),
      newTask: ""
    }))
  },
  remove: (id: number) => {
    set((state) => ({
      tasks: deleteTask(state.tasks, id)
    }))
  },
  updateCompleteness: (id: number) => {
    set((state) => ({
      tasks: updateTaskCompleteness(state.tasks, id)
    }))
  },
  updatePriority: (id: number) => {
    set((state) => ({
      tasks: updateTaskPriority(state.tasks, id)
    }))
  },
  setNewTask:(text) => {
    set((state) => ({ newTask: text }))
  } ,
  sortTaskByPriority: () => {
    set((state) => ({
      tasks: sortTask(state.tasks, 'priority')
    }))
  },
  sortTaskByCompleteness: () => {
    set((state) => ({
      tasks: sortTask(state.tasks, 'completed')
    }))
  }
 }))

 
// functions 

 const addTask = (tasks: ITask[], text: string): ITask[] => [
  {
    id: Math.max(0, Math.max(...tasks.map(({id}) => id))) + 1,
    item: text,
    priority: false,
    done: false
  },
  ...tasks,

]

const deleteTask = (tasks: ITask[], id: number) : ITask[] => 
  tasks.filter((item) => item.id !== id)

const updateTaskCompleteness = (tasks: ITask[], id: number) =>  {
 return tasks.map((item) => {
    if(item.id == id) {
      const currentBolean = item.done;
      return { ...item, done: !currentBolean };
    }
    return item
  })
}

const updateTaskPriority = (tasks: ITask[], id: number) =>  {
  return tasks.map((item) => {
     if(item.id == id) {
       const currentBolean = item.priority;
       return { ...item, priority: !currentBolean };
     }
     return item
   })
 }


 const sortTask = (tasks: ITask[], type: string) =>  {

  // for prioritized task
  if(type === 'priority') {
    const sortedTrueFirstPrio = tasks.sort((a, b) => Number(b.priority) - Number(a.priority)) 
   console.log('New array prio', sortedTrueFirstPrio)

    return sortedTrueFirstPrio
  }
  // for completed task
  return tasks.sort((a, b) => Number(b.done) - Number(a.done)) 
      
 
 }