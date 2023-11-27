async function getMatchdata(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e03d3570-fcae-4ebd-b56b-0f549fb002e2&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];

            const relevantData=matchesList.map(match => `${match.name.split(",")[0]}<br /> ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li id="match">${match} </li>`).join('<br />');

            return relevantData;
        })
        .catch(e => console.log(e));
}       

getMatchdata();