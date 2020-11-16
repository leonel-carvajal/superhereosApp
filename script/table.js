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
window.addEventListener('DOMContentLoaded', Paint)