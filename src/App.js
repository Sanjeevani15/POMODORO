import {useContext } from "react";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";

function App() {

  const{pomodoro,executing,setCurrentTimer,settingBtn,children,startAnimate,startTimer,pauseTimer}=useContext(SettingContext)

  // useEffect(() => {updateExecute(executing)}, [executing,startAnimate])
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way</small>
      {pomodoro !== 0?
        <SetPomodoro/>:
        <>
        <ul className="labels">
          <li>
            <Button 
            title="Work"
            activeClass={executing.active === 'work'? 'active-label' : undefined}
            _callback={()=>setCurrentTimer('work')}
            />
          </li>

          <li>
            <Button 
            title="Short Break"
            activeClass={executing.active === 'short' && 'active-label'} 
            _callback={()=>setCurrentTimer('short')}
            />
          </li>

          <li>
            <Button 
            title="Long Break"
            activeClass={executing.active==='long' ? 'active-label' : undefined}
            _callback={()=>setCurrentTimer('long')}
            />
          </li>
        </ul>


        <Button title="Settings" _callback={settingBtn}/>

        <div className="timer-container">
          <div className="time-wrapper">
           <CountdownAnimation
            key={pomodoro}
            timer={pomodoro}
            animate={startAnimate}
           >
             {children}
           </CountdownAnimation>
          </div>
        </div>

          <div className="button-wrapper">
          <Button title="Start" className={!startAnimate?'active':undefined} _callback={startTimer} />
          <Button title="Pause" className={startAnimate?'active':undefined} _callback={pauseTimer} />

          </div>

        </>
    }
    
    
    </div>
  );
}

export default App;
