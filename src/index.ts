import { ChildProcessWithoutNullStreams } from "child_process";

// Array de objetos de las tareas
interface ITask {
    task: string, 
    completed: boolean 
}

const taskList: ITask[] = [
    {
        task: "poner la lavadora",
        completed: false
    },
    { 
        task: "preparar la cena",
        completed: false
    },
    {
        task: "hacer surf",
        completed: false
    }
];

console.table(taskList);

// Buscador de indice de las tareas en el array taskList
function searchingTask(newTask: string) : number {
    let found = false;
    let index = -1;
    let i = 0;

    while (i < taskList.length && !found) {
        if (newTask == taskList[i].task) {
            index = i;
            found = true;
        }
        i++;
    }
    return index;
}

// Agregar tareas
function addTask(newTask: string) {
    let taskIndex = searchingTask(newTask.toLowerCase());

    if (taskIndex === -1) {
        const addNewTask: {task: string, completed: boolean} = 
            {
            task: newTask,
            completed: false
            }
        
        taskList.push(addNewTask);
        return "Task added successfully";
    } else {
        return "Sorry but this task exists";
    }
    console.table(taskList);
}

// Borrar tareas
function deleteTask(oldTask: string) {
    let taskIndex = searchingTask(oldTask);

    console.log("task index: " + taskIndex);

    if (taskIndex >= 0) {
        taskList.splice(taskIndex, 1);
        return "Task deleted";

    } else {
        return "Sorry, this task doesn't exists";
    }
    console.table(taskList);

}

// Completar tareas
function completedTask(oldTask: string) {
    let taskIndex = searchingTask(oldTask);

    console.log("task index: " + taskIndex);

    if (taskIndex >= 0 && !taskList[taskIndex].completed) {
        taskList[taskIndex].task += ": done";
        taskList[taskIndex].completed = true;
        return "Task completed";

    } else {
        return "Sorry, this task doesn't exists or is completed";
    }
    console.table(taskList);
}

// Imprimir tareas
function printTask() {
    let show = "";
    //show = JSON.stringify(taskList.task);

    //const {task, completed} = taskList;
    //console.log(task);

    for (let i: number = 0; i < taskList.length; i++) {
        show +=  taskList[i].task + "\n";
    }
    return show;
}

exports.searching = searchingTask;
exports.add = addTask;
exports.list = taskList;
exports.deleteT = deleteTask;
exports.completedT = completedTask;
exports.printT = printTask;