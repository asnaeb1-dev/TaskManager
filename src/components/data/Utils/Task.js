import { v4 } from "uuid";

class Task {
    #taskTitle;
    #taskType;
    #isTaskPrivate;
    #taskProgress;
    #taskPriority;
    #taskNoteColor;
    #taskTags;
    #taskStartTime;
    #taskEndTime;
    #taskDescription;

    constructor(taskTitle, taskType, isTaskPrivate, taskProgress) {
        this.taskTitle = taskTitle;
        this.taskType = taskType;
        this.taskId = `${v4()}`;
        this.isTaskPrivate = isTaskPrivate;
        this.taskProgress = taskProgress;
    }

    setStartTime(startTime) {
        this.taskStartTime = startTime;
    }

    setEndTime(endTime) {
        this.taskEndTime = endTime;
    }

    setTaskNoteColor(color) {
        this.taskNoteColor = color;
    }

    setTaskPriority(priority) {
        this.taskPriority = priority;
    }

    setTaskDescription(description) {
        this.taskDescription = description;
    }

    setTaskTags(tags) {
        this.taskTags = tags;
    }

    getTask() {
        return {
            taskTitle: this.taskTitle,
            taskType: this.taskType,
            taskId: this.taskId,
            isTaskPrivate: this.isTaskPrivate,
            taskProgress: this.taskProgress,
            taskPriority: this.taskPriority,
            taskNoteColor: this.taskNoteColor,
            taskTags: this.taskTags,
            taskStartTime: this.taskStartTime,
            taskEndTime: this.taskEndTime,
            taskDescription: this.taskDescription
        }
    }

    getAttribute(attribute) {
        switch (attribute) {
            case "taskTitle":
                return this.taskTitle;
            case "taskType":
                return this.taskType;
            case "taskId":
                return this.taskId;
            case "isTaskPrivate":
                return this.isTaskPrivate;
            case "taskProgress":
                return this.taskProgress;
            case "taskPriority":
                return this.taskPriority;
            case "taskNoteColor":
                return this.taskNoteColor;
            case "taskTags":
                return this.taskTags;
            case "taskStartTime":
                return this.taskStartTime;
            case "taskEndTime":
                return this.taskEndTime;
            case "taskDescription":
                return this.taskDescription;
            default:
                return null;
        }
    }


}