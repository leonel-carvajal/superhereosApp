const tableBody = document.getElementById('tableBody')

const Cargar = async () => {
    try {
        const response = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


const Paint =  async() => {
    google.charts.load('current', { 'packages': ['table'] });
    google.charts.setOnLoadCallback(drawTable);
    
    function drawTable ()  {
        fetch('https://akabab.github.io/superhero-api/api/all.json')
            .then(res=>res.json()
            .then(response=>{
                var data = new google.visualization.DataTable()
                data.addColumn('string', 'Nombre');
                data.addColumn('number', 'Inteligencia');
                data.addColumn('number', 'Fuerza');
                data.addColumn('number','Velocidad');
                data.addColumn('number','Poder');
                data.addColumn('number','Combate')
                for (const dt of response) {
                    data.addRows([ [dt.name, dt.powerstats.intelligence,dt.powerstats.strength,
                    dt.powerstats.speed,dt.powerstats.power,dt.powerstats.combat]]);
                }
                var table = new google.visualization.Table(document.getElementById('table_div'));
                table.draw(data, { showRowNumber: true, width: '100%', height: '100%',page:'enable',pageSize:'50',cssClassNames:{headerRow:'trHeader',oddTableRow:'trOdd',selectedTableRow:'trSelected',hoverTableRow:'trHover'} });
            }));
    }
}


/*
const Paint = async()=>{
    const datos = await Cargar()
    const fragment = document.createDocumentFragment();
    for (const data of datos) {
        const TR = document.createElement('tr')
        const img = document.createElement('img')
        const tdImg =document.createElement('td')
        const tdId = document.createElement('td')
        let id = parseInt(data.id)
        tdId.textContent = `${id}`
        const tdName = document.createElement('td')
        tdName.textContent = `${data.name}`
        const tdInte = document.createElement('td')
        tdInte.textContent = `${parseInt(data.powerstats.intelligence)}`
        const tdfuerza = document.createElement('td')
        tdfuerza.textContent = `${parseInt(data.powerstats.strength)}`
        const tdVelo = document.createElement('td')
        tdVelo.textContent = `${parseInt(data.powerstats.speed)}`
        const tdDura = document.createElement('td')
        tdDura.textContent = `${parseInt(data.powerstats.durability)}`
        const tdpoder = document.createElement('td')
        tdpoder.textContent = `${parseInt(data.powerstats.power)}`
        const tdcomba =document.createElement('td')
        tdcomba.textContent = `${parseInt(data.powerstats.combat)}`
        img.src = `${data.images.xs}`
        tdImg.appendChild(img)
        TR.appendChild(tdImg)
        TR.appendChild(tdId)
        TR.appendChild(tdName)
        TR.appendChild(tdInte)
        TR.appendChild(tdfuerza)
        TR.appendChild(tdVelo)
        TR.appendChild(tdDura)
        TR.appendChild(tdpoder)
        TR.appendChild(tdcomba)
        parseInt(tdId)
        fragment.appendChild(TR)
    }
    
    tableBody.appendChild(fragment);

}
*/
window.addEventListener('DOMContentLoaded', Paint)