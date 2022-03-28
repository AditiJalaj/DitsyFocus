import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai';
import { FaRegSquare } from 'react-icons/fa';
import * as styles from './styles';

function Timer(props) {
  return (
    <div style={styles.timerContainer}>
      <h2>45m : 28s</h2>
      <h4>out of 60 min</h4>
      <div style={styles.ctaContainer}>
        <button className='btn elevated flex al-center'>
          <BsFillPlayFill className='mr-s' />
          Start
        </button>
        <button className='btn semi-transparent flex al-center'>
          <AiOutlinePause className='mr-s' />
          Pause
        </button>
      </div>
      <button className='btn gradient flex al-center jc-center'>
        <FaRegSquare className='mr-s' />
        Reset
      </button>
    </div>
  );
}

export default Timer;
