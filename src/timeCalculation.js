export function timeCalculation(tasks, films) {
    let can_watch = {};

    tasks = objectMap(tasks, time_converter);
    films = objectMap(films, time_converter);

    const newTasks = [];
    Object.keys(tasks).forEach((key) => {
        newTasks.push(tasks[key]);
    });

    tasks = newTasks;

    Object.keys(films).forEach((film_key) => {
        const start = films[film_key]["start"];
        const end = films[film_key]["end"];

        let toAdd = false;

        if(end > tasks[0]["start"]) {

            for (let i = 0; i < tasks.length; ++i) {

                if (start >= tasks[i]["end"]) {
                    if(i === tasks.length - 1) {
                        toAdd = true;
                        break;
                    } else if(end <= tasks[i + 1]["start"]) {
                        toAdd = true;
                        break;
                    }
                }
            }

            if(toAdd) can_watch[film_key] = films[film_key];

        } else {
            can_watch[film_key] = films[film_key];
        }
    });

    can_watch = objectMap(can_watch, time_converter, false);

    return can_watch;
}

function objectMap(obj, func, ...args) {
    const new_object = {};

    Object.keys(obj).forEach((key) => {
        const isObject = obj && typeof obj[key] === "object";

        if (isObject) {
            new_object[key] = objectMap(obj[key], func, args[0]);
        } else {
            new_object[key] = func(obj[key], args[0]);
        }
    });

    return new_object;
}

export function time_converter(time, string_to_int = true) {
    let converted_time = 0;

    if(string_to_int) {
        if(typeof time !== "string") {
            return NaN;
        }

        const colon_position = time.indexOf(":");

        const hours = parseInt(time.slice(0, colon_position));
        const minutes = parseInt(time.slice(colon_position + 1));

        converted_time = hours * 60 + minutes;

    } else {
        if(typeof time !== "number") {
            return NaN;
        }

        let hours = 0;
        let minutes = 0;

        while(time >= 60) {
            hours += 1;
            time -= 60;    
        }
        minutes = time;

        (minutes < 10) ? minutes = "0" + minutes.toString() : minutes = minutes.toString()

        converted_time = hours.toString() + ":" + minutes;
    }

    return converted_time;
}
