

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);



    //update day element 
    const updateDayElement = () => {
        dayElement = document.getElementById("day")
        dayElement.querySelector("span.percentage").innerHTML = getPercentageDayElapsed()
        dayElement.querySelector("span.day").innerHTML = getDayOfWeek()
        dayElement.querySelector("progress").value = getPercentageDayElapsed()
    }

    //update week element
    const updateWeekElement = () => {
        weekElement = document.getElementById("week")
        weekElement.querySelector("span.percentage").innerHTML = getPercentageWeekElapsed()
        weekElement.querySelector("progress").value = getPercentageWeekElapsed()
    }
    //update month element
    const updateMonthElement = () => {
        monthElement = document.getElementById("month")
        monthElement.querySelector("span.percentage").innerHTML = getPercentageMonthElapsed()
        monthElement.querySelector("span.month").innerHTML = getMonthOfYear()
        monthElement.querySelector("progress").value = getPercentageMonthElapsed()
    }
    //update year element
    const updateYearElement = () => {
        yearElement = document.getElementById("year")
        yearElement.querySelector("span.percentage").innerHTML = getPercentageYearElapsed()
        yearElement.querySelector("span.year").innerHTML = getYear()
        yearElement.querySelector("progress").value = getPercentageYearElapsed()
    }

    updateDayElement()
    updateMonthElement()
    updateWeekElement()
    updateYearElement()


}
