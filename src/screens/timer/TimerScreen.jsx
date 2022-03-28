import React from 'react';
import TaskDetails from '../../components/task_details/TaskDetails';
import Timer from '../../components/timer/Timer';
import * as containerStyles from '../../components/todo_container/styles';
import * as styles from './styles';

function TimerScreen(props) {
  return (
    <div className='flex al-center jc-space-evenly' style={containerStyles.todoContainer}>
      <Timer />
      <TaskDetails />
    </div>
  );
}

export default TimerScreen;
