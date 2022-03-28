import React from 'react';
import * as styles from './styles';

export const taskDetails = {
  title: 'Geography Homework',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquenter conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.',
  tags: ['work', 'school'],
};
function TaskDetails(props) {
  return (
    <div style={styles.taskDetailsContainer}>
      <h3>{taskDetails.title}</h3>
      <div>{taskDetails.details}</div>
      <strong>Tags</strong>
      {taskDetails.tags.map((item, index) => (
        <button style={styles.tagBtn} key={index} className='btn gradient-border'>
          {item}
        </button>
      ))}
      <p>Date added : 16 Feb 2022</p>
    </div>
  );
}

export default TaskDetails;
