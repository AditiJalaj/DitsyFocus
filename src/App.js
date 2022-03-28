import './App.css';
import InfoText from './components/info_text/InfoText';
import TodoContainer from './components/todo_container/TodoContainer';
import TimerScreen from './screens/timer/TimerScreen';

function App() {
  return (
    <>
      <InfoText />
      <TodoContainer />
      <TimerScreen />
    </>
  );
}

export default App;
