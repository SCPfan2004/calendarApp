import React from "react";

const daysOfWeek = ["Mn", "Ts", "Wd", "Th", "Fr", "St", "Sn"];
const month = [];

let daysInMonth = 31;

for (let j = 0; daysInMonth > 0; ++j) {
    const daysRemainded =
        daysInMonth > 7 ? daysInMonth - (daysInMonth - 7) : daysInMonth;

    month.push(Array.from({ length: daysRemainded }, (_, l) => 1 + l + 7 * j));
    daysInMonth -= 7;
}

function Calendar({currentDay, handleClick}) {
    return (
        <div className="Calendar">
            <table>
                <tbody>
                    <tr>
                        {daysOfWeek.map((day, i) => {
                            return <th key={i}>{day}</th>;
                        })}
                    </tr>

                    {month.map((week, weekNumber) => {
                        return (
                            <tr key={weekNumber}>
                                {week.map((day) => {
                                    return (
                                        <td key={day}>
                                            {day === currentDay
                                            ? <button onClick={() => handleClick(day)} className="active">{day}</button>
                                            : <button onClick={() => handleClick(day)}>{day}</button>}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
