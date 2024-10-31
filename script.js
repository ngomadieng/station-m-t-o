const apikey= 'd97968c1599a9431bf25537517f5db3e';

function obtenirMeteo(){
    const city= document.getElementById('city').value;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response=> response.json())
        .then(data=>{
            const temperature= data.main.temp;
            const humidity= data.main.humidity;
            const vitesse_du_vent= data.wind.speed;

            document.getElementById('result').innerHTML=`
            <P> temperature: ${temperature}C</p>
            <P> humidite: ${humidity}%</p>
            <p> vitesse du vent= ${vitesse_du_vent}km/h</p>`;
        })
        .catch(error=>{
            console.error('Erreur:',error);
            document.getElementById('result').innerHTML='Ville non trouve';


        });
}