import {timeCalculation} from "./timeCalculation";

export const tasks = {
    Task1: {
        start: "8:00",
        end: "8:30",
    },

    Task2: {
        start: "11:00",
        end: "16:00",
    },

    Task4: {
        start: "18:10",
        end: "18:20",
    },

    Task5: {
        start: "19:00",
        end: "20:00",
    },
};

export const films = {
    Film1: {
        start: "0:05",
        end: "1:30",
    },

    Film2: {
        start: "1:35",
        end: "2:50",
    },

    Film3: {
        start: "3:00",
        end: "5:45",
    },

    Film4: {
        start: "5:50",
        end: "6:10",
    },

    Film5: {
        start: "6:15",
        end: "7:30",
    },

    Film6: {
        start: "8:00",
        end: "9:45",
    },

    Film7: {
        start: "10:00",
        end: "10:50",
    },

    Film8: {
        start: "11:05",
        end: "12:30",
    },

    Film9: {
        start: "12:35",
        end: "14:30",
    },

    Film10: {
        start: "14:40",
        end: "16:00",
    },

    Film11: {
        start: "16:10",
        end: "17:30",
    },

    Film12: {
        start: "17:35",
        end: "18:10",
    },

    Film13: {
        start: "18:15",
        end: "19:30",
    },

    Film14: {
        start: "19:40",
        end: "22:20",
    },

    Film15: {
        start: "22:25",
        end: "23:50",
    },
};

export const can_watch = timeCalculation(tasks, films);