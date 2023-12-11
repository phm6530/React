import React, { useEffect, useState , useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useCustumHook from './CustumHook';


function App() {
  const [tasks, setTasks] = useState([]);
  
  const fetchData = (data) =>{
    console.log(data);
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const { isLoading , error , sendRequest : fetchTasks} = useCustumHook();

  useEffect(() => {
    console.log('실행');
    fetchTasks({ url : 'https://fir-967c0-default-rtdb.firebaseio.com/tasks.json'}
    ,fetchData );
  }, [fetchTasks]);

  return (
    <React.Fragment>
      <NewTask onAddTask={fetchData} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
