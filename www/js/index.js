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

    //get time elapsed today expressed as a percentage
    var d = new Date();
    var pctDayElapsed = (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds() + d.getMilliseconds() / 1000) / 86400;

    console.log("percentageDayElapsed:", pctDayElapsed * 100)


    //get day of the week expressed as a percentage
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

    //get day of the month expressed as a percentage
    var today = new Date();
    var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    timeElapsed = (today - firstDay) / 1000
    totalTime = 2628288

    pctMonthElapsed = timeElapsed/totalTime

    console.log("pctMonthElapsed",pctMonthElapsed*100 )


    //get day of the year expressed as a percentage
    var firstDay= new Date(new Date().getFullYear(), 0, 1);
    var today = new Date()

    timeElapsed = (today - firstDay) / 1000
    totalTime =31536000 

    pctYearElapsed = timeElapsed / totalTime

    console.log("pctYearElapsed",pctYearElapsed*100)



}
