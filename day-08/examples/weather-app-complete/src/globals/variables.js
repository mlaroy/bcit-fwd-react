// Global Variables

// API Variables

// Open Weather API Variables
// Use the next line when testing the Open Weather API to prevent
// being locked out accidentally by making too many calls
// to the API
// const OW_API_KEY_ONLY = '000';
export const OW_API_KEY_ONLY = '226e40cf0b6b7a57ede4b27eaa8b180d';
export const OW_API_KEY = `&appid=${OW_API_KEY_ONLY}`;
export const OW_BASE_URL = `https://api.openweathermap.org/data/2.5/onecall?`;
export const OW_API_DATA_MODE = '&mode=json';
export const OW_API_DATA_UNITS = '&units=metric';

// OpenCage Data API Variables
// Use the next line when testing the Open Cage API to prevent
// being locked out accidentally by making too many calls
// to the API
const OC_API_KEY_ONLY = '000';
// const OC_API_KEY_ONLY = 'replace-this-string-with-your-api-key';
export const OC_API_KEY = `&key=${OC_API_KEY_ONLY}`;
export const OC_BASE_URL = `https://api.opencagedata.com/geocode/v1/json?&q=`;
// General App Settings
export const APP_FOLDER_NAME = '/weather-app';
export const MAX_NUMBER_OF_CITIES = 5;

// LocalStorage Defaults
export const STORAGE_CURRENT_CITY = 'weather-app-current-city';
export const STORAGE_YOUR_CITIES = 'weather-app-your-cities';

// Default City
export const DEFAULT_CITY = 'Vancouver';
export const DEFAULT_COUNTRY = 'Canada';
export const DEFAULT_REGION = 'North America';
export const DEFAULT_LAT = 49.2827;
export const DEFAULT_LON = -123.1207;
