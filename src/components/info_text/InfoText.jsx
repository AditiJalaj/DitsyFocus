import React from 'react';
import * as styles from './styles';
function InfoText(props) {
  return (
    <div style={styles.infoTextContainer}>
      <h1>Welcome back, name ! </h1>
      <h4>You have 4 tasks for today. All the best !</h4>
    </div>
  );
}

export default InfoText;
