import { time_converter } from "./timeCalculation";

export function objectToArray(object) {
    let array = Object.keys(object).map((upper_key) => {
        return [upper_key, Object.values(object[upper_key])];
    });

    array = empty_spaces(array);

    return array;
}

function empty_spaces(array) {

    const array_length = array.length;

    let add_count = 0;
    let end = 0;

    for(let i = 0; i < array_length; ++i) {

        const empty = ["empty"];

        const start = time_converter(array[i + add_count][1][0]);

        if(start === end) {
            end = time_converter(array[i + add_count][1][1]);
            continue;
        }

        const empty_start = time_converter(end, false);
        const empty_end = time_converter(start, false);

        empty.push([empty_start, empty_end]);

        end = time_converter(array[i + add_count][1][1]);

        array.splice(i + add_count, 0, empty);
        add_count += 1;
    }

    if(end < 1440) {
        array.push(
            ["empty", [time_converter(end, false), "24:00"]]
        )
    }

    return array;
}
