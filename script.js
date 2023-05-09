const url = "https://api.openweathermap.org/data/2.5/"
const key = "2833d555dee3517850f7e12386dc9f3f"

const setQuery = (e)=>{
    if(e.keyCode == "13"){
        getQuery(searchBar.value);
    }
}

function getQuery(cityName){
    fetch(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`)
    .then((response)=>{
        return response.json();
    })
    .then(displayResult);
    searchBar.value = "";
}

const displayResult = (result) =>{
    let city =  document.querySelector(".city")
    city.innerHTML = `${result.name} , ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.round(result.main.temp)}°C`

    let description = document.querySelector(".desc")
    description.innerHTML = `${result.weather[0].description}`
    if(description.innerHTML == "kapalı" || description.innerHTML == "az bulutlu" || description.innerHTML == "parçalı az bulutlu"){
        const i = document.createElement("i");
        i.className="fa-solid fa-cloud size";
        description.appendChild(i);
    }else if(description.innerHTML == "açık"){
        const i = document.createElement("i");
        i.className="fa-solid fa-sun size";
        description.appendChild(i);
    }else if(description.innerHTML == "parçalı bulutlu" ){
        const i = document.createElement("i");
        i.className="fa-solid fa-cloud-sun size";
        description.appendChild(i);
    }else if(description.innerHTML == "hafif yağmur"){
        const i = document.createElement("i");
        i.className="fa-solid fa-cloud-showers-heavy size";
        description.appendChild(i);
    }else if(description.innerHTML == "kar yağışlı"){
        const i = document.createElement("i");
        i.className="fa-solid fa-cloud-meatball size";
        description.appendChild(i);
    }

    let minmax = document.querySelector(".minmax")
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C `
}


const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keypress", setQuery)





