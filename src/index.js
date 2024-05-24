import weather from "./modules/weather";
import display from "./modules/display";

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
})

searchBtn.addEventListener('click', async () => {
    if (!searchInput.value) return;
    // get data from weather();      
    const weatherData = await weather.getData(searchInput.value);
    // set obtained data to display();     
    display.setSearchResult(weatherData);
})