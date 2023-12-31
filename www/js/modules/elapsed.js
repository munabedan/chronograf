//get time elapsed today expressed as a percentage
const getPercentageDayElapsed = () => {
    var d = new Date();
    var pctDayElapsed = (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000) / 86400;

    console.log("percentageDayElapsed:", pctDayElapsed * 100)
    return (pctDayElapsed * 100).toFixed(1)
}




//get day of the week expressed as a percentage

const getPercentageWeekElapsed = () => {
    function getMonday(d) {
        d = new Date(d);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }

    monday = getMonday(new Date())
    today = new Date()

    timeElapsed = (today - monday) / 1000
    totalTime = 604800

    pctWeekElapsed = timeElapsed / totalTime
    console.log("pctWeekElapsed", pctWeekElapsed * 100)
    return (pctWeekElapsed * 100).toFixed(1)


}

//get day of the month expressed as a percentage
const getPercentageMonthElapsed = () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const nextMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const totalDaysInMonth = Math.floor((nextMonthFirstDay - firstDay) / (1000 * 60 * 60 * 24)); // Calculate days in the current month

    const currentDate = today.getDate();

    const pctMonthElapsed = (currentDate / totalDaysInMonth) * 100;

    console.log("pctMonthElapsed", pctMonthElapsed);
    return pctMonthElapsed.toFixed(1); // Return the percentage rounded to 2 decimal places
}




//get day of the year expressed as a percentage
const getPercentageYearElapsed = () => {
    var firstDay = new Date(new Date().getFullYear(), 0, 1);
    var today = new Date()

    timeElapsed = (today - firstDay) / 1000
    totalTime = 31536000

    pctYearElapsed = timeElapsed / totalTime

    console.log("pctYearElapsed", pctYearElapsed * 100)
    return (pctYearElapsed * 100).toFixed(1)

}

//get day of week by name
const getDayOfWeek = () => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = new Date();
    return date = days[date.getDay()];
}

//get month of year by name

const getMonthOfYear = () => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date();
    return date = months[date.getMonth()];

}

//get Year
const getYear = () => {
    var date = new Date();
    return date.getFullYear()
}