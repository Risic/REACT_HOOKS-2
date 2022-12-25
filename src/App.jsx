import './App.css';
import Timer from './Components/Timer';
import InfiniteTimer from './Components/InfiniteTimer';

function App() {
  return (
    <div className="App">
      <Timer
        id={1}
        time={7} 
        autoStart={true} 
        step={1} 
        onTick={(time, id) => console.log("У таймера " + id + " залишилось часу: " + time)}
        onTimeStart={(id) => console.log("Таймер " + id + " запущено!")}
        onTimePause={(id) => console.log("Таймер " + id + " на паузі!")}
        onTimeEnd={(id) => console.log("Час таймера " + id + " вийшов!")}
      />
      <Timer
        id={2}
        time={60} 
        autoStart={true} 
        step={2} 
        onTick={(time, id) => console.log("У таймера " + id + " залишилось часу: " + time)}
        onTimeStart={(id) => console.log("Таймер " + id + " запущено!")}
        onTimePause={(id) => console.log("Таймер " + id + " на паузі!")}
        onTimeEnd={(id) => console.log("Час таймера " + id + " вийшов!")}
      />
      <InfiniteTimer
        id={3}
        time={7} 
        autoStart={true} 
        step={1} 
        onTick={(time, id) => console.log("У таймера " + id + " залишилось часу: " + time)}
        onTimeStart={(id) => console.log("Таймер " + id + " запущено!")}
        onTimePause={(id) => console.log("Таймер " + id + " на паузі!")}
      />
    </div>
  );
}

export default App;
