export const APP_TITLE = "Tasker";

export const PATHS = {
    LOGIN_PATH: "/login",
    DASHBOARD: "/dashboard",
    LANDING_PAGE: "/",
    TIMELINE: "/timeline",
    FAVOURITES: "/favorites",
    SETTINGS: "/settings",
};

export const APP_DESIGN_COLORS = {
    MAIN_COLOR: "rgb(234, 179, 8)",
    MAIN_COLOR_BGX: "rgba(234, 179, 8, .4)"
}

// Strings in the app
export const ACCOUNT_CREATION_FAILED = "Account creation failed!";
export const ACCOUNT_CREATION_SUCCESS = "Account created successfully!";
export const LOGIN_FAILED = "Login failed!";
export const LOGIN_SUCCESS = "Login successful!";
export const LOGOUT_FAILED = "Logout failed!";
export const LOGOUT_SUCCESS = "Logout successful!";
export const GOOGLE_LOGIN_SUCCESS = "Google login succeeded!";
export const SELECT_NOTES_COLOR = "Select Note Color";
export const EMPTY_NOTES = "No Tasks here";
export const ADD_NOTE = "Add Note";
export const TODO_TYPE = "Todo Type";
export const PROGRESS_TASK = "Task Progress";
export const TODO_TYPES =  {
    TASK: "Task",
    HABIT: "Habit",
    CHORE: "Chore",
    MISC: "Misc",
    REMINDER: "Reminder"
}

export const NOTES_COLOR = [
    "#e94452",
    "#f68795",
    "#23cce3",
    "#75eab5",
    "#ff9234",
    "#323c45",
    "#edf16a",
    "#cee4f2",
    "#ced6d9",
    "#fae45c",
    "#fad200",
    "#e3e6f5",
    "#71e8b2"
]

export const  ResponseType = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    LOADING: "loading",
}

export const LOGIN_OBJECT = {
    emailAddress: "",
    password: ""
}

export const TaskPriority = {
    MEDIUM: "medium",
    LOW: "low",
    HIGH: "high"
}

export const TaskProgressState = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
}

export const DB_INSTANCES = {
    USERS_INSTANCE : "users",
    TASKS_INSTANCE : "tasks",
    NOTES_INSTANCE : "notes"
}