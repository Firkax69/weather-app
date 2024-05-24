const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener('submit', e => {
    e.preventDefault()
})

searchBtn.addEventListener('click', async () => {
    if (!searchInput.value) return;
    // get data from weather();            *** NEEDS FINISHING ***
    // set obtained data to view();        *** NEEDS FINISHING ***
})