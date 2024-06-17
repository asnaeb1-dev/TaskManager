/**
 * DOC
 * @param {*} email 
 * @param {*} password 
 * @returns boolean
 * 
 * 1) email and password should not be empty
 * 2) password should have 
 *     i) one small letter
 *     ii) one big letter
 *      iii) one special character
 *      iv) one number
 *      v) no spaces
 *      vi) minimum length of 8 characters
 */
export const validateLogin = (email, password) => {
    if(!email || !password) return false;
    return true;
}

/**
 * 
 * @param {*} currentDate 
 * @param {*} endRange 
 * @param {*} startRange 
 * 
 * return - array of date ranging from start date to end date
 */
export const getDateRange = (currentDate = new Date(), endRange = 5) => {
    // console.log(today, todayEpoch, new Date(todayEpoch).getDate());
    const dateArr = [];
    for (let i = 0;i<endRange;i++) {
        const today = new Date(currentDate);
        const todayEpoch = today.setDate(today.getDate() + i);
        // console.log(new Date(todayEpoch).getDate());

        const resultDate = new Date(todayEpoch)
        dateArr.push(resultDate.setDate(resultDate.getDate()))
    }
    return dateArr
}

/**
 * 
 * @param {*} month 
 * @returns -month
 */
export const getMonth = (month) => {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "";
    }
}

/**
 * @param {*} day 
 * @returns day of the week
 */
export const getDay = (day) => {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "";
    }
}

/**
 * 
 * @returns a random color 
 */
export const getRandomColor = () => {
    return `
        rgba(
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)},
            1
        )
    `
}