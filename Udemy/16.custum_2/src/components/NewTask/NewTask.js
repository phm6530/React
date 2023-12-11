import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useCustumHook from '../../CustumHook';

const NewTask = (props) => {

  const createTask = (data)=>{
    props.onAddTask(data);
  }

  const { isLoading , error , sendRequest : fetchTasks} = useCustumHook();

  const enterTaskHandler = async (taskText) => {
    console.log(taskText);
      fetchTasks({
        url : 'https://fir-967c0-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { text: taskText }
      },createTask)  
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
