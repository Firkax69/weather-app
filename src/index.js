import weather from "./modules/weather";

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(await weather.getData(searchInput.value));
})

// searchBtn.addEventListener('click', async () => {
//     if (!searchInput.value) return;
//     // get data from weather();            *** NEEDS FINISHING ***
//     // set obtained data to display();        *** NEEDS FINISHING ***
//     console.log(await weather.getData(searchInput.value))
// })