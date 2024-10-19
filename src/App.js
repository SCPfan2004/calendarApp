import { useState } from "react";
import { useEffect } from "react";
import useMultiRefs from "./useMultiRefs.js"

import "./App.css";
import Calendar from "./Calendar";
import MainHeader from "./MainHeader";
import Graphs from "./Graphs";
import EventInfo from "./EventInfo";

import { tasks, films, can_watch } from "./data.js";
import { objectToArray } from "./objectToArray.js";


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
    const [chosenEvent, setChosenEvent] = useState([]);
    const [multiRefs, addRef] = useMultiRefs();

    const handleClick = (event) => {
        setChosenEvent(event);
    }

    const handleScroll = (e, ind) => {
        const {scrollLeft} = e.target;

        const elements = multiRefs();

        elements.forEach((ref) => {
            ref.scrollLeft = scrollLeft;
        })
    }

    const titles = ["Tasks", "Films", "Can watch"];

    const arrayTasks = objectToArray(tasks);
    const arrayFilms = objectToArray(films);
    const arrayCanWatch = objectToArray(can_watch);

    const fields = [arrayTasks, arrayFilms, arrayCanWatch];

    return (
        <div className="Timetable">
            {titles.map((title, category) => {
                return (
                    <div key={category} className="graph_container">
                        <h1>{title}</h1>
                        <div className="graph" onScroll={handleScroll} ref={addRef}>
                            <div className="graph_content">
                                <div className="content_container">
                                    <Graphs fields={fields} category={category} handleClick={handleClick} chosenEvent={chosenEvent}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="event_info">
                <EventInfo chosenEvent={chosenEvent}/>
            </div>

        </div>
    );
}

export default App;
