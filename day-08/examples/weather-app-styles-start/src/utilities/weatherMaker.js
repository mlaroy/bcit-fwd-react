// WeatherMaker

import { capitalizeFirstLetter } from '../utilities/utilities';

// Days and Months
const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Weather images
const wi = {

    cloudy: 'wi-cloudy.jpg',
    fog: 'wi-fog.jpg',
    thunderstorms: 'wi-thunderstorms.jpg',
    partlySunny: 'wi-partly-sunny.jpg',
    rain: 'wi-rain.jpg',
    snow: 'wi-snow.jpg',
    sunny: 'wi-sunny.jpg',
    noIcon: 'wi-no-icon.jpg'

}

function setDate(forecast = false, dt){

    // Convert OpenWeatherMap Time Stamp

    // Add Three Zeros to end of OpenWeatherMap
    // time stamp...
    // ...This is needed as the time stamp from 
    // OpenWeatherMap is only 10 digits long...
    // ...but JavaScript's Date() constructor
    // requires timestamps to be 13 digits long
    dt = dt + '000';
    // Convert string number back to a number
    dt = dt*1;

    let date = new Date(dt);

    if(forecast === true){

        let dayName = daysShort[date.getDay()];
        let monthName = monthsShort[date.getMonth()];
        let dayNumber = date.getDate();

        return `${dayName} ${monthName} ${dayNumber}`;

    }else {

        let dayName = daysLong[date.getDay()];
        let monthName = monthsLong[date.getMonth()];
        let dayNumber = date.getDate();
        let year = date.getFullYear();

        return `${dayName}, ${monthName} ${dayNumber}, ${year}`;
    
    }
    
}

function setImageAndWeatherName(id){

    let obj = {}
    if(id >= 200 && id <= 232){
        obj.name = 'Thunderstorms';
        obj.icon = wi.thunderstorms
    }else if((id >= 300 && id <= 321) || (id >=500 && id <= 531)){
        obj.name = 'Rain';
        obj.icon = wi.rain;
    }else if(id >= 600 && id <= 622){
        obj.name = 'Snow';
        obj.icon = wi.snow;
    }else if(id === 800){
        obj.name = 'Sunny';
        obj.icon = wi.sunny; 
    }else if(id === 801 || id === 802){
        obj.name = 'Partly sunny';
        obj.icon = wi.partlySunny; 
    }else if(id === 803 || id === 804){
        obj.name = 'Cloudy';
        obj.icon = wi.cloudy;
    }else if(id === 701){
        obj.name = 'Mist';
        obj.icon = wi.fog;
    }else if(id === 711){
        obj.name = 'Smoke';
        obj.icon = wi.fog;
    }else if(id === 721){
        obj.name = 'Haze';
        obj.icon = wi.fog
    }else if(id === 731 || id === 761){
        obj.name = 'Dust';
        obj.icon = wi.fog;
    }else if(id === 741){
        obj.name = 'Mist';
        obj.icon = wi.fog;
    }else if(id === 751){
        obj.name = 'Sand';
        obj.icon = wi.fog;
    }else if(762){
        obj.name = 'Volcanic ash';
        obj.icon = wi.fog;
    }else if(id === 771){
        obj.name = 'Squalls';
        obj.icon = wi.fog;
    }else if(id === 771){
        obj.name = 'Tornado';
        obj.icon = wi.fog;
    }else{
        obj.name = 'Unknown';
        obj.icon = wi.noIcon;
    }

    return obj;

}

export const fiveDayForecast = (wdAPI) => {

    let arr = [];
    wdAPI.forEach((item) => {
        const obj = {};
        obj.date = setDate(true, item.dt);
        const weatherIcon = setImageAndWeatherName(item.weather[0].id);
        obj.icon = weatherIcon.icon
        obj.name = weatherIcon.name;
        obj.temp = Math.round(item.temp.day);
        arr.push(obj);       
    });

    return arr;

}

export const localCurrentWeather = (wdAPI, loc) => {

    const weatherIcon = setImageAndWeatherName(wdAPI.weather[0].id);
    const processedWD = {};

    processedWD.city = loc.city;
    processedWD.country = loc.country;
    processedWD.temp = Math.round(wdAPI.temp);
    processedWD.date = setDate(false, wdAPI.dt);
    processedWD.icon = weatherIcon.icon;
    processedWD.name = weatherIcon.name;
    processedWD.description =  capitalizeFirstLetter(wdAPI.weather[0].description);
    
    return processedWD;

}

export const oneCityTodayWeather = (wdAPI, loc) => {
    
    const weatherIcon = setImageAndWeatherName(wdAPI.weather[0].id);
    const processedWD = {};
    
    processedWD.city = loc.city;
    processedWD.country = loc.country;
    processedWD.temp = Math.round(wdAPI.temp);
    processedWD.icon = weatherIcon.icon;
    processedWD.name = weatherIcon.name;
    
    return processedWD;

}

