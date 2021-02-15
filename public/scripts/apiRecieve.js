let pollies;
    loadAPI();

async function loadAPI() {
    const api_url = 'externalApi';
    const response = await fetch(api_url);
    const json = await response.json();
        pollies = json;
    displayPollies();
}

function displayPollies() {
    let cont = "";
        for (let i = 0; i < pollies.length; i++) {
            cont += `${pollies[i].full_name}<br>`;
        }
    document.getElementById("result").innerHTML = cont;
}