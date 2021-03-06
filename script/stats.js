
const rangos = document.getElementById('rangos')
const contGrafico = document.getElementById('myChart')
const imgcard = document.getElementById('img_card')
const nom = document.getElementById('nombre')

const animacionBanner = () => {
    const letraUno = document.querySelector('.container__fondo__letra1')
    letraUno.classList.add('magictime', 'boingInUp')
    const letraDos = document.querySelector('.container__fondo__letra2')
    letraDos.classList.add('magictime', 'boingInUp')
    const letraTres = document.querySelector('.container__fondo__letra3')
    letraTres.classList.add('magictime', 'boingInUp')
    const letraCuatro = document.querySelector('.container__fondo__letra4')
    letraCuatro.classList.add('magictime', 'boingInUp')
    const letraCinco = document.querySelector('.container__fondo__letra5')
    letraCinco.classList.add('magictime', 'boingInUp')
}
const animationBannerQuit = () => {
    const letraUno = document.querySelector('.container__fondo__letra1')
    letraUno.classList.remove('magictime', 'boingInUp')
    const letraDos = document.querySelector('.container__fondo__letra2')
    letraDos.classList.remove('magictime', 'boingInUp')
    const letraTres = document.querySelector('.container__fondo__letra3')
    letraTres.classList.remove('magictime', 'boingInUp')
    const letraCuatro = document.querySelector('.container__fondo__letra4')
    letraCuatro.classList.remove('magictime', 'boingInUp')
    const letraCinco = document.querySelector('.container__fondo__letra5')
    letraCinco.classList.remove('magictime', 'boingInUp')
}
setTimeout(animacionBanner, 400)
setTimeout(animationBannerQuit, 2000)

// const grafico = (n1=0,n2=0,n3=0,n4=0,n5=0,n6=0)=>{

// /*
//     let ctx = document.getElementById('myChart').getContext('2d');
//     myChart = new Chart(ctx, {
//         type: 'polarArea',
//         data: {
//             labels: ['Inteligencia', 'Combate', 'Velocidad', 'Durabilidad', 'Poder', 'Fuerza'],
//             datasets: [{
//                 label: 'Estadistícas',
//                 data: [n1, n2, n3, n4,n5, n6],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.6)',
//                     'rgba(54, 162, 235, 0.6)',
//                     'rgba(255, 206, 86, 0.6)',
//                     'rgba(75, 192, 192, 0.6)',
//                     'rgba(153, 102, 255, 0.6)',
//                     'rgba(255, 159, 64, 0.6)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             title: {
//                 display: true,
//                 text: 'Estadistícas',
//                 fontColor: '#000',
//                 fontSize: 20,
//                 fontStyle: 'bold'

//             },
//             legend: {
//                 display: true,
//                 labels: {
//                     fontSize: 16,
//                     fontColor: '#000'
//                 }
//             },
//             scales: {
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });*/

// }



const getCharacters = async()=>{
    try {
        const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
const grafico = (n1=0, n2=0, n3=0, n4=0, n5=0,n6=0) => {

    google.charts.load("current", {
        packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable([
            ['Stats', '',{role:'style'},{role:'annotation'}],
            ['Inteligencia', n1,'blue','In'],
            ['Fuerza', n2,'red','St'],
            ['Velocidad', n3,'yellow','Spe'],
            ['Durabilidad', n4,'crimson','Dur'],
            ['Poder', n5,'black','Po'],
            ['Combate', n6, 'stroke-color: #703593; stroke-width: 2; fill-color: #C5A5CF','Co']
        ]);

        let options = {
            title: 'Estadistícas',
            titleTextStyle:{
                color:'royalblue',
                fontSize:24,
                bold:true,
                fontName:'Arial'
            },
            subtitle:'powerstats',
            backgroundColor:'#222',
            pieHole: 0.4,
            pieSliceTextStyle:{
                color:'#fff'
            }
        };

        let chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}

const paint =async ()=>{
    const data = await getCharacters()
    const fragment = document.createDocumentFragment()
    for (const datos of data) {
        const option = document.createElement('option')
        option.value = datos.name
        option.textContent = datos.name
        fragment.appendChild(option)
    }
    rangos.appendChild(fragment)
}
const graf = async (e)=>{
    const dt = await getCharacters()
    for (const data of dt) {
        if(e.target.value===data.name){
            grafico(
            parseInt(data.powerstats.intelligence),parseInt(data.powerstats.strength)
            ,parseInt(data.powerstats.speed),parseInt(data.powerstats.durability)
            ,parseInt(data.powerstats.power),parseInt(data.powerstats.combat))
            imgcard.src = data.images.md
            imgcard.alt  = data.name 
            nom.textContent = data.name
        }
    }
}
rangos.addEventListener('change',graf,false)
window.addEventListener('load',paint,false)
grafico()