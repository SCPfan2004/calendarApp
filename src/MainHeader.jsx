import React from "react"

function MainContainerHeader({ currentDay }) {
    let wordRemainder = "th";

    if (currentDay < 10 || currentDay > 20) {
        switch (currentDay % 10) {
            case 1:
                wordRemainder = "st";
                break;
            case 2:
                wordRemainder = "nd";
                break;
            case 3:
                wordRemainder = "rd";
                break;
            default:
                wordRemainder = "th";
                break;
        }
    }

    return (
        <header className="MainHeader">
            <div className="common_container">
                <div>
                    <h1>
                        Tasks and films on {currentDay}-{wordRemainder}
                    </h1>
                </div>

                <AddTaskButton />
            </div>
        </header>
    );
}

function AddTaskButton() {
    return (
        <div className="AddTaskButton">
            <div>
                <button>Add Task</button>
            </div>
        </div>
    );
}

export default MainContainerHeader;