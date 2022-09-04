// do not show api keys on your js file ,don not use my api keys ..create your own ..ok
const API_KEY=`8820e3e0b850186114fb39f5a85904cc`
const loadTemperture=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const displayTemperature=data=>{
    setInnerTextById('temperature',data.main.temp)
    setInnerTextById('condition',data.weather[0].main)
    // const tempurature=document.getElementById('tempurature')
    console.log(data.weather[0].main)
    // tempurature.innerText=data.main.temp;
}
const setInnerTextById=(id,text)=>{
    const tempurature=document.getElementById(id)
    tempurature.innerText=text;
}
document.getElementById('btn-search').addEventListener('click',function(){
    const searchField=document.getElementById('search-field');
    const city=searchField.value ;
    document.getElementById('city-name').innerText=city;
    loadTemperture(city);
})
loadTemperture('dhaka')