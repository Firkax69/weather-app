/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\nconst searchForm = document.getElementById('searchForm');\nconst searchInput = document.getElementById('searchInput');\nconst searchBtn = document.getElementById('searchBtn');\n\nsearchForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n})\n\nsearchBtn.addEventListener('click', async () => {\n    if (!searchInput.value) return;\n    // get data from weather();      \n    const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(searchInput.value);\n    // set obtained data to display();     \n    _modules_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSearchResult(weatherData);\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst display = (() => {\n    function setSearchResult(weatherData) {\n        if (!weatherData) return;\n\n        const searchResult = document.getElementById('searchResult');\n        searchResult.classList.add('active');\n\n        const cityName = document.getElementById('cityName');\n        const temperature = document.getElementById('temperature');\n        const feelsLike = document.getElementById('feelsLike');\n        const humidity = document.getElementById('humidity');\n        const wind = document.getElementById('wind');\n        const pressure = document.getElementById('pressure');\n\n        cityName.textContent = `${weatherData.cityName}`;\n        temperature.textContent = `${weatherData.temperature} °C`;\n        feelsLike.textContent = `${weatherData.feelsLike} °C`;\n        humidity.textContent = `${weatherData.humidity} %`;\n        wind.textContent = `${weatherData.windSpeed} km/h`;\n        pressure.textContent = `${weatherData.pressure} hPa`;\n    }\n\n    return { setSearchResult };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://weather-app/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weather = (() => {\n    function convertData(data) {\n        const {\n            name: cityName,\n            main: { temp: temperature, feels_like: feelsLike, humidity, pressure },\n            wind: { speed: windSpeed },\n        } = data;\n\n        const temperatureCelsius = temperature - 273.15;\n        const feelsLikeCelsius = feelsLike - 273.15;\n\n        return { cityName, temperature: temperatureCelsius.toFixed(2), feelsLike: feelsLikeCelsius.toFixed(2), humidity, windSpeed, pressure };\n    }\n\n    async function getData(city) {\n        try {\n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=e7cca6d251d2b69562014fc45e0b0b92`, { mode: 'cors' });\n            if (!response.ok) throw new Error(`City ${city} not found`)\n            const data = convertData(await response.json())\n            return data\n        } catch (error) {\n            alert(error)\n            return null\n        }\n    }\n\n    return { getData };\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;