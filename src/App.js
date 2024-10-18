import "./App.css";
import Calendar from "./Calendar";
import MainHeader from "./MainHeader";
import { useState } from "react";
import {tasks, films, can_watch} from "./data.js"

function App() {
    const [currentDay, setCurrentDay] = useState(1);

    const dayChange = (chosenDay) => {
        setCurrentDay(chosenDay);
    };

    return (
        <div className="App">
            <Sidebar currentDay={currentDay} handleClick={dayChange} />
            <Main currentDay={currentDay} />
        </div>
    );
}

function Sidebar({ currentDay, handleClick }) {
    return (
        <div className="Sidebar">
            <Calendar currentDay={currentDay} handleClick={handleClick} />
        </div>
    );
}

function Main({ currentDay }) {
    return (
        <div className="Main">
            <MainHeader currentDay={currentDay} />
            <Timetable />
        </div>
    );
}

function Timetable() {
    
    return (
        <div className="Timetable">
            <div className="graph_container">
                <h1>Tasks</h1>
                <div className="graph">
                    <div className="graph_content"></div>
                </div>
            </div>

            <div className="graph_container">
                <h1>Films</h1>
                <div className="graph">
                    <div className="graph_content"></div>
                </div>
            </div>

            <div className="graph_container">
                <h1>Can watch</h1>
                <div className="graph">
                    <div className="graph_content"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
