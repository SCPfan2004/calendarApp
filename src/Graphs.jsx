import { time_converter } from "./timeCalculation.js";

function Graphs({ fields, category, handleClick, chosenEvent }) {
    return fields[category].map((event, id) => {
        return (
            <>
                {event[0] === "empty" ? (
                    <div
                        style={{
                            width: (time_converter(event[1][1]) - time_converter(event[1][0])) * 0.125 + "rem",
                        }}
                    ></div>
                ) : event[0] === chosenEvent[0] ? (
                    <div
                        className="event active"
                        style={{ width: (time_converter(event[1][1]) - time_converter(event[1][0])) * 0.125 + "rem" }}
                    ></div>
                ) : (
                    <div
                        className="event"
                        onClick={() => handleClick(event)}
                        style={{ width: (time_converter(event[1][1]) - time_converter(event[1][0])) * 0.125 + "rem" }}
                    ></div>
                )}
            </>
        );
    });
}

export default Graphs;