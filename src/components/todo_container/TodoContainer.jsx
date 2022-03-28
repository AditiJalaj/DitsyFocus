import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import * as styles from './styles';

const todo = ['Math Homework', 'English Homework', 'Science Homework', 'Geography Homework'];

const TodoItem = ({ item }) => (
  <div style={styles.todoHeading}>
    <h4>{item}</h4>
    <div style={styles.iconContainer}>
      <BiNote style={styles.icon} />
      <AiOutlineDelete style={styles.icon} />
    </div>
  </div>
);

function TodoContainer(props) {
  return (
    <div style={styles.todoContainer}>
      <div style={styles.todoHeading}>
        <h2>To - Do List</h2>
        <button className='only-icon-btn'>
          <AiOutlinePlus />
        </button>
      </div>
      {todo.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}

export default TodoContainer;
